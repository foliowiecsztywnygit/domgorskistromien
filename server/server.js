require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const db = require('./db');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

// --- Authentication Middleware ---
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.JWT_SECRET || 'secret_fallback_key', (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

// --- API Routes ---

// Admin Login
app.post('/api/admin/login', (req, res) => {
    const { password } = req.body;
    if (password === (process.env.ADMIN_PASSWORD || 'admin123')) {
        const token = jwt.sign({ admin: true }, process.env.JWT_SECRET || 'secret_fallback_key', { expiresIn: '12h' });
        res.json({ token });
    } else {
        res.status(401).json({ error: 'Invalid password' });
    }
});

// Admin Refresh Token
app.post('/api/admin/refresh', authenticateToken, (req, res) => {
    const token = jwt.sign({ admin: true }, process.env.JWT_SECRET || 'secret_fallback_key', { expiresIn: '12h' });
    res.json({ token });
});

// Get Availability (Public)
app.get('/api/availability', (req, res) => {
    db.all(`SELECT cabin_id, start_date, end_date FROM blocks`, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});

// Get Cabins/Rooms (Public)
app.get('/api/cabins', (req, res) => {
    db.all(`SELECT * FROM cabins`, [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

// --- Protected Admin Routes ---

// Get all blocks
app.get('/api/admin/blocks', authenticateToken, (req, res) => {
    db.all(`SELECT * FROM blocks`, [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

// Add a new block (manual)
app.post('/api/admin/blocks', authenticateToken, (req, res) => {
    const { cabin_id, start_date, end_date, reason } = req.body;
    if (!cabin_id || !start_date || !end_date) {
        return res.status(400).json({ error: 'Missing required fields' });
    }
    
    const stmt = db.prepare(`INSERT INTO blocks (cabin_id, start_date, end_date, reason) VALUES (?, ?, ?, ?)`);
    stmt.run([cabin_id, start_date, end_date, reason || 'manual'], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ id: this.lastID });
    });
    stmt.finalize();
});

// Delete a block
app.delete('/api/admin/blocks/:id', authenticateToken, (req, res) => {
    const { id } = req.params;
    db.run(`DELETE FROM blocks WHERE id = ?`, id, function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ deleted: this.changes });
    });
});

// Get inquiries
app.get('/api/admin/inquiries', authenticateToken, (req, res) => {
    db.all(`SELECT * FROM inquiries ORDER BY created_at DESC`, [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

const { Resend } = require('resend');
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

// --- Public Form Submission ---
app.post('/api/inquiries', (req, res) => {
    const { cabin_id, start_date, end_date, guest_name, guest_email, guest_phone, guest_count, children_under_3, children_over_3, message } = req.body;
    
    const stmt = db.prepare(`INSERT INTO inquiries (cabin_id, start_date, end_date, guest_name, guest_email, guest_phone, guest_count, children_under_3, children_over_3, message) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`);
    stmt.run([cabin_id, start_date, end_date, guest_name, guest_email, guest_phone, guest_count, children_under_3, children_over_3, message], async function(err) {
        if (err) return res.status(500).json({ error: err.message });
        
        console.log(`[NOWA REZERWACJA - DOMEK GÓRSKI STRUMIEŃ] Od: ${guest_name}, Tel: ${guest_phone}, Email: ${guest_email}, Pokój: ${cabin_id || 'Wszystkie/Dowolny'}, Termin: ${start_date} do ${end_date}`);
        
        // --- RESEND EMAIL INTEGRATION ---
        if (resend) {
          try {
            await resend.emails.send({
              from: 'rezerwacje@domekgorskistrumien.pl',
              to: 'biuro@domekgorskistrumien.pl',
              subject: `Zapytanie o rezerwację - Domek Górski Strumień - ${guest_name}`,
              html: `
                <h2>Nowe zapytanie o rezerwację w Domku Górski Strumień</h2>
                <p><strong>Imię i nazwisko:</strong> ${guest_name}</p>
                <p><strong>Telefon:</strong> <a href="tel:${guest_phone}">${guest_phone}</a></p>
                <p><strong>Email:</strong> ${guest_email}</p>
                <p><strong>Wybrany pokój / opcja:</strong> ID #${cabin_id || 'Brak'}</p>
                <p><strong>Termin:</strong> ${start_date} do ${end_date}</p>
                <p><strong>Liczba gości:</strong> ${guest_count} (dzieci do 3 lat: ${children_under_3 || 0}, pow. 3 lat: ${children_over_3 || 0})</p>
                <p><strong>Wiadomość gościa:</strong><br />${message || '(brak dodatkowej wiadomości)'}</p>
              `
            });
          } catch (emailErr) {
            console.error("Failed to send email via Resend", emailErr);
          }
        }

        res.json({ id: this.lastID, success: true });
    });
    stmt.finalize();
});

// --- Serve React Frontend in Production ---
const path = require('path');
const distPath = path.join(__dirname, '../dist');
app.use(express.static(distPath));

// Catch-all route for SPA (React Router)
app.use((req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(port, () => {
    console.log(`Domek Górski Strumień server is running on port ${port}`);
});

const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');

const dataDir = path.resolve(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);
}

const dbPath = path.resolve(dataDir, 'database.sqlite');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error connecting to the database:', err.message);
    } else {
        console.log('Connected to the SQLite database.');
        // Initialize tables
        db.serialize(() => {
            // Cabins table (rooms/units in Domek Górski Strumień)
            db.run(`CREATE TABLE IF NOT EXISTS cabins (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL
            )`);

            // Seed default rooms for Domek Górski Strumień if empty
            db.get("SELECT COUNT(*) AS count FROM cabins", (err, row) => {
                if (row && row.count === 0) {
                    const defaultRooms = [
                        "Pokój nr 1: Siwka i kasztanki (5 os.)",
                        "Pokój nr 2: Wiklinowy (4 os.)",
                        "Pokój nr 3: Studio Łowicki Akcent (5 os.)",
                        "Pokój nr 4: Migdałowy Poranek (4 os.)",
                        "Pokój nr 5: Dla Zakochanych (2 os.)"
                    ];
                    const stmt = db.prepare("INSERT INTO cabins (name) VALUES (?)");
                    defaultRooms.forEach(name => stmt.run(name));
                    stmt.finalize();
                } else {
                    // Ensure whole house option is removed
                    db.run("DELETE FROM cabins WHERE id = 6 OR name LIKE '%Cały domek%'");
                }
            });

            // Blocks table (reservations and manual blocks)
            db.run(`CREATE TABLE IF NOT EXISTS blocks (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                cabin_id INTEGER NOT NULL,
                start_date TEXT NOT NULL, -- YYYY-MM-DD
                end_date TEXT NOT NULL,   -- YYYY-MM-DD
                reason TEXT,              -- 'reservation', 'maintenance', etc.
                inquiry_id INTEGER,       -- null if manual block
                FOREIGN KEY(cabin_id) REFERENCES cabins(id)
            )`);

            // Inquiries table
            db.run(`CREATE TABLE IF NOT EXISTS inquiries (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                cabin_id INTEGER,
                start_date TEXT,
                end_date TEXT,
                guest_name TEXT,
                guest_email TEXT,
                guest_phone TEXT,
                message TEXT,
                status TEXT DEFAULT 'pending', -- 'pending', 'confirmed', 'rejected'
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                guest_count INTEGER,
                children_under_3 INTEGER,
                children_over_3 INTEGER
            )`);
        });
    }
});

module.exports = db;

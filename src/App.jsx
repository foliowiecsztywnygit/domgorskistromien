import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Apartments from './pages/Apartments';
import RoomDetail from './pages/RoomDetail';
import Pricing from './pages/Pricing';
import GalleryPage from './pages/GalleryPage';
import Attractions from './pages/Attractions';
import Rules from './pages/Rules';
import Contact from './pages/Contact';
import BookingPage from './pages/Booking';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import { HelmetProvider } from 'react-helmet-async';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppContent = () => {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {!isAdmin && <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/o-nas" element={<About />} />
          <Route path="/pokoje" element={<Apartments />} />
          <Route path="/pokoje/:slug" element={<RoomDetail />} />
          <Route path="/oferta" element={<Apartments />} />
          <Route path="/cennik" element={<Pricing />} />
          <Route path="/galeria" element={<GalleryPage />} />
          <Route path="/atrakcje" element={<Attractions />} />
          <Route path="/okolica" element={<Attractions />} />
          <Route path="/regulamin" element={<Rules />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/rezerwacja" element={<BookingPage />} />
          
          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminDashboard />} />

          {/* Fallback */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      {!isAdmin && <Footer />}
    </div>
  );
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Abroad from './pages/Abroad';
import WhyUs from './pages/WhyUs';
import About from './pages/About';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import './index.css';

function Layout({ children }) {
  return (<><Navbar /><main>{children}</main><Footer /></>);
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/abroad" element={<Layout><Abroad /></Layout>} />
        <Route path="/why-us" element={<Layout><WhyUs /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

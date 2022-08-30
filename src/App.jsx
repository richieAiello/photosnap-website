import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './routes/Home';
import Gallery from './routes/Gallery';
import Features from './routes/Features';
import Pricing from './routes/Pricing';
import Footer from './components/footer/Footer';

const App = props => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

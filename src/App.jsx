import Home from './components/Home.jsx';
import Hiw from './components/Hiw.jsx';
import Testimonials from './components/Testimonials.jsx';
import Pricing from './components/Pricing.jsx';
import Try from './components/Try.jsx';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import Sponsors from './components/Sponsors.jsx';

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Sponsors />
      <Hiw />
      <Testimonials />
      <Pricing />
      <Try />
      <Footer />
    </>
  );
}

export default App;

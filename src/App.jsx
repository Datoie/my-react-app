import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About'
import Product from './components/Product';
import Cards from './components/Cards';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='main-contianer'>
      <Header />
      <Hero />
      <About />
      <Product />
      <Cards />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
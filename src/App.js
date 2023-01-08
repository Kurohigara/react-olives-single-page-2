import React from 'react';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Header_content from './components/header_content/Header_content';
import Product from './components/product/Product';
import Whatwedo from './components/whatwedo/Whatwedo';
import Whoweare from './components/whoweare/Whoweare';

function App() {
  return (
    <div className="App">
     <Header/>
     <Header_content/>
     <Whoweare/>
     <Whatwedo/>
     <Product/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;

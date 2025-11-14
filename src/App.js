import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Card from './components/Card.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import iphone from './images/iphone14.jpg';
import tecno from './images/tecno cammon 30s.jpg';
import samsung from './images/samsung s25 ultra.jpg';
import infinix from './images/infinixnote 50 pro.jpg';
import google from './images/google pixcel 9 .jpg';
import xiaomi from './images/xiaomi 15 ultra .jpg';
import realme from './images/realme c71.jpg';
import oppo from './images/oppo a5 pro.jpg';
import './app.css';


function App() {
  const product = [
    { name: "IPHONE 14 PRO MAX", price: 145000, image: iphone },
    { name: "TECNO CAMMON 30s", price: 51500, image: tecno },
    { name: "GOOGLE PIXEL 9", price: 70000, image: google },
    { name: "INFINIX NOTE 50 PRO", price: 45000, image: infinix},
    { name: "SAMSUNG GALAXY S25 ULTRA", price: 150000, image: samsung },
    { name: "XIAOMI 15 ULTRA", price: 90000, image:  xiaomi },
    { name: "REALME C71", price: 35000, image: realme },
    {name: " OPPO a5 PRO", price: 40000, image: oppo }
  ];

  return (
    <Router>
      <div className="App">
        <Navbar />

        <div className="cardContainer">
          {product.map((item, index) => (
            <Card key={index} product={item} />
          ))}
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;


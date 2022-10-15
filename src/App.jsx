import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css';
import Navbar from "./components/Navbar";
import Sec1 from "./components/Section1";
import Sec2 from "./components/Section2";
import Sec3 from "./components/Section3";
import Sec4 from "./components/Section4";
import cardImg from './assets/images/tell-img.png';
import cardImgSale from "./assets/images/sale.png";
import Footer from "./components/Footer";

function App() {
  const obj = [{
    "id":1,
    "img": cardImg,
    "text": "Apple iPhone 6 ram4 yemkost 100%",
    "money": "$ 929",
    "rating": 1.9
  },{
    "id":2,
    "img": cardImg,
    "text": "Apple iPhone 6 ram4 yemkost 100%",
    "money": "$ 929",
    "rating": 1.9
  },{
    "id":3,
    "img": cardImg,
    "text": "Apple iPhone 6 ram4 yemkost 100%",
    "money": "$ 929",
    "rating": 1.9
  },{
    "id":4,
    "img": cardImg,
    "text": "Apple iPhone 6 ram4 yemkost 100%",
    "money": "$ 929",
    "rating": 1.9
  },{
    "id":5,
    "img": cardImg,
    "text": "Apple iPhone 6 ram4 yemkost 100%",
    "money": "$ 929",
    "rating": 1.9
  },{
    "id":6,
    "img": cardImg,
    "text": "Apple iPhone 6 ram4 yemkost 100%",
    "money": "$ 929",
    "rating": 1.9
  },{
    "id":7,
    "img": cardImg,
    "text": "Apple iPhone 6 ram4 yemkost 100%",
    "money": "$ 929",
    "rating": 1.9
  },{
    "id":8,
    "img": cardImg,
    "text": "Apple iPhone 6 ram4 yemkost 100%",
    "money": "$ 929",
    "rating": 1.9
  }];
  const sales=[{
    "id":1,
    "img": cardImg,
    "saleImg": cardImgSale,
    "text": "Apple iPhone 6 ram4 yemkost 100%",
    "money": "$ 929",
    "rating": 1.9,
    "sales":"$ 99.9"
  },{
    "id":2,
    "img": cardImg,
    "saleImg": cardImgSale,
    "text": "Apple iPhone 6 ram4 yemkost 100%",
    "money": "$ 929",
    "rating": 1.9,
    "sales":"$ 99.9"
  },{
    "id":3,
    "img": cardImg,
    "saleImg": cardImgSale,
    "text": "Apple iPhone 6 ram4 yemkost 100%",
    "money": "$ 929",
    "rating": 1.9,
    "sales":"$ 99.9"
  },{
    "id":4,
    "img": cardImg,
    "saleImg": cardImgSale,
    "text": "Apple iPhone 6 ram4 yemkost 100%",
    "money": "$ 929",
    "rating": 1.9,
    "sales":"$ 99.9"
  }];
  return (
    <>
      <Navbar />
      <main>
        <Sec1 />
        <Sec2 obj={obj} key={1}/>
        <Sec3/>
        <Sec4 sales={sales} key={2}/>
      </main>
      <Footer/>
    </>
  )
}

export default App

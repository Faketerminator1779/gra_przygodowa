import './App.css';
import React, { useState, useEffect } from 'react';

import Plansza from './komponenty/Plansza.js';
import Wiadomosc from './komponenty/Wiadomosc.js';

import tabliczkaImg from './img/Tabliczka.png'

import znalezione1Img from './img/Znalezione1.png'
import znalezione2Img from './img/Znalezione2.png'
import znalezione3Img from './img/Znalezione3.png'
import znalezione4Img from './img/Znalezione4.png'
import znalezione5Img from './img/Znalezione5.png'
import znalezione6Img from './img/Znalezione6.png'
import znalezione7Img from './img/Znalezione7.png'
import znalezione8Img from './img/Znalezione8.png'



function App() {
  const [wiadomosc, setWiadomosc] = useState("");
  const [znalezioneTabliczki, setTabliczki] = useState([false,false,false,false,false,false,false,false]);
  return (
    <>
      <table className='glowna'>
        <thead>
          <tr>
            <td colSpan={2} className='oddzielenie'>
              <table>
                <tbody>
                  <tr>
                    <td>{znalezioneTabliczki[0]?<img src={znalezione1Img}/>: <img src={tabliczkaImg}/>}</td>
                    <td>{znalezioneTabliczki[1]?<img src={znalezione2Img}/>: <img src={tabliczkaImg}/>}</td>
                    <td>{znalezioneTabliczki[2]?<img src={znalezione3Img}/>: <img src={tabliczkaImg}/>}</td>
                    <td>{znalezioneTabliczki[3]?<img src={znalezione4Img}/>: <img src={tabliczkaImg}/>}</td>
                    <td>{znalezioneTabliczki[4]?<img src={znalezione5Img}/>: <img src={tabliczkaImg}/>}</td>
                    <td>{znalezioneTabliczki[5]?<img src={znalezione6Img}/>: <img src={tabliczkaImg}/>}</td>
                    <td>{znalezioneTabliczki[6]?<img src={znalezione7Img}/>: <img src={tabliczkaImg}/>}</td>
                    <td>{znalezioneTabliczki[7]?<img src={znalezione8Img}/>: <img src={tabliczkaImg}/>}</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='plansza oddzielenie'>
              <Plansza setWiadomosc={setWiadomosc} setTabliczki={setTabliczki}/>
            </td>
            <td className='wiadomosc oddzielenie'>
              <Wiadomosc wiadomosc={wiadomosc}/>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default App;

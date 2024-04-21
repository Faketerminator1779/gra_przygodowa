import './App.css';
import React, { useState, useEffect } from 'react';

import Plansza from './komponenty/Plansza.js';
import Wiadomosc from './komponenty/Wiadomosc.js';






function App() {
  const [wiadomosc, setWiadomosc] = useState("");
  return (
    <>
      <table>
        <thead>
          <tr>
            <td colSpan={2} className='oddzielenie'>123</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='plansza oddzielenie'>
              <Plansza setWiadomosc={setWiadomosc}/>
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

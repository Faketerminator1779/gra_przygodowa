import './App.css';
import React, { useState, useEffect } from 'react';

import graczImg from './img/Gracz.png'
import tloImg from './img/Tło.png'
import scianaImg from './img/Ściana.png'
import tabliczkaImg from './img/Tabliczka.png'
import doktorImg from './img/Doktór.png'


class Gracz {
  constructor(x,y,wyglad, zakresWidzenia) {
    this.x = x;
    this.y = y;
    this.wyglad = wyglad;
    this.zakresWidzenia = zakresWidzenia;
  }
}

class Sciana {
  constructor(x,y,wyglad) {
    this.x = x;
    this.y = y;
    this.wyglad = wyglad;
  }
}

class Interaktywne {
  constructor(x,y,wyglad,wiadomosc) {
    this.x = x;
    this.y = y;
    this.wyglad = wyglad;
    this.wiadomosc = wiadomosc;
  }
}



function Plansza({ setWiadomosc, setMonety }) {
  const [plansza, setPlansza] = useState([]);
  const [gracz, setGracz] = useState(new Gracz(13,13,graczImg,4))

  const [szerokoscPlanszy, ] = useState(25);
  const [wysokoscPlanszy, ] = useState(25);

  const [sciany, setSciany] = useState([])

  useEffect(() => {
    // Grubość obwódki
    const gruboscObwodki = 4;
  
    // Generowanie ścian za pomocą pętli for
    const generatedWalls = [];
    for (let i = 0; i < wysokoscPlanszy; i++) {
      // Dodaj ściany na lewej i prawej krawędzi planszy
      for (let k = 0; k < gruboscObwodki; k++) {
        generatedWalls.push(new Sciana(k, i, scianaImg)); // Lewa krawędź
        generatedWalls.push(new Sciana(szerokoscPlanszy - 1 - k, i, scianaImg)); // Prawa krawędź
      }
    }
    for (let j = 0; j < szerokoscPlanszy; j++) {
      // Dodaj ściany na górnej i dolnej krawędzi planszy
      for (let k = 0; k < gruboscObwodki; k++) {
        generatedWalls.push(new Sciana(j, k, scianaImg)); // Górna krawędź
        generatedWalls.push(new Sciana(j, wysokoscPlanszy - 1 - k, scianaImg)); // Dolna krawędź
      }
    }
    setSciany(generatedWalls); // Ustaw wygenerowane ściany jako stan
  }, [wysokoscPlanszy, szerokoscPlanszy]);

  const [interaktywne, ] = useState ([
    new Interaktywne(8,8,tabliczkaImg,"Hej czy wiesz, że wchodzenie w Tabliczki daje ci wiadomość?"),
    new Interaktywne(9,6,doktorImg,"Nie tykać lekarza"),
  ])
  

  useEffect(() => {
    const plansza = [];
    for (let i = 0; i < wysokoscPlanszy; i++) {
      plansza[i] = [];
      for (let j = 0; j < szerokoscPlanszy; j++) {
        let pole = tloImg;
        let scianaNaPozycji = sciany.find(sciana => sciana.x === j && sciana.y === i);
        let interaktywneNaPozycji = interaktywne.find(interaktywne => interaktywne.x === j && interaktywne.y === i);
        if (scianaNaPozycji) {
          pole = scianaNaPozycji.wyglad;
        } else if (interaktywneNaPozycji) {
          pole = interaktywneNaPozycji.wyglad;
        } else if (i === gracz.y && j === gracz.x) {
          pole = gracz.wyglad;
        } 
        plansza[i][j] = pole;
      }
    }
    setPlansza(plansza);
  }, [wysokoscPlanszy, szerokoscPlanszy, gracz, sciany, interaktywne]);




  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event instanceof KeyboardEvent) {
        setGracz((prevGracz) => {
          let newGracz = new Gracz(prevGracz.x, prevGracz.y, prevGracz.wyglad, prevGracz.zakresWidzenia);
          switch (event.key) {
            case 'ArrowDown':
              let interaktywneNaPozycjiDown = interaktywne.find(interaktywne => interaktywne.x === prevGracz.x && interaktywne.y === prevGracz.y + 1)
              if (interaktywneNaPozycjiDown) {
                setWiadomosc(interaktywneNaPozycjiDown.wiadomosc)
              } else if (prevGracz.y !== wysokoscPlanszy - 1 && !sciany.find(sciana => sciana.x === prevGracz.x && sciana.y === prevGracz.y + 1)) { 
                newGracz.y = prevGracz.y + 1;
              }
              break;
            case 'ArrowUp':
              let interaktywneNaPozycjiUp = interaktywne.find(interaktywne => interaktywne.x === prevGracz.x && interaktywne.y === prevGracz.y - 1) 
              if (interaktywneNaPozycjiUp) {
                setWiadomosc(interaktywneNaPozycjiUp.wiadomosc)
              } else if (prevGracz.y !== 0 && !sciany.find(sciana => sciana.x === prevGracz.x && sciana.y === prevGracz.y - 1)) {
                newGracz.y = prevGracz.y - 1;
              }
              break;
            case 'ArrowLeft':
              let interaktywneNaPozycjiLeft = interaktywne.find(interaktywne => interaktywne.x === prevGracz.x - 1 && interaktywne.y === prevGracz.y)
              if (interaktywneNaPozycjiLeft) {
                setWiadomosc(interaktywneNaPozycjiLeft.wiadomosc)
              } else if (prevGracz.x !== 0 && !sciany.find(sciana => sciana.x === prevGracz.x - 1 && sciana.y === prevGracz.y)) {
                newGracz.x = prevGracz.x - 1;
              }
              break;
            case 'ArrowRight':
              let interaktywneNaPozycjiRight = interaktywne.find(interaktywne => interaktywne.x === prevGracz.x + 1 && interaktywne.y === prevGracz.y)
              if (interaktywneNaPozycjiRight) {
                setWiadomosc(interaktywneNaPozycjiRight.wiadomosc)
              } else if (prevGracz.x !== szerokoscPlanszy - 1 && !sciany.find(sciana => sciana.x === prevGracz.x + 1 && sciana.y === prevGracz.y)) {
                newGracz.x = prevGracz.x + 1;
              }
              break;
            default:
              break;
          }
          return newGracz;
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, );



  return (
    <table>
      <tbody>
        {plansza.map((row, rowIndex) => {
          // Określenie granic zasięgu widzenia gracza
          const startingRow = Math.max(0, gracz.y - gracz.zakresWidzenia);
          const endingRow = Math.min(wysokoscPlanszy - 1, gracz.y + gracz.zakresWidzenia);
          console.log(gracz)
          // Sprawdzenie, czy dany wiersz mieści się w zasięgu widzenia gracza
          if (rowIndex < startingRow || rowIndex > endingRow) {
            return null; // Pominięcie wierszy poza zasięgiem widzenia gracza
          }
  
          return (
            <tr key={rowIndex} className='plansza'>
              {row.map((cell, cellIndex) => {
                // Określenie granic zasięgu widzenia gracza dla kolumn
                const startingCol = Math.max(0, gracz.x - gracz.zakresWidzenia);
                const endingCol = Math.min(szerokoscPlanszy - 1, gracz.x + gracz.zakresWidzenia);
  
                // Sprawdzenie, czy dana komórka mieści się w zasięgu widzenia gracza
                if (cellIndex < startingCol || cellIndex > endingCol) {
                  return null; // Pominięcie komórek poza zasięgiem widzenia gracza
                }
  
                // Renderowanie obrazka komórki
                return <td key={cellIndex} className='plansza'><img src={cell} alt=''/></td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function Wiadomosc({ wiadomosc }) {
  return (
    <div>{wiadomosc}</div>
  );
}



function App() {
  const [wiadomosc, setWiadomosc] = useState("");
  const [monety, setMonety] = useState()
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
              <Plansza setWiadomosc={setWiadomosc} setMonety={setMonety} />
            </td>
            <td className='wiadomosc oddzielenie'>
              <Wiadomosc wiadomosc={wiadomosc} monety={monety} />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default App;

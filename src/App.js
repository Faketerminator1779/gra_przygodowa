import './App.css';
import React, { useState, useEffect } from 'react';

import graczImg from './img/Gracz.png'
import tloImg from './img/Tło.png'
import scianaImg from './img/Ściana.png'
import tabliczkaImg from './img/Tabliczka.png'
import doktorImg from './img/Doktór.png'
import kamienImg from './img/Kamień.png'


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

class Kamien {
  constructor(x,y,wyglad) {
    this.x = x;
    this.y = y;
    this.wyglad = wyglad
  }
}



function Plansza({ setWiadomosc, setMonety }) {
  const [plansza, setPlansza] = useState([]);
  const [gracz, setGracz] = useState(new Gracz(5,5,graczImg,4))

  const [szerokoscPlanszy, ] = useState(41);
  const [wysokoscPlanszy, ] = useState(39);

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
    generatedWalls.push(new Sciana(4,8,scianaImg))
    generatedWalls.push(new Sciana(4,9,scianaImg))
    generatedWalls.push(new Sciana(4,10,scianaImg))
    generatedWalls.push(new Sciana(4,11,scianaImg))
    generatedWalls.push(new Sciana(4,13,scianaImg))
    generatedWalls.push(new Sciana(4,19,scianaImg))
    generatedWalls.push(new Sciana(4,28,scianaImg))
    generatedWalls.push(new Sciana(4,32,scianaImg))
    generatedWalls.push(new Sciana(4,33,scianaImg))
    generatedWalls.push(new Sciana(4,34,scianaImg))

    generatedWalls.push(new Sciana(5,13,scianaImg))
    generatedWalls.push(new Sciana(5,19,scianaImg))
    generatedWalls.push(new Sciana(5,22,scianaImg))
    generatedWalls.push(new Sciana(5,28,scianaImg))
    generatedWalls.push(new Sciana(5,34,scianaImg))

    generatedWalls.push(new Sciana(6,8,scianaImg))
    generatedWalls.push(new Sciana(6,9,scianaImg))
    generatedWalls.push(new Sciana(6,10,scianaImg))
    generatedWalls.push(new Sciana(6,11,scianaImg))
    generatedWalls.push(new Sciana(6,12,scianaImg))
    generatedWalls.push(new Sciana(6,13,scianaImg))
    generatedWalls.push(new Sciana(6,19,scianaImg))
    generatedWalls.push(new Sciana(6,21,scianaImg))
    generatedWalls.push(new Sciana(6,28,scianaImg))
    generatedWalls.push(new Sciana(6,31,scianaImg))
    generatedWalls.push(new Sciana(6,34,scianaImg))

    generatedWalls.push(new Sciana(7,4,scianaImg))
    generatedWalls.push(new Sciana(7,7,scianaImg))
    generatedWalls.push(new Sciana(7,8,scianaImg))
    generatedWalls.push(new Sciana(7,9,scianaImg))
    generatedWalls.push(new Sciana(7,10,scianaImg))
    generatedWalls.push(new Sciana(7,17,scianaImg))
    generatedWalls.push(new Sciana(7,19,scianaImg))
    generatedWalls.push(new Sciana(7,20,scianaImg))
    generatedWalls.push(new Sciana(7,21,scianaImg))
    generatedWalls.push(new Sciana(7,23,scianaImg))
    generatedWalls.push(new Sciana(7,26,scianaImg))
    generatedWalls.push(new Sciana(7,32,scianaImg))
    generatedWalls.push(new Sciana(7,34,scianaImg))

    generatedWalls.push(new Sciana(8,8,scianaImg))
    generatedWalls.push(new Sciana(8,9,scianaImg))
    generatedWalls.push(new Sciana(8,10,scianaImg))
    generatedWalls.push(new Sciana(8,12,scianaImg))
    generatedWalls.push(new Sciana(8,13,scianaImg))
    generatedWalls.push(new Sciana(8,16,scianaImg))
    generatedWalls.push(new Sciana(8,17,scianaImg))
    generatedWalls.push(new Sciana(8,19,scianaImg))
    generatedWalls.push(new Sciana(8,21,scianaImg))
    generatedWalls.push(new Sciana(8,25,scianaImg))
    generatedWalls.push(new Sciana(8,26,scianaImg))
    generatedWalls.push(new Sciana(8,29,scianaImg))
    generatedWalls.push(new Sciana(8,30,scianaImg))
    generatedWalls.push(new Sciana(8,34,scianaImg))

    generatedWalls.push(new Sciana(9,8,scianaImg))
    generatedWalls.push(new Sciana(9,9,scianaImg))
    generatedWalls.push(new Sciana(9,10,scianaImg))
    generatedWalls.push(new Sciana(9,12,scianaImg))
    generatedWalls.push(new Sciana(9,13,scianaImg))
    generatedWalls.push(new Sciana(9,14,scianaImg))
    generatedWalls.push(new Sciana(9,15,scianaImg))
    generatedWalls.push(new Sciana(9,16,scianaImg))
    generatedWalls.push(new Sciana(9,17,scianaImg))
    generatedWalls.push(new Sciana(9,19,scianaImg))
    generatedWalls.push(new Sciana(9,21,scianaImg))
    generatedWalls.push(new Sciana(9,23,scianaImg))
    generatedWalls.push(new Sciana(9,27,scianaImg))
    generatedWalls.push(new Sciana(9,28,scianaImg))
    generatedWalls.push(new Sciana(9,32,scianaImg))

    generatedWalls.push(new Sciana(10,8,scianaImg))
    generatedWalls.push(new Sciana(10,9,scianaImg))
    generatedWalls.push(new Sciana(10,13,scianaImg))
    generatedWalls.push(new Sciana(10,19,scianaImg))
    generatedWalls.push(new Sciana(10,21,scianaImg))
    generatedWalls.push(new Sciana(10,23,scianaImg))
    generatedWalls.push(new Sciana(10,25,scianaImg))
    generatedWalls.push(new Sciana(10,28,scianaImg))
    generatedWalls.push(new Sciana(10,29,scianaImg))
    generatedWalls.push(new Sciana(10,30,scianaImg))
    generatedWalls.push(new Sciana(10,32,scianaImg))
    generatedWalls.push(new Sciana(10,34,scianaImg))

    generatedWalls.push(new Sciana(11,8,scianaImg))
    generatedWalls.push(new Sciana(11,9,scianaImg))
    generatedWalls.push(new Sciana(11,13,scianaImg))
    generatedWalls.push(new Sciana(11,15,scianaImg))
    generatedWalls.push(new Sciana(11,16,scianaImg))
    generatedWalls.push(new Sciana(11,17,scianaImg))
    generatedWalls.push(new Sciana(11,19,scianaImg))
    generatedWalls.push(new Sciana(11,28,scianaImg))
    generatedWalls.push(new Sciana(11,29,scianaImg))
    generatedWalls.push(new Sciana(11,30,scianaImg))
    generatedWalls.push(new Sciana(11,33,scianaImg))
    generatedWalls.push(new Sciana(11,34,scianaImg))

    generatedWalls.push(new Sciana(12,5,scianaImg))
    generatedWalls.push(new Sciana(12,8,scianaImg))
    generatedWalls.push(new Sciana(12,9,scianaImg))
    generatedWalls.push(new Sciana(12,13,scianaImg))
    generatedWalls.push(new Sciana(12,15,scianaImg))
    generatedWalls.push(new Sciana(12,17,scianaImg))
    generatedWalls.push(new Sciana(12,18,scianaImg))
    generatedWalls.push(new Sciana(12,19,scianaImg))
    generatedWalls.push(new Sciana(12,21,scianaImg))
    generatedWalls.push(new Sciana(12,23,scianaImg))
    generatedWalls.push(new Sciana(12,25,scianaImg))
    generatedWalls.push(new Sciana(12,28,scianaImg))
    generatedWalls.push(new Sciana(12,29,scianaImg))
    generatedWalls.push(new Sciana(12,34,scianaImg))

    generatedWalls.push(new Sciana(13,8,scianaImg))
    generatedWalls.push(new Sciana(13,9,scianaImg))
    generatedWalls.push(new Sciana(13,13,scianaImg))
    generatedWalls.push(new Sciana(13,21,scianaImg))
    generatedWalls.push(new Sciana(13,28,scianaImg))
    generatedWalls.push(new Sciana(13,30,scianaImg))
    generatedWalls.push(new Sciana(13,34,scianaImg))

    generatedWalls.push(new Sciana(14,4,scianaImg))
    generatedWalls.push(new Sciana(14,6,scianaImg))
    generatedWalls.push(new Sciana(14,7,scianaImg))
    generatedWalls.push(new Sciana(14,8,scianaImg))
    generatedWalls.push(new Sciana(14,13,scianaImg))
    generatedWalls.push(new Sciana(14,17,scianaImg))
    generatedWalls.push(new Sciana(14,21,scianaImg))
    generatedWalls.push(new Sciana(14,22,scianaImg))
    generatedWalls.push(new Sciana(14,23,scianaImg))
    generatedWalls.push(new Sciana(14,24,scianaImg))
    generatedWalls.push(new Sciana(14,25,scianaImg))
    generatedWalls.push(new Sciana(14,26,scianaImg))
    generatedWalls.push(new Sciana(14,27,scianaImg))
    generatedWalls.push(new Sciana(14,28,scianaImg))
    generatedWalls.push(new Sciana(14,34,scianaImg))

    generatedWalls.push(new Sciana(15,13,scianaImg))
    generatedWalls.push(new Sciana(15,17,scianaImg))
    generatedWalls.push(new Sciana(15,21,scianaImg))
    generatedWalls.push(new Sciana(15,28,scianaImg))
    generatedWalls.push(new Sciana(15,29,scianaImg))
    generatedWalls.push(new Sciana(15,31,scianaImg))
    generatedWalls.push(new Sciana(15,32,scianaImg))
    generatedWalls.push(new Sciana(15,33,scianaImg))
    generatedWalls.push(new Sciana(15,34,scianaImg))

    generatedWalls.push(new Sciana(16,4,scianaImg))
    generatedWalls.push(new Sciana(16,5,scianaImg))
    generatedWalls.push(new Sciana(16,6,scianaImg))
    generatedWalls.push(new Sciana(16,7,scianaImg))
    generatedWalls.push(new Sciana(16,8,scianaImg))
    generatedWalls.push(new Sciana(16,9,scianaImg))
    generatedWalls.push(new Sciana(16,10,scianaImg))
    generatedWalls.push(new Sciana(16,11,scianaImg))
    generatedWalls.push(new Sciana(16,12,scianaImg))
    generatedWalls.push(new Sciana(16,13,scianaImg))
    generatedWalls.push(new Sciana(16,20,scianaImg))
    generatedWalls.push(new Sciana(16,21,scianaImg))
    generatedWalls.push(new Sciana(16,28,scianaImg))
    generatedWalls.push(new Sciana(16,33,scianaImg))
    generatedWalls.push(new Sciana(16,34,scianaImg))

    generatedWalls.push(new Sciana(17,10,scianaImg))
    generatedWalls.push(new Sciana(17,12,scianaImg))
    generatedWalls.push(new Sciana(17,13,scianaImg))
    generatedWalls.push(new Sciana(17,20,scianaImg))
    generatedWalls.push(new Sciana(17,21,scianaImg))
    generatedWalls.push(new Sciana(17,29,scianaImg))
    generatedWalls.push(new Sciana(17,31,scianaImg))
    generatedWalls.push(new Sciana(17,32,scianaImg))
    generatedWalls.push(new Sciana(17,33,scianaImg))
    generatedWalls.push(new Sciana(17,34,scianaImg))

    generatedWalls.push(new Sciana(18,7,scianaImg))
    generatedWalls.push(new Sciana(18,13,scianaImg))
    generatedWalls.push(new Sciana(18,14,scianaImg))
    generatedWalls.push(new Sciana(18,15,scianaImg))
    generatedWalls.push(new Sciana(18,16,scianaImg))
    generatedWalls.push(new Sciana(18,17,scianaImg))
    generatedWalls.push(new Sciana(18,18,scianaImg))
    generatedWalls.push(new Sciana(18,19,scianaImg))
    generatedWalls.push(new Sciana(18,20,scianaImg))
    generatedWalls.push(new Sciana(18,21,scianaImg))
    generatedWalls.push(new Sciana(18,28,scianaImg))
    generatedWalls.push(new Sciana(18,34,scianaImg))

    generatedWalls.push(new Sciana(19,13,scianaImg))
    generatedWalls.push(new Sciana(19,16,scianaImg))
    generatedWalls.push(new Sciana(19,23,scianaImg))
    generatedWalls.push(new Sciana(19,28,scianaImg))
    generatedWalls.push(new Sciana(19,31,scianaImg))
    generatedWalls.push(new Sciana(19,34,scianaImg))

    generatedWalls.push(new Sciana(20,10,scianaImg))
    generatedWalls.push(new Sciana(20,13,scianaImg))
    generatedWalls.push(new Sciana(20,19,scianaImg))
    generatedWalls.push(new Sciana(20,20,scianaImg))
    generatedWalls.push(new Sciana(20,21,scianaImg))
    generatedWalls.push(new Sciana(20,22,scianaImg))
    generatedWalls.push(new Sciana(20,23,scianaImg))
    generatedWalls.push(new Sciana(20,24,scianaImg))
    generatedWalls.push(new Sciana(20,25,scianaImg))
    generatedWalls.push(new Sciana(20,26,scianaImg))
    generatedWalls.push(new Sciana(20,27,scianaImg))
    generatedWalls.push(new Sciana(20,28,scianaImg))
    generatedWalls.push(new Sciana(20,33,scianaImg))
    generatedWalls.push(new Sciana(20,34,scianaImg))

    generatedWalls.push(new Sciana(21,13,scianaImg))
    generatedWalls.push(new Sciana(21,17,scianaImg))
    generatedWalls.push(new Sciana(21,18,scianaImg))
    generatedWalls.push(new Sciana(21,24,scianaImg))
    generatedWalls.push(new Sciana(21,25,scianaImg))
    generatedWalls.push(new Sciana(21,26,scianaImg))
    generatedWalls.push(new Sciana(21,28,scianaImg))
    generatedWalls.push(new Sciana(21,29,scianaImg))
    generatedWalls.push(new Sciana(21,33,scianaImg))
    generatedWalls.push(new Sciana(21,34,scianaImg))

    generatedWalls.push(new Sciana(22,9,scianaImg))
    generatedWalls.push(new Sciana(22,13,scianaImg))
    generatedWalls.push(new Sciana(22,15,scianaImg))
    generatedWalls.push(new Sciana(22,18,scianaImg))
    generatedWalls.push(new Sciana(22,22,scianaImg))
    generatedWalls.push(new Sciana(22,24,scianaImg))
    generatedWalls.push(new Sciana(22,32,scianaImg))
    generatedWalls.push(new Sciana(22,33,scianaImg))
    generatedWalls.push(new Sciana(22,34,scianaImg))

    generatedWalls.push(new Sciana(23,12,scianaImg))
    generatedWalls.push(new Sciana(23,13,scianaImg))
    generatedWalls.push(new Sciana(23,20,scianaImg))
    generatedWalls.push(new Sciana(23,24,scianaImg))
    generatedWalls.push(new Sciana(23,28,scianaImg))
    generatedWalls.push(new Sciana(23,30,scianaImg))
    generatedWalls.push(new Sciana(23,34,scianaImg))

    generatedWalls.push(new Sciana(24,7,scianaImg))
    generatedWalls.push(new Sciana(24,10,scianaImg))
    generatedWalls.push(new Sciana(24,13,scianaImg))
    generatedWalls.push(new Sciana(24,18,scianaImg))
    generatedWalls.push(new Sciana(24,28,scianaImg))
    generatedWalls.push(new Sciana(24,33,scianaImg))
    generatedWalls.push(new Sciana(24,34,scianaImg))

    generatedWalls.push(new Sciana(25,5,scianaImg))
    generatedWalls.push(new Sciana(25,13,scianaImg))
    generatedWalls.push(new Sciana(25,14,scianaImg))
    generatedWalls.push(new Sciana(25,16,scianaImg))
    generatedWalls.push(new Sciana(25,17,scianaImg))
    generatedWalls.push(new Sciana(25,18,scianaImg))
    generatedWalls.push(new Sciana(25,23,scianaImg))
    generatedWalls.push(new Sciana(25,24,scianaImg))
    generatedWalls.push(new Sciana(25,25,scianaImg))
    generatedWalls.push(new Sciana(25,27,scianaImg))
    generatedWalls.push(new Sciana(25,31,scianaImg))
    generatedWalls.push(new Sciana(25,32,scianaImg))
    generatedWalls.push(new Sciana(25,33,scianaImg))
    generatedWalls.push(new Sciana(25,34,scianaImg))

    generatedWalls.push(new Sciana(26,6,scianaImg))
    generatedWalls.push(new Sciana(26,8,scianaImg))
    generatedWalls.push(new Sciana(26,15,scianaImg))
    generatedWalls.push(new Sciana(26,16,scianaImg))
    generatedWalls.push(new Sciana(26,17,scianaImg))
    generatedWalls.push(new Sciana(26,18,scianaImg))
    generatedWalls.push(new Sciana(26,23,scianaImg))
    generatedWalls.push(new Sciana(26,30,scianaImg))
    generatedWalls.push(new Sciana(26,34,scianaImg))

    generatedWalls.push(new Sciana(27,11,scianaImg))
    generatedWalls.push(new Sciana(27,13,scianaImg))
    generatedWalls.push(new Sciana(27,18,scianaImg))
    generatedWalls.push(new Sciana(27,19,scianaImg))
    generatedWalls.push(new Sciana(27,20,scianaImg))
    generatedWalls.push(new Sciana(27,21,scianaImg))
    generatedWalls.push(new Sciana(27,22,scianaImg))
    generatedWalls.push(new Sciana(27,26,scianaImg))
    generatedWalls.push(new Sciana(27,27,scianaImg))
    generatedWalls.push(new Sciana(27,28,scianaImg))
    generatedWalls.push(new Sciana(27,30,scianaImg))
    generatedWalls.push(new Sciana(27,34,scianaImg))

    generatedWalls.push(new Sciana(28,6,scianaImg))
    generatedWalls.push(new Sciana(28,7,scianaImg))
    generatedWalls.push(new Sciana(28,8,scianaImg))
    generatedWalls.push(new Sciana(28,9,scianaImg))
    generatedWalls.push(new Sciana(28,10,scianaImg))
    generatedWalls.push(new Sciana(28,11,scianaImg))
    generatedWalls.push(new Sciana(28,13,scianaImg))
    generatedWalls.push(new Sciana(28,14,scianaImg))
    generatedWalls.push(new Sciana(28,26,scianaImg))
    generatedWalls.push(new Sciana(28,27,scianaImg))
    generatedWalls.push(new Sciana(28,28,scianaImg))
    generatedWalls.push(new Sciana(28,34,scianaImg))

    generatedWalls.push(new Sciana(29,7,scianaImg))
    generatedWalls.push(new Sciana(29,10,scianaImg))
    generatedWalls.push(new Sciana(29,14,scianaImg))
    generatedWalls.push(new Sciana(29,19,scianaImg))
    generatedWalls.push(new Sciana(29,23,scianaImg))
    generatedWalls.push(new Sciana(29,25,scianaImg))
    generatedWalls.push(new Sciana(29,26,scianaImg))
    generatedWalls.push(new Sciana(29,27,scianaImg))
    generatedWalls.push(new Sciana(29,28,scianaImg))
    generatedWalls.push(new Sciana(29,29,scianaImg))
    generatedWalls.push(new Sciana(29,30,scianaImg))
    generatedWalls.push(new Sciana(29,31,scianaImg))
    generatedWalls.push(new Sciana(29,32,scianaImg))
    generatedWalls.push(new Sciana(29,34,scianaImg))
    
    generatedWalls.push(new Sciana(30,7,scianaImg))
    generatedWalls.push(new Sciana(30,14,scianaImg))
    generatedWalls.push(new Sciana(30,21,scianaImg))
    generatedWalls.push(new Sciana(30,23,scianaImg))
    generatedWalls.push(new Sciana(30,30,scianaImg))
    generatedWalls.push(new Sciana(30,34,scianaImg))

    generatedWalls.push(new Sciana(31,7,scianaImg))
    generatedWalls.push(new Sciana(31,9,scianaImg))
    generatedWalls.push(new Sciana(31,12,scianaImg))
    generatedWalls.push(new Sciana(31,14,scianaImg))
    generatedWalls.push(new Sciana(31,19,scianaImg))
    generatedWalls.push(new Sciana(31,30,scianaImg))
    generatedWalls.push(new Sciana(31,34,scianaImg))

    generatedWalls.push(new Sciana(32,4,scianaImg))
    generatedWalls.push(new Sciana(32,6,scianaImg))
    generatedWalls.push(new Sciana(32,7,scianaImg))
    generatedWalls.push(new Sciana(32,9,scianaImg))
    generatedWalls.push(new Sciana(32,21,scianaImg))
    generatedWalls.push(new Sciana(32,30,scianaImg))
    generatedWalls.push(new Sciana(32,32,scianaImg))
    generatedWalls.push(new Sciana(32,34,scianaImg))

    generatedWalls.push(new Sciana(33,7,scianaImg))
    generatedWalls.push(new Sciana(33,10,scianaImg))
    generatedWalls.push(new Sciana(33,11,scianaImg))
    generatedWalls.push(new Sciana(33,14,scianaImg))
    generatedWalls.push(new Sciana(33,19,scianaImg))
    generatedWalls.push(new Sciana(33,21,scianaImg))
    generatedWalls.push(new Sciana(33,30,scianaImg))

    generatedWalls.push(new Sciana(34,7,scianaImg))
    generatedWalls.push(new Sciana(34,14,scianaImg))
    generatedWalls.push(new Sciana(34,21,scianaImg))
    generatedWalls.push(new Sciana(34,30,scianaImg))
    generatedWalls.push(new Sciana(34,34,scianaImg))

    generatedWalls.push(new Sciana(35,7,scianaImg))
    generatedWalls.push(new Sciana(35,14,scianaImg))
    generatedWalls.push(new Sciana(35,19,scianaImg))
    generatedWalls.push(new Sciana(35,21,scianaImg))
    generatedWalls.push(new Sciana(35,30,scianaImg))
    generatedWalls.push(new Sciana(35,34,scianaImg))

    generatedWalls.push(new Sciana(36,7,scianaImg))
    generatedWalls.push(new Sciana(36,8,scianaImg))
    generatedWalls.push(new Sciana(36,9,scianaImg))
    generatedWalls.push(new Sciana(36,10,scianaImg))
    generatedWalls.push(new Sciana(36,11,scianaImg))
    generatedWalls.push(new Sciana(36,12,scianaImg))
    generatedWalls.push(new Sciana(36,13,scianaImg))
    generatedWalls.push(new Sciana(36,14,scianaImg))
    generatedWalls.push(new Sciana(36,15,scianaImg))
    generatedWalls.push(new Sciana(36,16,scianaImg))
    generatedWalls.push(new Sciana(36,17,scianaImg))
    generatedWalls.push(new Sciana(36,18,scianaImg))
    generatedWalls.push(new Sciana(36,19,scianaImg))
    generatedWalls.push(new Sciana(36,20,scianaImg))
    generatedWalls.push(new Sciana(36,21,scianaImg))
    generatedWalls.push(new Sciana(36,22,scianaImg))
    generatedWalls.push(new Sciana(36,23,scianaImg))
    generatedWalls.push(new Sciana(36,24,scianaImg))
    generatedWalls.push(new Sciana(36,26,scianaImg))
    generatedWalls.push(new Sciana(36,27,scianaImg))
    generatedWalls.push(new Sciana(36,28,scianaImg))
    generatedWalls.push(new Sciana(36,29,scianaImg))
    generatedWalls.push(new Sciana(36,30,scianaImg))
    generatedWalls.push(new Sciana(36,31,scianaImg))
    generatedWalls.push(new Sciana(36,33,scianaImg))
    generatedWalls.push(new Sciana(36,33,scianaImg))
    generatedWalls.push(new Sciana(36,34,scianaImg))










    setSciany(generatedWalls); // Ustaw wygenerowane ściany jako stan
  }, [wysokoscPlanszy, szerokoscPlanszy]);

  const [interaktywne, ] = useState ([
    new Interaktywne(4,12,tabliczkaImg,""),
  ])
  
  const [kamienie, setKamien] = useState ([
    new Kamien(6,6,kamienImg),
  ])

  useEffect(() => {
    const plansza = [];
    for (let i = 0; i < wysokoscPlanszy; i++) {
      plansza[i] = [];
      for (let j = 0; j < szerokoscPlanszy; j++) {
        let pole = tloImg;
        let scianaNaPozycji = sciany.find(sciana => sciana.x === j && sciana.y === i);
        let interaktywneNaPozycji = interaktywne.find(interaktywne => interaktywne.x === j && interaktywne.y === i);
        let kamienNaPozycji = kamienie.find(kamienie => kamienie.x === j && kamienie.y === i)
        if (kamienNaPozycji) {
          pole = kamienNaPozycji.wyglad
        } else if (scianaNaPozycji) {
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
              let kamienNaPozycjiDown = kamienie.find(kamienie => kamienie.x === prevGracz.x && kamienie.y === prevGracz.y + 1)
              let scianaNaPozycjiDown = sciany.find(sciana => sciana.x === prevGracz.x && sciana.y === prevGracz.y + 1)
              if (interaktywneNaPozycjiDown) {
                setWiadomosc(interaktywneNaPozycjiDown.wiadomosc)
              } else if (kamienNaPozycjiDown) {
                let interaktywneNaPozycjiDown2 = interaktywne.find(interaktywne => interaktywne.x === prevGracz.x && interaktywne.y === prevGracz.y + 2)
                let kamienNaPozycjiDown2 = kamienie.find(kamienie => kamienie.x === prevGracz.x && kamienie.y === prevGracz.y + 2)
                let scianaNaPozycjiDown2 = sciany.find(sciana => sciana.x === prevGracz.x && sciana.y === prevGracz.y + 2)
                
                if (!interaktywneNaPozycjiDown2 && !kamienNaPozycjiDown2 && !scianaNaPozycjiDown2) {
                  setKamien(prevKamienie => prevKamienie.filter(kamien => !(kamien.x === prevGracz.x && kamien.y === prevGracz.y + 1)));

                  setKamien(prevKamienie => [
                    ...prevKamienie,
                    { x: prevGracz.x, y: prevGracz.y + 2, wyglad: kamienNaPozycjiDown.wyglad }
                  ]);

                  newGracz.y = prevGracz.y + 1
                }
              } else if (prevGracz.y !== wysokoscPlanszy - 1 && !scianaNaPozycjiDown) { 
                newGracz.y = prevGracz.y + 1;
              }
              break;
            case 'ArrowUp':
              let interaktywneNaPozycjiUp = interaktywne.find(interaktywne => interaktywne.x === prevGracz.x && interaktywne.y === prevGracz.y - 1)
              let kamienNaPozycjiUp = kamienie.find(kamienie => kamienie.x === prevGracz.x && kamienie.y === prevGracz.y - 1) 
              let scianaNaPozycjiUp = sciany.find(sciany => sciany.x === prevGracz.x && sciany.y === prevGracz.y - 1)
              if (interaktywneNaPozycjiUp) {
                setWiadomosc(interaktywneNaPozycjiUp.wiadomosc)
              } else if (kamienNaPozycjiUp) {
                let interaktywneNaPozycjiUp2 = interaktywne.find(interaktywne => interaktywne.x === prevGracz.x && interaktywne.y === prevGracz.y - 2)
                let kamienNaPozycjiUp2 = kamienie.find(kamienie => kamienie.x === prevGracz.x && kamienie.y === prevGracz.y - 2)
                let scianaNaPozycjiUp2 = sciany.find(sciany => sciany.x === prevGracz.x && sciany.y === prevGracz.y - 2)

                if (!interaktywneNaPozycjiUp2 && !kamienNaPozycjiUp2 && !scianaNaPozycjiUp2) {
                  setKamien(prevKamienie => prevKamienie.filter(kamien => !(kamien.x === prevGracz.x && kamien.y === prevGracz.y - 1)));

                  setKamien(prevKamienie => [
                    ...prevKamienie,
                    { x: prevGracz.x, y: prevGracz.y - 2, wyglad: kamienNaPozycjiUp.wyglad }
                  ]);

                  newGracz.y = prevGracz.y - 1
                }
              } else if (!scianaNaPozycjiUp) {
                newGracz.y = prevGracz.y - 1;
              }
              break;





            case 'ArrowLeft':
              let interaktywneNaPozycjiLeft = interaktywne.find(interaktywne => interaktywne.x === prevGracz.x - 1 && interaktywne.y === prevGracz.y)
              let kamienNaPozycjiLeft = kamienie.find(kamienie => kamienie.x === prevGracz.x - 1 && kamienie.y === prevGracz.y)
              let scianaNaPozycjiLeft = sciany.find(sciany => sciany.x === prevGracz.x - 1 && sciany.y === prevGracz.y)
              if (interaktywneNaPozycjiLeft) {
                setWiadomosc(interaktywneNaPozycjiLeft.wiadomosc)
              } else if(kamienNaPozycjiLeft) {
                let interaktywneNaPozycjiLeft2 = interaktywne.find(interaktywne => interaktywne.x === prevGracz.x - 2 && interaktywne.y === prevGracz.y)
                let kamienNaPozycjiLeft2 = kamienie.find(kamienie => kamienie.x === prevGracz.x - 2 && kamienie.y === prevGracz.y)
                let scianaNaPozycjiLeft2 = sciany.find(sciany => sciany.x === prevGracz.x - 2 && sciany.y === prevGracz.y)

                if (!interaktywneNaPozycjiLeft2 && !kamienNaPozycjiLeft2 && !scianaNaPozycjiLeft2) {
                  setKamien(prevKamienie => prevKamienie.filter(kamien => !(kamien.x === prevGracz.x - 1 && kamien.y === prevGracz.y)));

                  setKamien(prevKamienie => [
                    ...prevKamienie,
                    { x: prevGracz.x - 2, y: prevGracz.y, wyglad: kamienNaPozycjiLeft.wyglad }
                  ]);

                  newGracz.x = prevGracz.x - 1
                }
              } else if (!scianaNaPozycjiLeft) {
                newGracz.x = prevGracz.x - 1;
              }
              break;





            case 'ArrowRight':
              let interaktywneNaPozycjiRight = interaktywne.find(interaktywne => interaktywne.x === prevGracz.x + 1 && interaktywne.y === prevGracz.y)
              let scianaPozycjiRight = sciany.find(sciany => sciany.x === prevGracz.x + 1 && sciany.y === prevGracz.y)
              let kamienNaPozycjiRight = kamienie.find(kamienie => kamienie.x === prevGracz.x + 1 && kamienie.y === prevGracz.y)
              if (interaktywneNaPozycjiRight) {
                setWiadomosc(interaktywneNaPozycjiRight.wiadomosc)
              } else if(kamienNaPozycjiRight) {
                let interaktywneNaPozycjiRight2 = interaktywne.find(interaktywne => interaktywne.x === prevGracz.x + 2 && interaktywne.y === prevGracz.y)
                let scianaNaPozycjiRight2 = sciany.find(sciany => sciany.x === prevGracz.x + 2 && sciany.y === prevGracz.y)
                let kamienNaPozycjiRight2 = kamienie.find(kamienie => kamienie.x === prevGracz.x + 2 && kamienie.y === prevGracz.y)
                if (!interaktywneNaPozycjiRight2 && !kamienNaPozycjiRight2 && !scianaNaPozycjiRight2) {
                  setKamien(prevKamienie => prevKamienie.filter(kamien => !(kamien.x === prevGracz.x + 1 && kamien.y === prevGracz.y)));

                  setKamien(prevKamienie => [
                    ...prevKamienie,
                    { x: prevGracz.x + 2, y: prevGracz.y, wyglad: kamienNaPozycjiRight.wyglad }
                  ]);

                  newGracz.x = prevGracz.x + 1
                }
              } else if (!scianaPozycjiRight) {
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

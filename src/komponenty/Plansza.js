import React, { useState, useEffect } from 'react';

import graczImg from '../img/Gracz.png'
import tloImg from '../img/Tło.png'
import scianaImg from '../img/Ściana.png'

import interaktywneData from '../plansza/interaktywne';
import kamienieData from '../plansza/kamienie';
import scianyData from '../plansza/sciany';
import saveData from '../plansza/save';


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


function Plansza({ setWiadomosc, setTabliczki}) {
    const [plansza, setPlansza] = useState([]);
    const [gracz, setGracz] = useState(new Gracz(5,5,graczImg,4))
  
    const [szerokoscPlanszy, ] = useState(41);
    const [wysokoscPlanszy, ] = useState(39);
  
    const [sciany, setSciany] = useState([])
    
    const [miejsceSave, setMiejsceSave] = useState(saveData)
    useEffect(() => {
        const gruboscObwodki = 4;
        
        const scianyObwodka = [];
        for (let i = 0; i < wysokoscPlanszy; i++) {
            for (let k = 0; k < gruboscObwodki; k++) {
            scianyObwodka.push(new Sciana(k, i, scianaImg));
            scianyObwodka.push(new Sciana(szerokoscPlanszy - 1 - k, i, scianaImg));
            }
        }
        for (let j = 0; j < szerokoscPlanszy; j++) {
            for (let k = 0; k < gruboscObwodki; k++) {
            scianyObwodka.push(new Sciana(j, k, scianaImg));
            scianyObwodka.push(new Sciana(j, wysokoscPlanszy - 1 - k, scianaImg));
            }
        }
        const wszystkieSciany = [...scianyObwodka, ...scianyData]
    
        setSciany(wszystkieSciany);
    }, [wysokoscPlanszy, szerokoscPlanszy]);
  
    const [interaktywne, ] = useState (interaktywneData)
    
    const [kamienie, setKamien] = useState (kamienieData)
  
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
                    if (interaktywneNaPozycjiDown.identyfikator) {
                        setTabliczki((prevTabliczki) => {
                            const updatedTabliczki = [...prevTabliczki];
                            updatedTabliczki[interaktywneNaPozycjiDown.identyfikator - 1] = true;
                            return updatedTabliczki;
                        });
                    }
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
                    if (interaktywneNaPozycjiUp.identyfikator) {
                        setTabliczki((prevTabliczki) => {
                            const updatedTabliczki = [...prevTabliczki];
                            updatedTabliczki[interaktywneNaPozycjiUp.identyfikator - 1] = true;
                            return updatedTabliczki;
                        });
                    }
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
                    if (interaktywneNaPozycjiLeft.identyfikator) {
                        setTabliczki((prevTabliczki) => {
                            const updatedTabliczki = [...prevTabliczki];
                            updatedTabliczki[interaktywneNaPozycjiLeft.identyfikator - 1] = true;
                            return updatedTabliczki;
                        });
                    }
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
                    if (interaktywneNaPozycjiRight.identyfikator) {
                        setTabliczki((prevTabliczki) => {
                            const updatedTabliczki = [...prevTabliczki];
                            updatedTabliczki[interaktywneNaPozycjiRight.identyfikator - 1] = true;
                            return updatedTabliczki;
                        });
                    }
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
                    case 'r':
                        const save = miejsceSave.find((miejsce) => miejsce.aktywne)
                        setGracz(new Gracz(save.x,save.y,graczImg,4));
                        setKamien(kamienieData);
                        setWiadomosc("")
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
  
    useEffect(() => {
        const miejsceSaveIndex = miejsceSave.findIndex(
            (miejsce) => miejsce.x === gracz.x && miejsce.y === gracz.y
        );
      
        if (miejsceSaveIndex !== -1) {
            const noweMiejsceSave = miejsceSave.map((miejsce, index) => {
                if (index === miejsceSaveIndex) {
                return { ...miejsce, aktywne: true };
                } else {
                return { ...miejsce, aktywne: false };
                }
            });
        
            setMiejsceSave(noweMiejsceSave);
        }
    }, [gracz]);
  
    return (
        <table>
            <tbody>
                {plansza.map((row, rowIndex) => {
                    const startingRow = Math.max(0, gracz.y - gracz.zakresWidzenia);
                    const endingRow = Math.min(wysokoscPlanszy - 1, gracz.y + gracz.zakresWidzenia);
                    if (rowIndex < startingRow || rowIndex > endingRow) {
                    return null;
                    }
            
                    return (
                        <tr key={rowIndex} className='plansza'>
                            {row.map((cell, cellIndex) => {
                                const startingCol = Math.max(0, gracz.x - gracz.zakresWidzenia);
                                const endingCol = Math.min(szerokoscPlanszy - 1, gracz.x + gracz.zakresWidzenia);
                
                                if (cellIndex < startingCol || cellIndex > endingCol) {
                                    return null;
                                }
                
                                return <td key={cellIndex} className='plansza'><img src={cell} alt='' /></td>;
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default Plansza
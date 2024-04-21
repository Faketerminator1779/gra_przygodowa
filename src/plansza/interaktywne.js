import tabliczkaImg from '../img/Tabliczka.png'
import ciastoImg from '../img/Ciasto.png'

class Interaktywne {
    constructor(x,y,wyglad,wiadomosc) {
      this.x = x;
      this.y = y;
      this.wyglad = wyglad;
      this.wiadomosc = wiadomosc;
    }
}



const interaktywneData = [
    new Interaktywne(4,12,tabliczkaImg,"na mapie jest ukryte 8 bonusowych tabliczek czy je wszystkie znajdziesz ?"),
    new Interaktywne(6,20,tabliczkaImg,"Brawo znalazłeś bonusową tabliczkę nr. 1"),
    new Interaktywne(8,4,tabliczkaImg,"Twoim celem jest dostanie się na koniec mapy. Możesz przesuwać kamienie wchodząć w nie o ile nic im nie blokuje drogi."),
    new Interaktywne(9,29,tabliczkaImg,"Brawo znalazłeś bonusową tabliczkę nr. 3"),
    new Interaktywne(9,34,tabliczkaImg,"Brawo znalazłeś bonusową tabliczkę nr. 2"),
    new Interaktywne(14,9,tabliczkaImg,"Jak się zablokujesz to musisz zacząć od początku czyli zresetować stonę."),
    new Interaktywne(17,28,tabliczkaImg,"Brawo znalazłeś bonusową tabliczkę nr. 6"),
    new Interaktywne(23,33,tabliczkaImg,"Brawo znalazłeś bonusową tabliczkę nr. 4"),
    new Interaktywne(35,8,tabliczkaImg,"Brawo znalazłeś bonusową tabliczkę nr. 7"),
    new Interaktywne(35,13,tabliczkaImg,"Brawo znalazłeś bonusową tabliczkę nr. 8"),
    new Interaktywne(36,32,tabliczkaImg,"Brawo znalazłeś bonusową tabliczkę nr. 5"),
    
    new Interaktywne(36,4,ciastoImg,"Gratuluję ukończenia planszy. Czy znalazłeś wszystkie 8 ukrytych tabliczek ? "),
  ]

export default interaktywneData
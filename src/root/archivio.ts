import { Libro } from './libro';
export class Archivio {
  libri: Array<Libro>;
  constructor(libri: Array<Libro>) {
    this.libri = libri;
  }
  cerca(stringa: string) {
    var i :number = 0;
    const trovato: Array<any> = [];
    let new_stringa = stringa.toLowerCase();
    
    if(this.libri != null){
      this.libri.map((value) => {
        let new_value1 = value.autore?.toLowerCase();
        let new_value2 = value.titolo?.toLowerCase();
        if ((new_value1.includes(new_stringa) || new_value2.includes(new_stringa)) && new_stringa !== '') {
          i++;
          trovato.push(value.posizione, value.autore, value.titolo, value.utente_prestito);
        }
      })
    }
    if(i==1){return trovato;
    }else if(i>1){return i + ' corrispondenze';
    }else{return 'Nessun risultato';
    }
  }
}

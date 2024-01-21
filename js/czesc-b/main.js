//zad 11
let auto = {
    rok: 2020,
    przebieg: 10000,
    cena_wyjsciowa: 50000,
    cena_koncowa: 45000,

    powiekszCeneWyjsciowa: function() {
        this.cena_wyjsciowa += 1000;
    },

    obnizCeneKoncowaZaRok: function() {
        let aktualnyRok = new Date().getFullYear();
        let wiek = aktualnyRok - this.rok;
        this.cena_koncowa = this.cena_wyjsciowa - (wiek * 1000);
    },

    obnizCeneKoncowaZaPrzebieg: function() {
        let obnizka = Math.floor(this.przebieg / 100000) * 10000;
        this.cena_koncowa -= obnizka;
    },

    dopiszPrzebiegIRok: function(przebieg, rok) {
        this.przebieg = przebieg;
        this.rok = rok;
        this.obnizCeneKoncowaZaRok();
        this.obnizCeneKoncowaZaPrzebieg();
    }
};

let samochody = [];

function dodajAuto(auto) {
    if (auto.cena_koncowa > 10000) {
        samochody.push(auto);
    }
}

function zwiekszRokDlaWszystkichAut() {
    for (let i = 0; i < samochody.length; i++) {
        samochody[i].rok += 1;
        samochody[i].obnizCeneKoncowaZaRok();
    }
}


//zad12

class Ocena {
    constructor(przedmiot, wartosc) {
        this.przedmiot = przedmiot;
        this.wartosc = wartosc;
    }
}

class Student {
    constructor(imie, nazwisko) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.oceny = [];
        this.sredniaOcen = 0;
    }

    hello() {
        return `Witaj ${this.imie} ${this.nazwisko}, Twoja średnia ocen to: ${this.sredniaOcen}.`;
    }
    set ocena(x) {
        if(x instanceof Ocena) {
            this.oceny.push(x.wartosc);
            this.sredniaOcen = this.oceny.reduce((a, b) => a + b, 0) / this.oceny.length;
        }
    }
    get oceny() {
        return this.oceny.map(ocena => `Przedmiot: ${ocena.przedmiot} - ocena ${ocena.wartosc}`).join('. ');
    }
}


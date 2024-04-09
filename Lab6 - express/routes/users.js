const express = require('express');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();

let uzytkownicy = [
    {
        id: uuidv4(),
        imie: "Jan",
        nazwisko: "Kowalski",
        email: "JanKowalski@przyklad.pl",
        wiek: 23
    },
    {
        id: uuidv4(),
        imie: "Mateusz",
        nazwisko: "Kwiatkowski",
        email: "MateuszKwiatkowski@przyklad.pl",
        wiek: 23
    },
]

router.post('/', (req, res) => {
    const uzytkownik = { ...req.body, id: uuidv4() };
    uzytkownicy.push(uzytkownik);
    res.send(uzytkownicy);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const uzytkownikPoId = uzytkownicy.find((user) => user.id === id);
    res.send(uzytkownikPoId);
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const index = uzytkownicy.findIndex((user) => user.id === id);
    if (index !== -1) {
        uzytkownicy[index] = { ...uzytkownicy[index], ...req.body };
        res.send(uzytkownicy[index]);
    } else {
        res.status(404).send({ message: 'Nie znaleziono użytkownika' });
    }
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    uzytkownicy = uzytkownicy.filter((user) => user.id !== id);
    res.send(uzytkownicy);
});

module.exports = router;

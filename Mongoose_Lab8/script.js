const express = require('express');
const Picture = require('./picture');

const app = express();
const port = 3000;

async function addPicture(pictureData) {
    try {
        const picture = new Picture(pictureData);
        const result = await picture.save();
        console.log("Dodano nowy obraz:", result);
    } catch (err) {
        // Obsługa błędu dodania obrazu
        if (err.code === 11000 && err.keyPattern && err.keyPattern.nazwa) {
            console.log(`Obraz o nazwie '${pictureData.nazwa}' już istnieje w bazie danych.`);
        } else {
            console.log(err.message);
        }
    }
}

async function findPictures() {
    try {
        const pictures = await Picture.find({});
        console.log("Znalezione obrazy:", pictures);
    } catch (err) {
        console.log(err.message);
    }
}

async function getPictures() {
    try {
        const pictures = await Picture.find({});
        console.log("Znalezione obrazy (przez metodę find().then()):", pictures);
    } catch (err) {
        console.log(err.message);
    }
}

async function main() {
    const picture1 = { nazwa: 'foto_01', sciezka: './images', rozmiar: 2345 };
    const picture2 = { nazwa: 'foto_02', sciezka: './images', rozmiar: 3456 };
    const picture3 = { nazwa: 'foto_03', sciezka: './images', rozmiar: 4567 };
    const picture4 = { nazwa: 'foto_04', sciezka: './images', rozmiar: 5678 };

    // Dodaj przykładowe dane
    await addPicture(picture1);
    await addPicture(picture2);
    await addPicture(picture3);
    await addPicture(picture4);

    // Znajdź obrazy
    await findPictures();

    // Znajdź obrazy za pomocą getPictures
    await getPictures();
}

main().catch(console.error);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

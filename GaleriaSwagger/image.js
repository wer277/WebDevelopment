'use strict';

module.exports = {
    listImages,
    createImage,
    readImage,
    updateImage,
    deleteImage
};

var testData = {
    id: "0123456789abcd",
    title: "Testowy obrazek",
    description: "Opis do obrazka",
    date: "2017-11-09T10:20:00.214Z",
    path: "/library/images/",
    size: 1024
};

function listImages(req, res, next) {
    res.json();
}

function createImage(req, res, next) {
    res.json();
}

function readImage(req, res, next) {
    res.json(testData);
}

function updateImage(req, res, next) {
    res.json();
}

function deleteImage(req, res, next) {
    res.json();
}

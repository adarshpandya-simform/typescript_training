"use strict";
// to run this file, type in this comman in 
// command prompt => `ts-node {filename}.ts`
Object.defineProperty(exports, "__esModule", { value: true });
class Album {
    constructor() {
        this.label = new Album.AlbumLabel();
    }
}
(function (Album) {
    class AlbumLabel {
    }
    Album.AlbumLabel = AlbumLabel;
})(Album || (Album = {}));
// passes
let a1;
// passes
let a2 = new Album();
// interface property in class
a2.artist;
// passes
let a3 = Album;
exports.default = Album;

// to run this file, type in this comman in 
// command prompt => `ts-node {filename}.ts`

class Album{
    label:Album.AlbumLabel = new Album.AlbumLabel()
}

namespace Album{
    export class AlbumLabel{}
}

interface Album{
    artist:string
}

// passes
let a1: Album;

// passes
let a2 = new Album()

// interface property in class
a2.artist

// passes
let a3 = Album;

export default Album;
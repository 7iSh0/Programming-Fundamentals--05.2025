function gramophone(band, album, song) {

    let songDuration = (album.length * band.length) * song.length / 2;

    let plateRotation = songDuration / 2.5;
    let rotations = Math.ceil(plateRotation);

    console.log(`The plate was rotated ${rotations} times.`);
}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs');
gramophone('Rammstein', 'Sehnsucht', 'Engel');
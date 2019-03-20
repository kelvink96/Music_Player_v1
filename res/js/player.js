$(function () {
    // first create an array of songs that you want to play
    var songs = ["1.mp3", "2.mp3", "3.mp3", "4.mp3"];

    // now create array of posters you want to use
    var posters = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

    var songTitle = document.getElementById('songTitle');
    var fillBar = document.getElementById('fill');
    var inf = songs.length;

    // now create an object of audio class
    var song = new Audio();
    var currentSong = 0; /*points to the current song*/

    // call the function playSong when window is loaded
    window.onload = playSong;

    // next song
    $('#next').on('click', () => {
        nextSong();
    });

    // previous song
    $('#pre').on('click', () => {
        previousSong();
    });

    // now I want audio play the song when window or body is loaded
    function playSong() {
        // set the source of the 0th song
        song.src = songs[currentSong];
        songTitle.textContent = songs[currentSong];
        song.play();
        $('#play').on('click', () => {
            // set the title of the song
            song.play();
            console.log('playing');
            $('#play').addClass('no-display');
            $('#pause').removeClass('no-display');
        });

        $('#pause').on('click', () => {
            song.pause();
            console.log('paused');
            $('#play').removeClass('no-display');
            $('#pause').addClass('no-display');
        });
    }


    // now we access our seekbar
    song.addEventListener('timeupdate', function () {
        // get position
        var position = song.currentTime / song.duration;
        // console.log(position);
        fillBar.style.width = position * 100 + '%';
    });

    // now work on next button
    function nextSong() {
        ++currentSong;
        if (currentSong > inf) {
            currentSong = 0;
        }
        $('#play').addClass('no-display');
        $('#pause').removeClass('no-display');
        // now set poster bg to switch with song
        $('#image img').attr("src", posters[currentSong]);
        $('#bg img').attr("src", posters[currentSong]);
        console.log(currentSong);
        playSong();
    }

    // now work on previous button
    function previousSong() {
        --currentSong;
        if (currentSong < 0) {
            currentSong = inf;
        }
        $('#play').addClass('no-display');
        $('#pause').removeClass('no-display');
        // now set poster bg to switch with song
        $('#image img').attr("src", posters[currentSong]);
        $('#bg img').attr("src", posters[currentSong]);
        console.log(currentSong);
        playSong();
    }
});
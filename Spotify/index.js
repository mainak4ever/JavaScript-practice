var data;
var currIndex = 0;
var isShuffle = false;
var audioPlayer = document.getElementById('audioPlayer')
var isPlay = false;
$.get("https://5dd1894f15bbc2001448d28e.mockapi.io/playlist", function (response) {
    data = response;
    console.log(data);
    // changeSong(0)
    displayPlaylist()
})

function changeSong(i) {
    $('#current-image').attr('src', data[i].albumCover)
    $('#audioPlayer').attr('src', data[i].file)
    $('#current-track').html(`${data[i].track}`)
    $('#current-artist').html(`${data[i].artist}`)
    currIndex = i;
    isPlay = false;
    checkPlay()
}

function displayPlaylist() {
    for (let i = 0; i < data.length; ++i) {
        $('#playlist').append(`
        <div class="list-item" onclick = changeSong(${i})>
        <img src= ${data[i].albumCover}>
        <div class="item-details">
            <h3 id='current-track'>${data[i].track}</h3>
            <p id='current-artist'>${data[i].artist}</p>
        </div>
    </div>
    `)
    }
}

$('#play-pause').click(function () {
    checkPlay()
    // if (isPlay == false) {
    //     audioPlayer.play()
    //     $('#play-pause').attr('class', "fa-regular fa-circle-pause play-button")
    //     isPlay = true;
    // } else {
    //     audioPlayer.pause();
    //     $('#play-pause').attr('class', "fa-regular fa-circle-play play-button");
    //     isPlay = false;
    // }

})

function checkPlay() {
    if (isPlay == false) {
        audioPlayer.play()
        $('#play-pause').attr('class', "fa-regular fa-circle-pause play-button")
        isPlay = true;
    } else {
        audioPlayer.pause();
        $('#play-pause').attr('class', "fa-regular fa-circle-play play-button");
        isPlay = false;
    }
}

$('#prev-song').click(function () {
    if (isShuffle) {
        var i = Math.floor(Math.random() * (data.length))
        changeSong(i)
    } else {
        if (currIndex == 0) {
            changeSong((data).length - 1)
        } else {
            changeSong(--currIndex)
        }
    }

})

$('#next-song').click(function () {
    if (isShuffle) {
        var i = Math.floor(Math.random() * (data.length))
        changeSong(i)
    } else {
        if (currIndex == data.length - 1) {
            changeSong(0);
        } else {
            changeSong(++currIndex);
        }
    }
})

$('#replay').click(function () {
    audioPlayer.currentTime = 0;
})

$('#backward10').click(function () {
    audioPlayer.currentTime = audioPlayer.currentTime - 10;
})

$('#forward10').click(function () {
    audioPlayer.currentTime = audioPlayer.currentTime + 10;
})

$('#shuffle').click(function () {
    if (isShuffle == false) {
        isShuffle = true
        $('#shuffle').css('opacity', 1);
    } else {
        isShuffle = false;
        $('#shuffle').css('opacity', .6);
    }


})

audioPlayer.addEventListener('timeupdate', function () {
    if (audioPlayer.current == audioPlayer.duration) {
        if (isShuffle) {
            var i = Math.floor(Math.random() * (data.length))
            changeSong(i)
        } else {
            if (currIndex == data.length - 1) {
                changeSong(0);
            } else {
                changeSong(++currIndex);
            }
        }

    } else {
        $('#progressBar').css('width', `${(audioPlayer.currentTime / audioPlayer.duration) * 100}%`)
    }
})
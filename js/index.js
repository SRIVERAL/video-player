const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')

$play.addEventListener('click', handlePlay)
$pause.addEventListener('click', handlePause)
$backward.addEventListener('click', handleBackward)
$forward.addEventListener('click', handleForward)

function handlePlay(){
    $video.play()
    $play.hidden = true
    $pause.hidden = false
    console.log('Diste click al boton play')
}

function handlePause(){
    $video.pause()
    $play.hidden = false
    $pause.hidden = true
    console.log('Diste click al boton pause')
}

function handleBackward(){
    $video.currentTime -= 10
    console.log('Retroceder 10 segundos')
}

function handleForward() {
    $video.currentTime += 10 
    console.log('Avanzar 10 segundos')
}

const $progress = document.querySelector('#progress');
$video.addEventListener('loadmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimeUpdate)


function handleLoaded() {
    $progress.max = $video.duration
}

function handleTimeUpdate() {
    $progress.value = $video.currentTime
}

$progress.addEventListener('input', handleInput)

function handleInput() {
    $video.currentTime = $progress.value
}

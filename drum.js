const drum1 = document.getElementById('a').addEventListener('click',function(){
    let suprano = new Audio("mmm-93420.mp3")
    setTimeout(() => {
        suprano.pause()
    },1500);
    suprano.play()
})
const drum2 = document.getElementById('b').addEventListener('click',function(){
    let tenor = new Audio("tenor-sax-phrase-with-ghosted-note-98256.mp3")
    setTimeout(() => {
        tenor.pause ()
    },1500);
    tenor.play()
})
const drum3 = document.getElementById('c').addEventListener('click',function(){
    let bass = new Audio("bass-dropmp3-14596.mp3")
    setTimeout(() => {
        bass.pause()
    },1500);
    bass.play()
})
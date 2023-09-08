const videos = document.querySelectorAll( '.video' )
const cards = document.querySelectorAll( '.video-card' )
const videoModals = document.querySelectorAll( '.video-modal' )
const body = document.querySelector( 'body' );

cards.forEach( ( card, index ) => {
    card.addEventListener( 'click', () => {
        videoModals[index].style.display = 'flex'
        videos[index].load()
        videos[index].play()
        document.body.style.overflow = 'hidden';
    } )
}, false )

body.addEventListener( "click", () => {
    videoModals.forEach( ( modal, index ) => {
        videos[index].pause()
        videos[index].currentTime=0
        modal.style.display = 'none'
        document.body.style.overflow = 'auto';
    } )
}, false );

cards.forEach( ( video, index ) => {
    video.addEventListener( "click", ( e ) => {
        e.stopPropagation()
    }, false )
} )

videos.forEach( ( video, index ) => {
    video.addEventListener( "click", ( e ) => {
        e.stopPropagation()
    }, false )
} )


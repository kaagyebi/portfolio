// detect scroll event on document
document.addEventListener('scroll', function() {
    // console.log(window.scrollY);
    if(window.scrollY > 70) {
        // change navbar bg to blue
        document.getElementById('navbar').style.backgroundColor = '#0779E4'
    } else{
        // change navbar bg transparent
        document.getElementById('navbar').style.backgroundColor = 'transparent'
    }
    
});
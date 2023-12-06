
const drumButtons = document.querySelectorAll('.drum')
console.log(drumButtons)

// let audio = new Audio('./sounds/tom-1.mp3')

drumButtons.forEach ((drum) => {
    drum.addEventListener('click', function() {
        let drumInnerHTML = this.innerHTML
        makeSound(drumInnerHTML)
        buttonAnimation(drumInnerHTML)
    })
})

document.addEventListener('keydown', function(e) {
    
    let keyPress = e.key
    makeSound(keyPress)
    buttonAnimation(keyPress)
})


function makeSound(key) {
    switch (key) {
        case 'w':
            let tom1 = new Audio('./sounds/tom-1.mp3')
            tom1.play()
            break;
        case 'a':
            let tom2 = new Audio('./sounds/tom-2.mp3')
            tom2.play()
            break;
        case 's':
            let tom3 = new Audio('./sounds/tom-3.mp3')
            tom3.play()
            break;
        case 'd':
            let tom4 = new Audio('./sounds/tom-4.mp3')
            tom4.play()
            break;
        case 'j':
            let snare = new Audio('./sounds/snare.mp3')
            snare.play()
            break;
        case 'k':
            let kick = new Audio('./sounds/kick-bass.mp3')
            kick.play()
            break;
        case 'l':
            let crash = new Audio('./sounds/crash.mp3')
            crash.play()
            break;
    }
}
function buttonAnimation (currentKey) {
    let activeButton = document.querySelector('.' + currentKey)
    activeButton.classList.add("pressed")

    setTimeout(function() {
        activeButton.classList.remove('pressed')
    }, 100)

}
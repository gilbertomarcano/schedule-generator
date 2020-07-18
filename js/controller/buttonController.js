function firstButton() {
    if (!isAnimating) {
        changeWidth()
    }
}

function secondButton() {
    if (!isAnimating) {
        app.buttonGenerateSchedules()
        console.log(app.scheduleController.generatedSchedules.length)
        if (app.scheduleController.generatedSchedules.length != 0) {
            console.log('LMAO SI HAY')
            let buttons = document.querySelector('#buttons')

            let leftButton = buttons.children[0]
            let rightButton = buttons.children[1]
    
            let prevScheduleButton = buttons.children[2]
            let nextScheduleButton = buttons.children[3]
    
            console.log(leftButton, rightButton)
            leftButton.style.display = 'none'
            rightButton.style.display = 'none'
    
            prevScheduleButton.style.display = 'inline'
            nextScheduleButton.style.display = 'inline'
    
            
        }
    }
}



function changeWidth() {
    let buttons = document.querySelector('#buttons')
    let leftButton = buttons.children[0]
    let rightButton = buttons.children[1]


    // If the left button is not a back button
    if (!leftButton.classList.contains('back-button')) {  
        // Make it a back button and change it color and text
        leftButton.classList.add('back-button')
        leftButton.classList.add('color-2')
        leftButton.textContent = 'ATRÁS'

        rightButton.textContent = 'SIGUIENTE'
        setTimeout(() => { rightButton.style.display = 'inline'; }, 110);
        setTimeout(() => { rightButton.classList.remove('zero-button'); }, 160);
    } else {
        leftButton.classList.remove('back-button')
        leftButton.classList.remove('color-2')
        leftButton.textContent = 'SIGUIENTE'
        
        rightButton.classList.add('zero-button')
        
        setTimeout(() => { rightButton.textContent = '\t|\t' }, 290);
        setTimeout(() => { rightButton.style.display = 'none'; }, 380);

        // rightButton.classList.add('back-button')
        // setTimeout(() => {  rightButton.style.display = 'none'; }, 290);

    }
}
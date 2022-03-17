'use strict';

function resetForm() {
    console.log('resetForm()');
}

function startTimer() {
    console.log('startTimer()');
}

function stoppTimer() {
    console.log('stoppTimer()');
}

function setFocusOnForm() {
    console.log('setFocusOnForm()');

    document.querySelector('#timerDemo').setAttribute('style', 'color: cyan');
    document.querySelector('#txtNamn').focus();
}

function checkForm() {
    console.log('checkForm()');

    try {

        let textRefs = document.querySelectorAll('input[type=text], textarea');
        let currentTextRef = null;

        for(let counter = 0; counter < textRefs.length; counter++) {

            currentTextRef = textRefs.item(counter);

            if(currentTextRef.value.length === 0) {

                throw { elementRef : currentTextRef };

            }

        }

        return true;

    } catch(oError) {

        document.querySelector('#errorMsg').textContent = 'Ange ' + oError.elementRef.getAttribute('title') + '!';

        oError.elementRef.focus();

        return false;

    }
}

function countNumberOfChars(textAreaRef) {
    console.log('countNumberOfChars()');
    document.querySelector('#nbrOfChars').textContent = textAreaRef.value.length;
}
'use strict';

function init() {
    console.log("init()");

    let divRef = document.querySelector('#timerDemo');
    console.log( divRef );
    divRef.setAttribute('style', 'color : cyan;');

    document.querySelector('#txtNamn').focus();
}

function checkForm() {
    console.log("checkForm()");

    try {

        let textRefs = document.querySelectorAll('input[type=text], textarea');
        console.log(textRefs);

        let currentTextRef = null;

        for(let i = 0; i < textRefs.length; i++) {
            currentTextRef = textRefs.item(i);

            console.log( currentTextRef );

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

    //Observera returnerar sant elr falskt
    //return false;
}

function resetForm() {
    console.log("resetForm()");
}

function countNumberOfChars(inTextArea) {
    console.log("countNumberOfChars()");
    document.querySelector('#nbrOfChars').textContent = inTextArea.value.length;
}

function startTimer() {
    console.log("startTimer()");
}

function stopTimer() {
    console.log("stopTimer()");
}
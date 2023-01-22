function openPlayerConfig(event) {
    editedPlayer = +event.target.dataset.playerid; // + '1' as a string will yield 1 as a number
    playerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
}

function closePlayerConfig() {
    playerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    errorOutputElement.textContent = '';
}

function savePlayerConfig(event) {
    event.preventDefault();
    console.log(event);
    const formData = new FormData(event.target); //FormData is a pointer at a form, it extracts values entered into the form.
    const enteredPlayername = formData.get('playername').trim(); //it remove white space before or after content
    
    if (!enteredPlayername) {     // ie. enteredPlayername === ''
        event.target.firstElementChild.classList.add('error');
        errorOutputElement.textContent = 'Please enter a valid name!';
        return;
    }

    const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data');
    updatedPlayerDataElement.children[1].textContent = enteredPlayername;
}
const element = document.querySelector('.highlight');
const removeButton = document.getElementById('remove-btn');
// const newElement = document.createElement('li');
// newElement.textContent = 'Item four';

// element.appendChild(newElement);


removeButton.addEventListener('click', function() {
    if(element.firstElementChild) {
        element.firstElementChild.remove();
    }
})


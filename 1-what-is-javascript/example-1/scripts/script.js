/* example 1 */

const myButton = document.querySelector('#example_1_button')

myButton.addEventListener('click', updateName)

function updateName() {
    const name = prompt('Enter a new name');
     myButton.textContent = `Player 1: ${name}`;
}

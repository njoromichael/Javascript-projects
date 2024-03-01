/* example 2 */
const myButton = document.querySelector("#example_2_button")
myButton.addEventListener('click', () => {
    const paragraph = document.createElement('p');
    paragraph.textContent = 'You clicked the button'
    const myDiv = document.querySelector('.example_2')
    myDiv.append(paragraph)
})
function createParagraph() {
    // const paragraph = document.createElement('p');
    const paragraph = document.querySelector('.update');
    paragraph.textContent = "You clicked the button";
//     document.body.appendChild(paragraph);
// 
}


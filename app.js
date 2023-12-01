function getRandomColor() {
    const letters = '0123456789ABCD';
    let color = '#';
    for (let i = 0; i < 4; i++) {
        color += letters[Math.floor(Math.random() * 14)];
    }
    return color;
}
function changeColor() {
    const colorSquare = document.getElementById('colorSquare');
    const randomColor = getRandomColor();

    colorSquare.style.backgroundColor = randomColor;

    colorSquare.innerText = randomColor;
}
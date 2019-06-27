import chaser from '../../src'

const variable = chaser(0);

const cValue = document.querySelector('.chaser-value span');
const tValue = document.querySelector('.target-value span');
const cBox = document.querySelector('.chaser-box');
const tBox = document.querySelector('.target-box');
const input = document.querySelector('input');


const loop = () => {
    requestAnimationFrame(loop);
    const value = parseFloat(input.value);
    variable.target = value;
    cValue.innerHTML = variable.value;
    tValue.innerHTML = variable.target;
    tBox.style.left = `${variable.target}px`
    cBox.style.left = `${variable.value}px`
}
loop();
import chaser from '../../src'

const a = chaser(10);

const cValue = document.querySelector('.chaser-value span');
const tValue = document.querySelector('.target-value span');

setInterval(() => {
    a.target += 10;
}, 2000)

const loop = () => {
    requestAnimationFrame(loop);
    cValue.innerHTML = a.value;
    tValue.innerHTML = a.target;
}
loop();
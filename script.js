const background = document.querySelector('body');
const password = document.getElementById('password');

password.addEventListener('input', (e) => {
    const length = e.target.value.length;
    const blurValue = Math.max(20 - (2 * length), 0);
    background.style.backdropFilter = `blur(${blurValue}px)`;
});
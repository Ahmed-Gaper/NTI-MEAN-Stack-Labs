const headerDiv = document.getElementById('header');
const originalImg = headerDiv.querySelector('img');

const imgCopy = originalImg.cloneNode(true);

originalImg.remove();

originalImg.classList.add('top-right-image');
imgCopy.classList.add('bottom-left-image');

document.body.appendChild(originalImg);
document.body.appendChild(imgCopy);

const navList = document.getElementById('nav');
navList.classList.add('centered-nav');

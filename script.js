const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

const readMoreBtn = document.getElementById('readMoreBtn');
const readMoreText = document.getElementById('readMoreText');

if (readMoreBtn && readMoreText) {
  readMoreBtn.addEventListener('click', () => {
    readMoreText.classList.toggle('show');
    readMoreBtn.textContent = readMoreText.classList.contains('show') ? 'Show Less' : 'Read More';
  });
}

const tipsBtn = document.getElementById('tipsBtn');
const tipsList = document.getElementById('tipsList');

if (tipsBtn && tipsList) {
  tipsBtn.addEventListener('click', () => {
    tipsList.classList.toggle('show');
    tipsBtn.textContent = tipsList.classList.contains('show') ? 'Hide Study Tips' : 'Show Study Tips';
  });
}

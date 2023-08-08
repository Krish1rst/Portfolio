const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransitions() {
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener('click', function() {
      let currentBtn = document.querySelectorAll('.active-btn');
      currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
      this.className += ' active-btn';
    })
  }
  //sections active
  allSections.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if (id) {
      sectBtns.forEach((btn) => {
        btn.classList.remove('active')
      })
      e.target.classList.add('active')

      //hide other sections
      sections.forEach((section) => {
        section.classList.remove('active')
      })
      const element = document.getElementById(id);
      element.classList.add('active');
    }
  })
  // togle theme
  const themeBtn = document.querySelector('.theme-btn');
const element = document.body;

// Check if a theme is already stored in local storage
const storedTheme = localStorage.getItem('selectedTheme');

if (storedTheme === 'light-mode') {
  element.classList.add('light-mode');
} else {
  element.classList.remove('light-mode'); // Make sure dark mode is applied by default
}

themeBtn.addEventListener('click', () => {
  element.classList.toggle('light-mode');

  // Update the selected theme in local storage
  if (element.classList.contains('light-mode')) {
    localStorage.setItem('selectedTheme', 'light-mode');
  } else {
    localStorage.removeItem('selectedTheme');
  }
});

}
PageTransitions();
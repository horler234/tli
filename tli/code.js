let navbar = document.querySelector('#navbar');
let ham = document.querySelector('.hamburger');
let mod = document.querySelector('#modal');

function dropDown() {
  if (navbar.className === 'navbar-list') {
    navbar.classList.add('responsive');
  } else if (navbar.className === 'navbar-list responsive') {
    navbar.classList.add('ness');
  } else if (navbar.className === 'navbar-list responsive ness') {
    navbar.classList.remove('ness');
  } else {
    navbar.className = 'navbar-list';
  }

  if (ham.className === 'hamburger') {
    ham.classList.add('left');
  } else if (ham.className === 'hamburger left') {
    ham.classList.add('right');
  } else if (ham.className === 'hamburger left right') {
    ham.classList.remove('right');
  } else {
    ham.className = 'hamburger';
  }
}

function popUp() {
  if (mod.className === 'embedded-video-pop disappear') {
    mod.classList.add('show');
    mod.classList.remove('disappear');
  } else {
    mod.classList.remove('show');
    mod.classList.add('disappear');
  }
}


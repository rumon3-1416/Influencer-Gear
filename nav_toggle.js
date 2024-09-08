const menuBtn = document.querySelector('#menu-btn');
const navItems = document.querySelector('#nav-items');
const a = 'hidden'; // On Small Screen
const b = 'flex'; // On Large Screen
let controlNav = false;

// Handling Nav Items Visibility
const handleNavItems = action => {
  if (action === 'barsClicked') {
    navItems.classList.toggle(a);
    // navItems.classList.toggle(b);
  } else if (action === 'lgScreen') {
    navItems.classList.remove(a);
    // navItems.classList.add(b);
    controlNav = true;
  } else if (action === 'smScreen') {
    navItems.classList.remove(b);
    navItems.classList.add(a);
    controlNav = false;
  }
};

// Menu btn Click Listener
menuBtn.addEventListener('click', () => {
  handleNavItems('barsClicked');
});

// Window Size
window.addEventListener('resize', () => {
  const windowWidth = window.innerWidth;

  if (windowWidth >= 768) {
    handleNavItems('lgScreen');
  } else if (windowWidth < 768 && controlNav) {
    handleNavItems('smScreen');
  }
});

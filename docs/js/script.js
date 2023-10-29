const menuIconElement = document.getElementById('menu-icon');
const dropDownActivateElement = document.getElementById('dropdownActivate');
const closeMenuElement = document.getElementById('closeMenu');
const imageTitleElement = document.getElementById('image_title');

const rootStyles = document.documentElement.style;

const activateDropDown = () => {
  dropDownActivateElement.classList.add('slideInDown');
  rootStyles.setProperty('--dropDown-display', 'block');
  rootStyles.setProperty('--closeMenuX-display', 'block');
  rootStyles.setProperty('--closeMenuBurger-display', 'none');
  imageTitleElement.classList.remove('fadeIn');
  imageTitleElement.classList.add('fadeOut');
};

const desactivateDropdown = () => {
  dropDownActivateElement.classList.remove('slideInDown');
  dropDownActivateElement.classList.add('slideOutUp');
  rootStyles.setProperty('--closeMenuX-display', 'none');
  rootStyles.setProperty('--closeMenuBurger-display', 'block');
  imageTitleElement.classList.remove('fadeOut');
  imageTitleElement.classList.add('fadeIn');
}


menuIconElement.addEventListener('click', activateDropDown);
closeMenuElement.addEventListener('click', desactivateDropdown);

const DrawerInitiator = {
  init({
    drawer, openDrawerButton, closeDrawerButton, navLinks,
  }) {
    openDrawerButton.addEventListener('click', (event) => {
      this._openDrawer(event, drawer);
    });

    closeDrawerButton.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });

    navLinks.forEach((nav) => {
      nav.addEventListener('click', (event) => {
        this._closeDrawer(event, drawer);
      });
    });
  },

  _openDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.add('open');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },
};

export default DrawerInitiator;

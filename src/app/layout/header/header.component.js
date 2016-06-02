class AppHeaderCtrl {
  constructor() {
    'ngInject';

    this.toggleMenu = false;
    this.gitHubLink = 'https://github.com/Chyngyz/angular-webpack-starter'
  }

  toggleMobileMenu() {
    this.toggleMenu = !this.toggleMenu;
  }
}

require('./header.scss')

let AppHeader = {
  controller: AppHeaderCtrl,
  template: require('./header.html')
};

export default AppHeader;

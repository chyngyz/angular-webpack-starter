import angular from 'angular';

let layoutModule = angular.module('app.layout', []);


// Components
import AppHeader from './header/header.component';
layoutModule.component('appHeader', AppHeader);

import AppFooter from './footer/footer.component';
layoutModule.component('appFooter', AppFooter);


export default layoutModule;

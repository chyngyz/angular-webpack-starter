import angular from 'angular'

import appConfig from './config/app.config'
import appRun from './config/app.run'
import appConstants from './config/app.constants'

import 'angular-ui-router'

import './layout'
import './home'
import './about'
import './notfound'

// Import Base styles
import '../assets/styles/main.scss'


const requires = [
  'ui.router',
  'app.layout',
  'app.home',
  'app.about',
  'app.404'
]

let appModule = angular.module('app', requires)



appModule.config(appConfig)
appModule.run(appRun)
appModule.constant('CONSTANTS', appConstants)


// angular.bootstrap(document, ['app'], {
//   //strictDi: true
// });

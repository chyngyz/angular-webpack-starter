import angular from 'angular'

let aboutModule = angular.module('app.about', []);

import AboutConfig from './about.config'
aboutModule.config(AboutConfig)

require('./about.scss')

import aboutCtrl from './about.controller'
aboutModule.controller('AboutCtrl', aboutCtrl);

export default aboutModule

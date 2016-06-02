import angular from 'angular'

let homeModule = angular.module('app.home', [])

import HomeConfig from './home.config'
homeModule.config(HomeConfig)

require('./home.scss')

import homeCtrl from './home.controller'
homeModule.controller('HomeCtrl', homeCtrl)

export default homeModule

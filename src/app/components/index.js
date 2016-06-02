import angular from 'angular'

const MODULE_NAME = 'app.components'

import registerMainNav from './navbar/navbar'



var ngModule = angular.module(MODULE_NAME, [])

registerMainNav(ngModule)

export default MODULE_NAME

import angular from 'angular'

let notFoundModule = angular.module('app.404', [])

notFoundModule.component('notFoundPage', {
  template: require('./not-found.html')
})

export default notFoundModule

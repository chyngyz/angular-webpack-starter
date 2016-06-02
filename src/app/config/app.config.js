export default ($locationProvider, $stateProvider, $urlRouterProvider, $httpProvider, $compileProvider) => {
  'ngInject';

  $locationProvider.hashPrefix('!')
  $httpProvider.useApplyAsync(true)

  if(PRODUCTION) {
    $locationProvider.html5Mode(true)
    $compileProvider.debugInfoEnabled(false)
  }

  $stateProvider
    .state('app', {
      abstract: true,
      template: require('../layout/app-layout.html')
    });

  $urlRouterProvider.otherwise('/');
}

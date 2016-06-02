function HomeConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.home', {
    url: '/',
    controller: 'HomeCtrl',
    controllerAs: '$ctrl',
    template: require('./home.html'),
    title: 'Home'
  });

};

export default HomeConfig;

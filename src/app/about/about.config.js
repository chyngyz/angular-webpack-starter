function AboutConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.about', {
    url: '/about',
    controller: 'AboutCtrl',
    controllerAs: '$ctrl',
    template: require('./about.html'),
    title: 'About'
  });

};

export default AboutConfig;

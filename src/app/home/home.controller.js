class HomeCtrl {

  constructor($state) {
    'ngInject';

    this.name = "Yo Yo Angular!"
    this._$state = $state
  }

  goAbout() {
    this._$state.go('app.about')
  }

}

export default HomeCtrl;

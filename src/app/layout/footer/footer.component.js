class AppFooterCtrl {
  constructor() {
    'ngInject';

    this.today = moment().format('MMMM Do YYYY, HH:mm');
  }
}

let AppFooter = {
  controller: AppFooterCtrl,
  template: require('./footer.html')
};

export default AppFooter;

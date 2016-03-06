import Ember from 'ember';

export default Ember.Controller.extend({
  isAuthenticated: Ember.computed.oneWay('authentication.isAuthenticated'),
  actions: {
    pullAllData() {
      return this.get('ajax').request('/pull_all_data_from_trello');
    }
  }
})
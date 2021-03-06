import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    search: { refreshModel: true },
    list_ids: { refreshModel: true },
    member_ids: { refreshModel: true },
    sprint_ids: { refreshModel: true },
    quick_filters: { refreshModel: true }
  },
  model(params) {
    return this.store.query('card', params)
  }
})
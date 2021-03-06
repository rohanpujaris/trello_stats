import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  cardMembers: DS.hasMany('cardMembers'),
  cards: DS.hasMany('cards'),
  leaves: DS.hasMany('leaves',{inverse: 'member'}),
  leavesUpdatedByMember: DS.hasMany('leaves', {inverse: 'lastUpdatedBy'}),
  fullName: DS.attr('string'),
  jobProfile: DS.attr('number'),
  role: DS.attr('number'),
  expectedPoints: DS.attr('number'),
  pointStats: DS.attr(),
  completedPercentage: Ember.computed('pointStats.expected_points',
    'pointStats.accepted', function() {
    let acccepted = this.get('pointStats.accepted');
    let expected_points = this.get('pointStats.expected_points');
    if (expected_points === 0) { return 100; }
    if (acccepted === 0) { return 0; }
    return Math.round((acccepted * 100) / expected_points);
  }),
  incompletePercentage: Ember.computed('completedPercentage', function() {
    let completedPercentage = this.get('completedPercentage');
    return (completedPercentage >= 100 ? 0 : (100 - completedPercentage))
  })
});

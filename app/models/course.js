import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  grade: DS.attr('string'),
  credits: DS.attr('number'),
  semester: DS.attr('string'),
  _owner: DS.belongsTo('user')
});

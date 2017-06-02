import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete () {
      return this.sendAction('deleteCourse', this.get('course'))
    }
  },
});

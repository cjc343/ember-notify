/* global Ember */
import Notify from 'ember-notify';

export default Ember.Component.extend({
  /**
    An instance of Notify.ContainerView, defaults to the global Notify container.
   */
  notify: null,
  childViews: [],
  layoutName: 'ember-notify',
  init: function() {
    this.get('childViews').pushObject(this.get('notifyView'));
    this._super();
  },
  notifyView: function() {
    return this.get('notify') || Notify;
  }.property('notify')
});

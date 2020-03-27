Ext.define('KitchenSink.grid.GroupedController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.grouped',

  expandAll: function () {
      this.getView().expandAll();
  },

  collapseAll: function () {
      this.getView().collapseAll();
  }
});
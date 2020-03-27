Ext.define('Fiddle.model.Task', {
    extend: 'Ext.data.TreeModel',
    fields: [{
        name: 'task',
        type: 'string'
    }, {
        name: 'user',
        type: 'string'
    }, {
        name: 'duration',
        type: 'float'
    }, {
        name: 'done',
        type: 'boolean'
    }]
});

Ext.application({
    name: 'Fiddle',

    launch: function () {
        Ext.create('Ext.tree.Panel', {
            title: 'Example Tree Grid',
            width: 600,
            height: 370,
            renderTo: document.body,
            reserveScrollbar: true,
            useArrows: true,
            rootVisible: false,
            multiSelect: true,
            singleExpand: true,
            rowViewModel: true,

            store: {
                type: 'tree',
                model: 'Fiddle.model.Task',
                folderSort: true,
                proxy: {
                    type: 'ajax',
                    url: 'treegrid.json'
                }
            },

            columns: [{
                //this is so we know which column will show the tree
                xtype: 'treecolumn',
                text: 'Task',
                dataIndex: 'task',

                flex: 2,
                sortable: true
            }, {
                text: 'Assigned To',
                dataIndex: 'user',

                flex: 1,
                sortable: true
            }, {
                xtype: 'widgetcolumn',
                flex: 1,
                widget: {
                    xtype: 'button',
                    bind: '{record.task}',
                    scope: this,
                    handler: 'onActionClick'
                },
            }]
        });
    }
});

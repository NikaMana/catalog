Ext.onReady(function(){
  Ext.create('Ext.tree.Panel', {
    renderTo: document.body,
    title: 'TreeGrid',
    width: 500,
    height: 300,
    fields: ['name', 'type', 'date'],
    columns: [{
        xtype: 'treecolumn',
        text: 'Name',
        dataIndex: 'name',
        width: 250,
        sortable: true
    }, {
        text: 'Type',
        dataIndex: 'type',
        flex: 1,
        sortable: true
    }, {
        text: 'Date',
        dataIndex: 'date',
        flex: 1,
        sortable: true
    }],
    tbar: {
        reference: 'tbar',
        items: [{
            text: 'Expand All',
            handler: 'onExpandAllClick'
        }, {
            text: 'Collapse All',
            handler: 'onCollapseAllClick'
        }, {
            text: 'Reset',
            handler: 'onResetClick'
        }]
    },
    root: {
        children: [{
            name: 'Континент',
            mtype: 'Territory',
            children: [{
                name: 'Страна',
                mtype: 'Country',
                children: [{
                    name: 'Город',
                    mtype: 'City',
                    leaf: true
                }, {
                    name: 'Город',
                    mtype: 'City',
                    leaf: true
                }]
            }]
        }, {
            name: 'Континент',
            mtype: 'Territory',
            children: [{
                name: 'Страна',
                mtype: 'Country',
                children: [{
                    name: 'Город',
                    mtype: 'City',
                    leaf: true
                }]
            }]
        }]
    }
});
 });

 
Ext.onReady(function(){
    Ext.create('Ext.data.Store', {
        storeId:'employeeStore',
        fields:['firstname', 'lastname', 'seniority', 'dep', 'hired'],
        data:[
            {name:"Континент", type:"Folder", date:"26/03/2020"},
            {name:"Страна", type:"Folder", date:"26/03/2020"},
            {name:"Город", type:"File", date:"26/03/2020"},
            {name:"http://www.city.com", type:"Href", date:"26/03/2020"},
        ]
    });
    
    Ext.create('Ext.grid.Panel', {
        title: 'Column Demo',
        store: Ext.data.StoreManager.lookup('EarthStore'),
        columns: [
            {text: 'Name',  dataIndex:'name'},
            {text: 'Type',  dataIndex:'type'},
            {text: 'Date',  dataIndex:'date', xtype:'datecolumn', format:'D-M-Y'}
        ],
        width: 400,
        forceFit: true,
        renderTo: Ext.getBody()
    });
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
                    name: 'http://www.city.com',
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
Ext.create('Ext.data.Store', {
    storeId:'employeeStore',
    fields:['firstname', 'lastname', 'seniority', 'dep', 'hired'],
    data:[
        {name:"Континент", type:"Folder", date:"26/03/2020"},
        {name:"Страна", type:"Folder", date:"26/03/2020"},
        {name:"Город", type:"File", date:"26/03/2020"},
        {name:"http://www.city.com", type:"Href", date:"26/03/2020"},
    ]
});

Ext.create('Ext.grid.Panel', {
    title: 'Column Demo',
    store: Ext.data.StoreManager.lookup('EarthStore'),
    columns: [
        {text: 'Name',  dataIndex:'name'},
        {text: 'Type',  dataIndex:'type'},
        {text: 'Date',  dataIndex:'date', xtype:'datecolumn', format:'D-M-Y'}
    ],
    width: 400,
    forceFit: true,
    renderTo: Ext.getBody()
});
 });

 
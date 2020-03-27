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
Ext.create('Ext.data.Store', {
    storeId:'employeeStore',
    fields:['firstname', 'lastname', 'seniority', 'dep', 'hired'],
    data:[
        {name:"Michael", type:"Scott", date:"01/10/2004"},
        {firstname:"Dwight", lastname:"Schrute", seniority:2, dep:"Sales", hired:"04/01/2004"},
        {firstname:"Jim", lastname:"Halpert", seniority:3, dep:"Sales", hired:"02/22/2006"},
        {firstname:"Kevin", lastname:"Malone", seniority:4, dep:"Accounting", hired:"06/10/2007"},
        {firstname:"Angela", lastname:"Martin", seniority:5, dep:"Accounting", hired:"10/21/2008"}
    ]
});

Ext.create('Ext.grid.Panel', {
    title: 'Column Demo',
    store: Ext.data.StoreManager.lookup('employeeStore'),
    columns: [
        {text: 'First Name',  dataIndex:'firstname'},
        {text: 'Last Name',  dataIndex:'lastname'},
        {text: 'Hired Month',  dataIndex:'hired', xtype:'datecolumn', format:'M'},
        {text: 'Department (Yrs)', xtype:'templatecolumn', tpl:'{dep} ({seniority})'}
    ],
    width: 400,
    forceFit: true,
    renderTo: Ext.getBody()
});
 });

 
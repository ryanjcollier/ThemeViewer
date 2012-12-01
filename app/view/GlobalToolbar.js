Ext.define('Sencha.view.GlobalToolbar', {
    extend: 'Ext.TitleBar',
    xtype: 'globaltoolbar',

    config: {
        docked: 'top',
            items: [{
            iconCls: 'list',
            iconMask: true,
            ui: 'plain',
            align:'left',
            action: 'chooseStyles'
        },{
            iconCls: 'time_repeat',
            iconMask: true,
            ui: 'plain',
            align:'right',
            action: 'reticulateSplines'
        }]
    }
});

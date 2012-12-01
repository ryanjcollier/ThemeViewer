Ext.define('Sencha.store.Styles', {
    extend: 'Ext.data.Store',

    config: {
        fields: ['id', 'name'],
        data: [{
            id:   'default',
            name: 'Default theme'
        },{
            id:   'holiday',
            name: 'Holiday theme'
        }]
    }
});
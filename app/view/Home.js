Ext.define('Sencha.view.Home', {
    extend: 'Ext.Panel',
    xtype: 'homecard',

    config: {
        iconCls: 'home',
        title: 'home',
        styleHtmlContent: true,
        cls: 'styledContent',
        scrollable: 'vertical',
        items: [
            {
                xtype:'container',
                layout:'vbox',
                height:200,
                width: 200,
                defaults:{
                    xtype:'button'
                },
                items:[
                {
                text:'Action',
                ui: 'action'   
                },
                {
                text:'Confirm',
                ui: 'confirm'
                },
                {
                text:'Decline',
                ui: 'decline'
                
            }
            ]
                
            }
        ],
            
    
        
        html: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"
    }
});

Ext.define('Beaux.login.RootXWindow', {
    extend: 'Beaux.xserver.RootXWindow',
    requires: [
        'Beaux.login.LoginForm'
    ],

    initComponent: function() {
        var me = this;
        me.items = [{
            x:500,
            y:200,
            xtype: 'beaux.loginForm'
        }];
        
        me.callParent();
    }
});

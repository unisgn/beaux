Ext.define('Beaux.login.LoginForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.beaux.loginForm',
    
    requires: [
        'Beaux.desktop.Desktop'
    ],
    
    title: 'welcome login',
    width: 300,
    height: 400,
    layout: 'anchor',
    bodyPadding: '10px',
    defaults: {
        anchor: '100%'
    },
    defaultType: 'textfield',
    html: '<p>Welcome Login Beaux.</p>',
    
    initComponent: function() {
        var me = this;
        me.items = [{
            fieldLabel: 'User Name',
            name: 'username'

        },{
            fieldLabel: 'Password',
            name: 'password',
            inputType: 'password'
        },{
            xtype: 'button',
            text: 'login',
            handler: me.loadDesktop,
            scope: this
        }];
        this.callParent();
    },
    
    loadDesktop: function() {
        Beaux.desktop.Desktop.main();
    }
});

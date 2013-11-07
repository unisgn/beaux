Ext.define('Beaux.core.Beaux', {
    singleton: true,
    requires: [
        'Beaux.sys.login.LoginManager',
        'Beaux.sys.xserver.XServer',
        'Beaux.sys.application.ProcessManager'
    ],
    xserver: null,
    loginManager : null,
    
    setLoginManager : function(loginManager) {
        this.loginManager = loginManager;
    },
    getLoginManager : function() {
        return this.loginManager;
    },
    
    main: function() {
        var me = this;
        console.log('start beaux;');
        Beaux.sys.xserver.XServer.main();
        Beaux.sys.login.LoginManager.main();
        console.log('beaux is ready;');
    }
});

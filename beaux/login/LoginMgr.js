Ext.define('Beaux.login.LoginMgr', {
    singleton : true,
    requires : ['Beaux.xserver.XServer' ],

    rootXWindow : null,
    currentLoginUser : null,

    /**
     * @public
     */
    main : function () {
        var me = this;
        Ext.log('start loading loginManager;');
        me.rootXWindow = me.createRootXWindow();
        Beaux.xserver.XServer.setRootXWindow(me.rootXWindow);
        Ext.log('loginManager loaded;');
    },

    /**
     * private
     * @returns {Beaux.sys.apps.loginmgr.RootXWindow}
     */
    createRootXWindow : function () {
        var me = this;
        return Ext.create('Beaux.login.RootXWindow');
    },

    getAuthentication : function (_username, _password) {},

    // @public
    getCurrentLoginUser : function () {}
});

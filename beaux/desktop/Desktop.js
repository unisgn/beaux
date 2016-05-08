Ext.define('Beaux.desktop.Desktop', {

    singleton: true,
    requires: [
        'Beaux.xserver.XServer',
        'Beaux.xserver.RootXWindow'
    ],
    
    /**
     * @private 
     * @property
     * @type {Beaux.desktop.RootXWindow}
     */
    rootXWindow: null,

    /**
     * @private
     * @property
     */
    currentUser: null,

    /**
     * @private
     */
    createRootXWindow: function() {
        return Ext.create('Beaux.desktop.RootXWindow');
    },

    /**
     * @public
     * @override
     */
    main: function() {
        var me = this;
        Ext.log('start loading cassie desktop environment;');
        me.rootXWindow = me.createRootXWindow();
        Beaux.xserver.XServer.setRootXWindow(me.rootXWindow);
        Ext.log('cassie desktop environment loaded;');
        me.callParent();
    },

    getRootXWindow: function () {
        return this.rootXWindow;
    }
});

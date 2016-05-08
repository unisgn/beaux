Ext.define('Beaux.desktop.RootXWindow', {
    extend: 'Beaux.xserver.RootXWindow',


    /**
     * @type {Ext.util.KeyMap}
     */
    globalKeymap: null,

    /**
     * @override
     */
    layout: 'vbox',

    /**
     * @private
     * @property
     * @readonly
     */
    desk: null,

    /**
     * @override
     */
    initComponent: function() {
        var me = this;

        Ext.apply(me, {
            dockedItems: [{
                dock:'top',
                items:[me.createBanner()]
            }],
            items:[{
                xtype: 'container',
                padding: 5,
                html: 'Welcome To Beaux'
            }]
        });

        me.globalKeymap =  Ext.create('Ext.util.KeyMap', {
            target: Ext.getBody(),
            binding: {
                key: 27,
                handler: me.toggleArrangeWindows,
                scope: me
            }
        });
        
        me.callParent();
    },


    /**
     * @private
     * @returns {Beaux.desktop.EdgePanel}
     */
    createBanner: function() {
        var _appMenu = Ext.create('Beaux.desktop.panelWidget.AppsMenu');

        return Ext.create('Beaux.desktop.EdgePanel', {
            items: [
                _appMenu
            ]
        });
    },

    /**
     * @public
     * @returns {Beaux.desktop.EdgePanel}
     */
    getDesk: function() {
        return this.body;
    },

    /**
     * @private
     */
    toggleArrangeWindows: function() {
        Beaux.desktop.WindowArranger.toggleArrangeWindows();
    }
    
});

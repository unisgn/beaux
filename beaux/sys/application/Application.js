Ext.define('Beaux.sys.application.Application', {
    mixins: {
        observable: 'Ext.util.Observable',
    },
    requires: [
        'Beaux.sys.application.ProcessManager',
    ],

        

    
    constructor: function(cfg) {
        var me = this;
        me.mixins.observable.constructor.call(this, cfg);
    },
    
    
    main: function() {
        var me = this;
        me.getProcessManager().registerProcess(me);
    },    
    getProcessManager: function() {
        return Beaux.sys.application.ProcessManager;
    },
    
    
    terminate: function() {
        var me = this;
        me.getProcessManager().deregisterProcess(me);
    },
});
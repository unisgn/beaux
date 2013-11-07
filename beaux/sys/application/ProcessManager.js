Ext.define('Beaux.sys.application.ProcessManager', {
    singleton: true,
    requires: [
        'Ext.util.MixedCollection'
    ],
    processes: null,
    nextPID: null,
    constructor: function() {
        var me = this;
        me.processes = Ext.create('Ext.util.MixedCollection');
        me.nextPID = 1;
    },
    
    
    registerProcess: function(_proc) {
        var me = this;
        me.processes.add(_proc);
    },
    deregisterProcess: function(_proc) {
        var me = this;
        me.processes.remove(_proc);
    },
    
    getProcesses: function() {
        return this.processes;
    },
    getNextPID: function() {
        return this.nextPID;
    }
});

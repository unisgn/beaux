;Ext.define('Beaux.ApplicationLauncher', {
    singleton: true,

    /**
     *
     * @param {String} app the app class name
     * @param {Object} [cfg]
     */
    launch: function(app, cfg) {
        var _cfg = cfg || {};
        Ext.require(app, function() {
            var _app = Ext.ClassManager.get(app);
            _app && _app.launch && _app.launch(_cfg);
        });

    }
});

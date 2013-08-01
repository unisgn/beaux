Ext.define('Beaux.sys.application.ApplicationManager', {
	singleton: true,
	
	launchApp: function(_appCls, _cfg) {
		Ext.require(_appCls);
		var cfg = _cfg || {}
		_app = Ext.create(_appCls, cfg);
		_app.main();
	},
});
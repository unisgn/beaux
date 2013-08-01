Ext.define('Beaux.sys.xserver.XServer', {
    singleton: true,
    requires: [
  
    ],
    windowManager: null,
	viewport: null,
	rootXWindow: null,

    setRootXWindow: function(win) {
		this.rootXWindow = win;
	},
	

	getRootXWindow: function() {
		return this.rootXWindow;
	},
	
	/**
	 * @public
	 * /
	resetRootXWindow: function(win) {
		var me = this;
		if(me.rootXWindow) { 
			me.viewport.remove(me.rootXWindow); 
			me.viewport.update();
		}
		me.setRootXWindow(win);
		me.viewport.add(win);
		me.rootXWindow.show();
	},
	
	/**
	 * @public
	 * /
    main: function() {
		var me = this;
		me.viewport = Ext.create('Ext.container.Viewport', {layout: 'fit'});
	},	
});

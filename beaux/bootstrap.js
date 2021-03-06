Ext.log('start ext;');

Ext.Loader.setConfig({
    enabled: true,
    paths: {
        'Beaux': '.',
        // 'Finetrust':'../finetrust'
    }
});

Ext.Loader.loadScript('boot/override/override.js');

Ext.Loader.loadScript('Beaux.js');


// doesn't work on extjs5
/*Ext.getDoc().on({
    contextmenu: function(e) { e.stopEvent(); }
});*/

Ext.require('Beaux.login.LoginMgr');
Ext.require('Beaux.desktop.Desktop');

Ext.onReady(function () {


    // disable browser oncontextmenu event
    Ext.getBody().on({
        contextmenu: function(e) {
            e.stopEvent();
        }
    });

    Beaux.setDisplayManager(null);
    Beaux.setDesktopManager(Beaux.desktop.Desktop);
    Beaux.boot();

});

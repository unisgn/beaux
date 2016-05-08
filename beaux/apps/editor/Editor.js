Ext.define('Beaux.apps.editor.Editor', {
    extend: 'Beaux.Application',

    requires: [
        'Ext.form.field.HtmlEditor'
        //'Ext.form.field.TextArea'
    ],

    statics: {
        /**
         * @static
         */
        launch: function (cfg) {
            this.initXWindow();
        },

        initXWindow: function () {
            Ext.create('Beaux.desktop.XWindow', {
                title: 'EditorEditorEditorEditorEditor',
                width: 600,
                height: 400,
                border: false,
                hideMode: 'offsets',
                layout: 'fit',
                items: [
                    {
                        xtype: 'htmleditor',
                        //xtype: 'textarea',
                        value: [
                            'Some <b>rich</b> <font color="red">text</font> goes <u>here</u><br>',
                            'Give it a try!'
                        ].join('')
                    }
                ]
            }).show();
        }
    }


});

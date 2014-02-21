Ext.define('Jeeper.model.FinancialAccount', {
    extend: 'Ext.data.TreeModel',
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'version',
        type: 'int'
    }, {
        name: 'active',
        type: 'boolean',
        defaultValue: true
    }, {
        name: 'number',
        type: 'string'
    }, {
        name: 'code',
        type: 'string'
    }, {
        name: 'name',
        type: 'string'
    }, {
        name: 'searchKey',
        type: 'string'
    }, {
        name: 'description',
        type: 'string'
    }, {
        name: 'nodeName',
        type: 'string'
    }, {
        name: 'fullPathName',
        type: 'string'
    }, {
        name: 'type',
        type: 'string'
    }, {
        name: 'isDebitBalance',
        type: 'boolean',
        defaultValue: true
    }, {
        name: 'balance',
        type: 'float'
    }, {
        name: 'nodeDepth',
        type: 'int'
    }, {
        name: 'totalChilds',
        type: 'int'
    }, {
        name: 'parentNode_fk',
        type: 'int',
        convert: function(value, record) {
            return record.raw && record.raw.parentNode ? record.raw.parentNode.id : value;
        }
    }, {
        name: 'leaf',
        type: 'boolean'
    }, {
        name: 'expanded',
        type: 'boolean',
        defaultValue: true
    }],

    proxy: {
        type: 'rest',
        url: '../res/financial_accounts',
        reader: {
            type: 'json',
            root: 'data',
            messageProperty: 'message'
        }
    }
});
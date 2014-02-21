Ext.define('Jeeper.model.AccountJournal', {
    extend: 'Ext.data.Model',

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
        name: 'date',
        type: 'date',
        dateFormat: 'time',
        defaultValue: new Date()
    }, {
        name: 'number',
        type: 'string'
    }, {
        name: 'archived',
        type: 'boolean'
    }, {
        name: 'booked',
        type: 'boolean'
    }],

    proxy: {
        type: 'rest',
        url: '../res/financial_account_journals',
        reader: {
            type: 'json',
            root: 'data'
        }
    }
});
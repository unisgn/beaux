Ext.define('Jeeper.model.AccountJournalItem', {
    extend: 'Ext.data.Model',

    requires: [
        'Jeeper.model.Partner',
        'Jeeper.model.FinancialAccount'
    ],

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
        name: 'memo',
        type: 'string'
    }, {
        name: 'debit',
        type: 'float'
    }, {
        name: 'credit',
        type: 'float'
    }, {
        name: 'partner_fk',
        type: 'int',
        convert: function(value, record) {
            return record.raw && record.raw.partner ? record.raw.partner.id : value;
        }
    }, {
        name: 'account_fk',
        type: 'int',
        convert: function(value, record) {
            return record.raw && record.raw.account ? record.raw.account.id : value;
        }

    }],

    proxy: {
        type: 'rest',
        url: '../res/financial_account_journal_items',
        reader: {
            type: 'json',
            root: 'data'
        }
    }

});
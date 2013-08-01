Ext.define('Beaux.sys.desktop.panelWidget.AppsMenu', {
	extend: 'Beaux.sys.desktop.lib.PanelWidget',
	requires: [
		'Beaux.sys.application.ApplicationManager'
	],
	
	initComponent: function() {
		var me = this;
		var appMgr = me.getApplicationManager();
		me.items = [
			Ext.create('Ext.toolbar.Toolbar', {
				items: [{
					xtype: 'button',
					text: 'System',
					menu: [{
						text: 'Setup',
						menu: [{
							text: 'UOM'
						}]
					},{
						text: 'Logout'
					}]
				},{
					xtype: 'button',
					text: 'Company',
					menu: [{
						text: 'Department'
					},{
						text: 'Employee'
					},{
						text: 'Broadcast'
					}]
				},{
					xtype: 'button',
					text: 'MasterData',
					menu: [{
						text: 'Partner',
					},{
						text: 'Material',
					},{
						text: 'Activity',
					},{
						text: 'Document',
					}]
				},{
					xtype: 'button',
					text: 'Sale',
					menu: [{
						text: 'SaleHub'
					}]
				},{
					xtype: 'button',
					text: 'Purchase',
					menu: [{
						text: 'PurchaseHub'
					}]
				},{
					xtype: 'button',
					text: 'Factory',
					menu: [{
						text: 'FactoryHub'
					},{
						text: 'BOM'
					}]
				},{
					xtype: 'button',
					text: 'Warehouse',
					menu: [{
						text: 'WarehouseHub'
					}]
				},{
					xtype: 'button',
					text: 'Account',
					menu: [{
						text: 'ChartOfAccount'
					}]
				},{
					xtype: 'button',
					text: 'Report'
				},{
					xtype: 'button',
					text: 'Utils',
					menu: [{
						text: 'Task'
					},{
						text: 'Memo'
					},{
						text: 'MSG'
					},{
						text: 'Email'
					},{
						text: 'Calendar'
					},{
						text: 'Editor',
						handler: function() {appMgr.launchApp('Beaux.usr.apps.editor.Editor');}
					}]
				},{
					xtype: 'button',
					text: 'Plugin',
					menu: [{
						text: 'Express'
					}]
				}],
			}),
		];
		
		me.callParent();
		
	},
	
	getApplicationManager: function() {
		return Beaux.sys.application.ApplicationManager;
	},
});
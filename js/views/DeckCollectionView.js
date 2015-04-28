/**
 * Created by kohlmannj on 4/25/15.
 */

define(function(require) {
	var Marionette = require("marionette");

	var DeckCollection = require("models/DeckCollection");
	var DeckView = require("views/DeckView");

	return Marionette.CollectionView.extend({
		collection: DeckCollection,
		childView: DeckView,
		initialize: function() {
			this.expandedChild = null;
		},
		childEvents: {
			"expand": "expandChildView"
		},
		expandChildView: function(child) {
			if (this.expandedChild !== null && this.expandedChild !== child) {
				// Collapse the child view
				this.expandedChild.triggerMethod("collapse");
			}
			// Expand the new child view
			this.expandedChild = child;
		},
		collapseChildView: function(child) {
			if (this.expandedChild === child) {
				this.expandedChild = null;
			}
		}
	});
});

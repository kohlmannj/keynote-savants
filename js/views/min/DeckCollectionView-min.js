define(function(e){var i=e("marionette"),d=e("models/DeckCollection"),l=e("views/DeckView");return i.CollectionView.extend({collection:d,childView:l,initialize:function(){this.expandedChild=null},childEvents:{expand:"expandChildView"},expandChildView:function(e){null!==this.expandedChild&&this.expandedChild!==e&&this.expandedChild.triggerMethod("collapse"),this.expandedChild=e},collapseChildView:function(e){this.expandedChild===e&&(this.expandedChild=null)}})});
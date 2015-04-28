/**
 * Created by kohlmannj on 4/22/15.
 *
 * This is a very lightweight application module which is really just an
 * extended init() block to fetch the data for PersonCollection and then
 * instantiate the DropdownCompositeView.
 */

define(function(require) {
    var _ = require("underscore");

    var DeckCollection = require("models/DeckCollection");
    var DeckCollectionView = require("views/DeckCollectionView");

    var decks = new DeckCollection();
    var decksView;

    var init = function() {
        decksView = new DeckCollectionView({
            el: "#decks",
            collection: decks
        });

        decksView.render();
    };

    // Basic bootstrapping: fetch the collection and then instantiate the view.
    decks.fetch({
        success: init,
        error:  _.bind(function() {
            window.alert("Couldn't fetch decks from the server.");
        }, this)
    });
});

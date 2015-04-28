/**
 * Created by kohlmannj on 4/25/15.
 */

define(function(require) {
    var Backbone = require("backbone");
    var Deck = require("models/Deck");

    return Backbone.Collection.extend({
        model: Deck,
        url: "decks.json"
    })
});

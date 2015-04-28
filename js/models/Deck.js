/**
 * Created by kohlmannj on 4/25/15.
 */

/* global define */

define(function(require) {
    var Backbone = require("backbone");

    return Backbone.Model.extend({
    	idAttribute: "vid",

    	defaults: {
    		"title": null,
    		"description": null,
    		"vid": -1,
    		// Vimeo embed display options
    		"autoplay": true,
    		"byline": false,
    		"color": false,
    		"loop": true,
    		"portrait": false,
            "preview_vid": null,
            "sample": null
    	}
    });
});

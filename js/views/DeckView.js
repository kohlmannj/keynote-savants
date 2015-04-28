/**
 * Created by kohlmannj on 4/25/15.
 */

/* global define */

define(function(require) {
    var _ = require("underscore");
    var Marionette = require("marionette");

    var Deck = require("models/Deck");
    var template = require("text!templates/DeckView.html");

    var extensions = {
        "key": "Keynote",
        "pdf": "PDF",
        "ppt": "PowerPoint",
        "pptx": "PowerPoint",
        "motn": "Apple Motion",
        "mov": "QuickTime",
        "mp4": "QuickTime",
        "m4v": "QuickTime"
    };

    return Marionette.ItemView.extend({
    	model: Deck,
    	className: "DeckView col-xs-12 col-sm-6 col-md-6 col-lg-4",
    	template: _.template(template),
    	ui: {
    		"video": "video",
    		"player": ".video iframe"
    	},
        templateHelpers: function() {
            return {
                sample_type: function() {
                    if (this.sample && typeof this.sample === "string") {
                        var extension = this.sample.match(/\.(\w+)$/);
                        if (extension !== null) {
                            extension = extension[1];
                            return extensions[extension];
                        }
                    }
                }
            };
        },
    	initialize: function() {
    		this.expanded = false;
    	}//,
    	// events: {
     //        "click": function() {
     //        	if (this.expanded === false) {
     //        		this.triggerMethod("expand");
     //        	}
     //        	else if (this.expanded === true) {
     //        		this.triggerMethod("collapse");
     //        	}
     //        }
     //    },
   //      onExpand: function() {
			// this.expanded = true;
			// this.$el.addClass("expanded");

   //      },
   //      onCollapse: function() {
   //  		this.expanded = false;
			// this.$el.removeClass("expanded");
   //      }
    });
});

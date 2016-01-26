'use strict';
module.exports = require('marko-widgets').defineComponent({
    template: require.resolve('./template.marko'),
    init: function() {
        this.rootEl = this.el;
    },

    //Required for stateful widget.
    getInitialState: function(input) {
        return {
            model: input.model,
            options: input.options
        };
    },

    //Required for client side render.
    getTemplateData: function(state, input) {
        return {
            model: input.model,
            options: input.options
        };
    },

    getInitialBody: function(input) {
        return input.body || input.renderBody;
    }
});

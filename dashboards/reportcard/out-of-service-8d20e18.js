
define('text!components/layouts/out-of-service/out-of-service.html',[],function () { return '<span data-bind="visible:isBannerOn() " style="padding:1px;width:70%;margin:1px;text-align:center">\n<div>\n<b style="color:red">Our servers are currently under maintenance or experiencing a technical problem. This is probably\ntemporary and should be fixed soon. <p data-bind="text:customMessage"> </p></b>\n</div>\n</span>';});


/**
 * When a global config is set for this dashboard a message will
 * about the dashboard being out of service will pop out.
 * See config: https://meta.wikimedia.org/wiki/Dashiki:OutOfService
 **/
define('components/layouts/out-of-service/out-of-service',['require','text!./out-of-service.html','knockout','apis.config'],function (require) {

    var templateMarkup = require('text!./out-of-service.html'),
        ko = require('knockout'),
        configApi = require('apis.config');

    function OutOfServiceBanner() {
        this.isBannerOn = ko.observable(false);
        this.customMessage = ko.observable('');

        //request data and change out of banner state if proceeds
        configApi.getOutOfService(function (config) {
            if (config.outOfService === 'true') {
                this.isBannerOn(true);
                this.customMessage(config.customMessage);
            }
        }.bind(this));
    }
    return {
        viewModel: OutOfServiceBanner,
        template: templateMarkup
    };
});

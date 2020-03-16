"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _consts_1 = require("~consts");
var HttpMockService = (function () {
    function HttpMockService($http) {
        this.$http = $http;
    }
    HttpMockService.prototype.getInitialData = function () {
        return this.$http
            .get(_consts_1.DATA_URL)
            .then(function (response) { return response.data; });
    };
    return HttpMockService;
}());
exports.HttpMockService = HttpMockService;
HttpMockService.$inject = ['$http'];
//# sourceMappingURL=scheduler.service.js.map
/**
 * FouleFactoryApiLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ) on 09/14/2016
 */

var _request = require('../Http/Client/RequestClient'),
    _configuration = require('../configuration'),
    _APIHelper = require('../APIHelper');

var TaskAnswerChoicesController = {

    /**
     * Get task answer choice by id
     * @param {int} id    Required parameter: Example: 
     * @param {string|null} acceptLanguage    Optional parameter: Example: fr
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {mixed}
     */
    getTaskAnswerChoicesGet : function(id, acceptLanguage, callback){
        //Assign default values
        acceptLanguage = acceptLanguage || "fr";

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/v1.1/taskAnswerChoices/{id}";
        
        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "id" : id
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept" : "application/json",
            "Accept-Language" : (null != acceptLanguage)? acceptLanguage: "fr"
        };

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "GET",
            headers: _headers,
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword
        };
        
        //Build the response processing. 
        function cb(_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                callback(null,parsed,_context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse:_response.body},null,_context);
            }
        }
        _request(_options, cb);
    }

};

module.exports = TaskAnswerChoicesController;
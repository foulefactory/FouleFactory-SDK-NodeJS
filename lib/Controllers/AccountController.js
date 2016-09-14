/**
 * FouleFactoryApiLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ) on 09/14/2016
 */

var _request = require('../Http/Client/RequestClient'),
    _configuration = require('../configuration'),
    _APIHelper = require('../APIHelper');

var AccountController = {

    /**
     * TODO: type endpoint description here
     * @param {string} transactionId    Required parameter: Example: 
     * @param {string|null} acceptLanguage    Optional parameter: Example: fr
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {mixed}
     */
    getAccountValidateTransaction : function(transactionId, acceptLanguage, callback){
        //Assign default values
        acceptLanguage = acceptLanguage || "fr";

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/v1.1/accounts/validateTransaction";
        
        //Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            "transactionId" : transactionId
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
    },


    /**
     * Payin
     * @param {PayinServiceModel} model    Required parameter: Example: 
     * @param {string|null} acceptLanguage    Optional parameter: Example: fr
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {mixed}
     */
    createAccountPayIn : function(model, acceptLanguage, callback){
        //Assign default values
        acceptLanguage = acceptLanguage || "fr";

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/v1.1/accounts/payin";
        
        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept" : "application/json",
            "content-type" : "application/json; charset=utf-8",
            "Accept-Language" : (null != acceptLanguage)? acceptLanguage: "fr"
        };

        //Remove null values
        _APIHelper.cleanObject(model);

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "POST",
            headers: _headers,
            body : _APIHelper.jsonSerialize(model),
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
    },


    /**
     * Get wallet
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {mixed}
     */
    getAccountGetWallet : function(callback){

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/v1.1/accounts/wallet";
        
        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept" : "application/json"
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
    },


    /**
     * Create new account
     * @param {AccountWriterServiceModel} acc    Required parameter: Example: 
     * @param {string|null} acceptLanguage    Optional parameter: Example: fr
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {mixed}
     */
    createAccountCreateAccount : function(acc, acceptLanguage, callback){
        //Assign default values
        acceptLanguage = acceptLanguage || "fr";

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/v1.1/accounts";
        
        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept" : "application/json",
            "content-type" : "application/json; charset=utf-8",
            "Accept-Language" : (null != acceptLanguage)? acceptLanguage: "fr"
        };

        //Remove null values
        _APIHelper.cleanObject(acc);

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "POST",
            headers: _headers,
            body : _APIHelper.jsonSerialize(acc),
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
    },


    /**
     * Get my account
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {mixed}
     */
    getAccountGet : function(callback){

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/v1.1/accounts";
        
        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept" : "application/json"
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

module.exports = AccountController;
FouleFactoryApiLib
=================
This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ) on 09/14/2016
Sample : https://apimatic.zendesk.com/hc/en-us/articles/209432988-Using-your-generated-Node-JS-SDK-


How To Install: 
=============
The generated code relies on node package manager (npm) being available to resolve dependencies.
Once published you will need copy the folder 'foulefactoryapilib' in to your 'node_modules' folder.

  
How To Use:
===========
The following shows how import the controllers and use:

1) Import the module:

        var foulefactoryapilib = require('foulefactoryapilib');

2) Configure any authentication parameters. For example:

		foulefactoryapilib.configuration.BASEURI = "http://sandbox-api.foulefactory.com";
        foulefactoryapilib.configuration.basicAuthUserName = "MY_LOGIN_API";
        foulefactoryapilib.configuration.basicAuthPassword = "MY_API_KEY";

3) Access various controllers by:
		
		var callback = function (err, data) {
            if (err) throw err;
        };

        foulefactoryapilib.AccountController.getAccountGet(callback);


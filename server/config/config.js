/**
 * Set the environment variables 
 * 
 *
 * NODE_ENV to “production” to run the app in production mode.
 * 
 *
 */
var path = require('path'),
    root_path = path.normalize(__dirname),
    _ = require('lodash');

module.exports = function(env) {
    var main = {
        application: {
            root_path: path.join('E:','siva','techvolks'),
            addPrefixes: process.argv[2],
            logFilenamePrefix: "",
            modelNamePrefix: "",
            http_port: 90,
            https_port: 443
        },
        logFiles: {
            databaseLogFile: "db.log",
            webserverLogFile: "web.log",
            exceptionLogFile: "exceptions.log",
            plainLogFile: "mdb-app.log"
        },

        modelsFolder: '../models',
        database: 'mongodb://localhost/techvolks',
    };
    var dev = {
        database: 'mongodb://localhost/techvolks',
        env: 'development',
        tech_volks_app_root: path.join('E:', 'siva', 'techvolks','app','html'),
    };
    var prod = {
        database: 'mongodb://localhost/techvolks',
        temp: path.join('/', 'tmp'),
        env: 'production',
        certificates_dir: path.join('/', 'etc', 'ssl', 'self-signed'),
        tech_volks_app_root: path.join('/', 'root', 'siva', 'techvolks', 'app'),
    }
    return _.extend(main, (env == 'dev') ? dev : prod);
}()
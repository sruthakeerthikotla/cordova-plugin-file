// Licensed Materials - Property of IBM
// 5725-I43 (C) Copyright IBM Corp. 2016. All Rights Reserved.
// US Government Users Restricted Rights - Use, duplication or
// disclosure restricted by GSA ADP Schedule Contract with IBM Corp.

/*
 * Runs after prepare hook
 * For Android, overwrites File plugin www files
 */

var path = require('path'),
    fs = require('fs');

var hookConsts = require('./hook-consts');

module.exports = function(context) {
    if (context.hook === 'after_prepare') {
      return afterPrepare(context);
    }
};

function afterPrepare(context) {
    var platformPath;
    var currentPlatforms = context.opts.platforms;
    var projectRoot = path.resolve(context.opts.projectRoot);
    var pluginDir = context.opts.plugin.dir;

    currentPlatforms.forEach(function(platformId) {
        platformPath = path.join(projectRoot, 'platforms', platformId);

        if (platformId === hookConsts.ANDROID) {
            // Copy new www files
            hookConsts.WWW_FILES.forEach(function(file) {
                copyFile(path.join(pluginDir, hookConsts.WWW_FILES_SRC_DIR, file),
                    path.join(projectRoot, hookConsts.FILE_PLUGIN_WWW_DIR, file));
            });
        }
    });
}

function copyFile(srcFile, destFile) {
    try {
        fs.writeFileSync(destFile, fs.readFileSync(srcFile));
    }
    catch (err) {
        console.error('Error while copying files for ' + hookConsts.PLUGIN_ID + '. \n' + err);
    }
}

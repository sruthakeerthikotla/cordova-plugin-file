// Licensed Materials - Property of IBM
// 5725-I43 (C) Copyright IBM Corp. 2016. All Rights Reserved.
// US Government Users Restricted Rights - Use, duplication or
// disclosure restricted by GSA ADP Schedule Contract with IBM Corp.

var path = require('path');

define('path', require('path'));

function define(name, value) {
    Object.defineProperty(exports, name, {
        value: value,
        enumerable: true
    });
}

define('ANDROID', 'android');
define('PLUGIN_ID', 'org.apache.cordova.file');
define('PLUGINS_DIR_ANDROID', path.join('platforms', 'android', 'assets', 'www', 'plugins'));

define('FILE_PLUGIN_WWW_DIR', path.join(this.PLUGINS_DIR_ANDROID, this.PLUGIN_ID, 'www'));
define('WWW_FILES_SRC_DIR', 'www-android');

define('WWW_FILES',
    ['DirectoryEntry.js',
    'DirectoryReader.js',
    'Entry.js',
    'File.js',
    'FileEntry.js',
    'FileError.js',
    'FileReader.js',
    'FileSystem.js',
    'FileUploadOptions.js',
    'FileUploadResult.js',
    'FileWriter.js',
    'Flags.js',
    'LocalFileSystem.js',
    'Metadata.js',
    'ProgressEvent.js',
    'fileSystems.js',
    'requestFileSystem.js',
    'resolveLocalFileSystemURI.js',
    'android/FileSystem.js',
    'fileSystems-roots.js',
    'fileSystemPaths.js']
);

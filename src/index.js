'use strict';

exports.register = function (plugin, options, next) {
  plugin.route({
    method: 'post',
    path: '/batch',
    handler: require('./batch').handler
  });
  plugin.dependency('inject-then');
  next();
};

exports.register.attributes = {
  pkg: require('../package.json')
};
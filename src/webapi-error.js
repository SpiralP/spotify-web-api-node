'use strict';

function WebApiError(message, statusCode) {
  this.name = 'WebApiError';
  this.message = message || '';
  this.statusCode = statusCode;
}

WebApiError.prototype = Error.prototype;

module.exports = WebApiError;

'use strict';

/**
 * @ngdoc service
 * @name apmtApp.nrcm
 * @description
 * # nrcm
 * Service in the apmtApp.
 */
var app = angular.module('apmtApp');
app.service('NRCM', function NRCM() {

    function findByIdInCookies(id, type) {
        var objects = $.cookie(type);
        for (var i in objects) {
            if (objects.hasOwnProperty(i)) {
                var object = objects[i];
                if (object.id === id) {
                    return object;
                }
            }
        }
        return null;
    }

    var that = this;

    this.iterations = {
        list: function(callback) {
            setTimeout(function() {
                var iterations = $.cookie('iterations');
                if (!iterations) {
                    iterations = [];
                }
                callback(iterations);
            }, 1000);

        },
        read: function(id, callback) {
            setTimeout(function() {
                callback(findByIdInCookies(id, 'iterations'));
            }, 1000);
        },
        save: function(data, callback) {
            setTimeout(function() {
                var iterations = $.cookie('iterations');
                if (!iterations) {
                    iterations = [];
                }
                if (data.id !== undefined) {
                    for (var i in iterations) {
                        if (iterations.hasOwnProperty(i)) {
                            var iteration = iterations[i];
                            if (iteration.id === data.id) {
                                iterations[i] = data;
                                $.cookie('iterations', iterations);
                                callback(data);
                                return;
                            }
                        }
                    }
                    callback(false);
                } else {
                    data.id = that.uuid();
                    iterations.push(data);
                    $.cookie('iterations', iterations);
                    callback(data);
                }
            }, 1000);
        },
        remove: function(id, callback) {
            setTimeout(function() {
                var iterations = $.cookie('iterations');
                for (var i in iterations) {
                    if (iterations.hasOwnProperty(i)) {
                        var iteration = iterations[i];
                        if (iteration.id === id) {
                            iterations.splice(i, 1);
                            $.cookie('iterations', iterations);
                            callback(true);
                            return;
                        }
                    }
                }
                callback(false);
            }, 1000);
        }

    };

    this.items = {
        list: function(callback) {
            setTimeout(function() {
                var items = $.cookie('items');
                // Vincula as iterations aos items
                for (var i in items) {
                    if (items.hasOwnProperty(i)) {
                        var iterationId = items[i].iterationId;
                        items[i].iteration = findByIdInCookies(iterationId, 'iterations');
                    }
                }
                callback(items);

            }, 1000);
        },
        read: function(id, callback) {
            setTimeout(function() {
                callback(findByIdInCookies(id, 'items'));
            }, 1000);
        },
        save: function(data, callback) {
            setTimeout(function() {
                var items = $.cookie('items');
                if (!items) {
                    items = [];
                }
                if (data.id !== undefined) {
                    for (var i in items) {
                        if (items.hasOwnProperty(i)) {
                            var item = items[i];
                            if (item.id === data.id) {
                                items[i] = data;
                                $.cookie('items', items);
                                callback(data);
                                return;
                            }
                        }
                    }
                    callback(false);
                } else {
                    data.id = that.uuid();
                    items.push(data);
                    $.cookie('items', items);
                    callback(data);
                }
            }, 1000);
        },
        remove: function(id, callback) {
            setTimeout(function() {
                var items = $.cookie('items');
                for (var i in items) {
                    if (items.hasOwnProperty(i)) {
                        var item = items[i];
                        if (item.id === id) {
                            items.splice(i, 1);
                            $.cookie('items', items);
                            callback(true);
                            return;
                        }
                    }
                }
                callback(false);
            }, 1000);
        }
    };

    /*jslint bitwise: true */
    this.uuid = function() {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === 'x' ? r : (r & 0x7 | 0x8)).toString(16);
        });
        return uuid;
    };

});
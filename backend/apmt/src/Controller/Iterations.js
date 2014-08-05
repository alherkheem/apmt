function Iterations() {
};

Iterations.prototype.before = function(callback) {
    this.responseHeaders['Access-Control-Allow-Origin'] = '*';
    this.responseHeaders['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';
    this.responseHeaders['Access-Control-Allow-Methods'] = 'GET, PUT, POST, DELETE, HEAD';
    callback(true);
}

Iterations.prototype.options = function (callback) {
    callback({});
};

Iterations.prototype.get = function (callback) {
    var that = this;
    var iteration = this.model('Iteration');
    iteration.query(this.query, function (err, result) {
        if (err) {
            that.statusCode = 404;
            callback({});
        } else {
            if (result !== undefined) {
                callback(result);
            } else {
                that.statusCode = 404;
                callback({});
            }
        }
    });
};

Iterations.prototype._save = function (callback) {
    var that = this;
    var iteration = this.model('Iteration');
    iteration.store(this.query.id, this.payload, function (err, result) {
        if (err) {
            that.statusCode = 404;
            callback({
                'error' : err.name,
                'message' :  err.message
            });
        } else {
            callback(result);
        }
    });
};

Iterations.prototype.delete = function (callback) {
    var that = this;
    var iteration = this.model('Iteration');
    if (this.query.id === undefined) {
        that.statusCode = 404;
        callback({});
    } else {
        iteration.delete(this.query.id, function (err, result) {
            if (err) {
                that.statusCode = 404;
                callback({
                    'error' : err.name,
                    'message' :  err.message
                });
            } else {
                callback(result);
            }
        });
    }
};

Iterations.prototype.put = function (callback) {
    this._save(callback);
};

Iterations.prototype.post = function (callback) {
    this._save(callback);
};

module.exports = Iterations;

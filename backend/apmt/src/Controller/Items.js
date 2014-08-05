function Items() {
};

Items.prototype.before = function(callback) {
    this.responseHeaders['Access-Control-Allow-Origin'] = '*';
    this.responseHeaders['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';
    this.responseHeaders['Access-Control-Allow-Methods'] = 'GET, PUT, POST, DELETE, HEAD';
    callback(true);
}

Items.prototype.options = function (callback) {
    callback({});
};

Items.prototype.get = function (callback) {
    var that = this;
    var item = this.model('Item');
<<<<<<< HEAD
    console.log(this.query);
    item.find(this.query, function (err, result) {
=======
    item.query(this.query, function (err, result) {
>>>>>>> 0d3fec940369ab26f5ed0be1cff76349b76581af
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

Items.prototype._save = function (callback) {
    var that = this;
    var item = this.model('Item');
    item.store(this.query.id, this.payload, function (err, result) {
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

Items.prototype.delete = function (callback) {
    var that = this;
    var item = this.model('Item');
    if (this.query.id === undefined) {
        that.statusCode = 404;
        callback({});
    } else {
        item.delete(this.query.id, function (err, result) {
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

Items.prototype.put = function (callback) {
    this._save(callback);
};

Items.prototype.post = function (callback) {
    this._save(callback);
};

module.exports = Items;

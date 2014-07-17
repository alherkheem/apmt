function Items() {
};

Items.prototype.before = function(callback) {
    this.responseHeaders['Access-Control-Allow-Origin'] = '*';
    this.responseHeaders['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';
    this.responseHeaders['Access-Control-Allow-Methods'] = 'GET, PUT, POST, DELETE, HEAD';
    callback(true);
}

Items.prototype.options = function (callback) {
    this.statusCode = 200;
    callback({});
};

Items.prototype.get = function (callback) {
    var that = this;
    var item = this.model('Item');
    item.find(this.query, function (err, result) {        
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

Items.prototype.put = function (callback) {
    var that = this;
    var item = this.model('Item');
    item.save(this.query.id, this.payload, function (err, result) {
        if (err) {
            that.statusCode = 404;
            callback(err);
        } else {
            callback(result);
        }
    });
};

Items.prototype.post = function (callback) {
    var that = this;
    var item = this.model('Item');
    item.save(this.query.id, this.payload, function (err, result) {
        if (err) {
            that.statusCode = 404;
            callback(err);
        } else {
            callback(result);
        }
    });
};

module.exports = Items;

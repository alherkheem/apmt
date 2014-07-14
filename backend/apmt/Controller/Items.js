function Items() {
};

Items.prototype.get = function (callback) {
    var that = this;
    this.models.Item.find(this.query, function (err, result) {
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

Items.prototype.post = function (callback) {
    var that = this;
    this.models.Item.save(this.query.id, this.payload, function (err, result) {
        if (err) {
            that.statusCode = 404;
            callback(err);
        } else {
            callback(result);
        }
    });
};

module.exports = Items;

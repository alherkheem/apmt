function Items() {
};

Items.prototype.get = function (callback) {
    if (this.query.id === undefined) {
        this.statusCode = 404;
        callback({});
    } else {
        this.models.Item.findById(this.query.id, function(err, result) {
            if (err) {
                this.statusCode = 404;
                callback({});
            } else {
                callback(result.value);
            }
        });
    }
};

module.exports = Items;

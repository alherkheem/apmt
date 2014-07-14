function Item() {
    this.uid = 'apmt_item';
    this.validate = { 'title' : function (value, validationData, callback) {
        if (typeof value !== 'string' || value.length < 5) {
            callback(false);
        } else {
            callback(true);
        }
    }};
    this.requires = { 'title' : 'Must have a title' };
    this.locks = {};
    this.keys = {};
    this.separator = '_';
};

Item.prototype.find = function(query, callback) {
    if (query.id !== undefined) {
        this.model.findById(query.id, function (err, result) {
            callback(err, result);
        });
    } else {
        var queryOptions = {};
        queryOptions.limit = query.limit !== undefined ? query.limit : 0;
        queryOptions.skip = query.skip !== undefined ? query.skip : 0;
        this.model.findAll('item', {}, queryOptions, function (err, result) {
            callback(err, result);
        });
    }
};

Item.prototype.save = function (id, data, callback, prefix, options) {
    this.model.save(id, data, function (err, result) {
        callback(err, result);
    }, prefix, options);
}

module.exports = Item;

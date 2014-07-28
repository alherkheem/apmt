function Item() {
    this.uid = 'apmt_item';
    this.validate = { 'title' : function (value, validationData, callback) {
        if (typeof value !== 'string' || value.length < 5) {
            callback(false);
        } else {
            callback(true);
        }
    }};
    this.requires = { 'title' : 'title' };
    this.locks = {};
    this.keys = {};
    this.separator = '_';
    this.schema = {
        'title' : 'string',
        'description' : 'string',
        'iterationId' : 'string'
    };
};

Item.prototype.query = function(query, callback) {
    this._find(query, function (err, result) {
        callback(err, result);
    });
};

Item.prototype.delete = function(query, callback) {
    this._removeById(query, function (err, result) {
        callback(err, result);
    });
};

Item.prototype.store = function (id, data, callback) {
    this._save(id, data, function (err, result) {
        callback(err, result);
    });
};

module.exports = Item;
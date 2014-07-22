function Iteration() {
    this.uid = 'apmt_iteration';
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
};

Iteration.prototype.find = function(query, callback) {
    this._find(query, function (err, result) {
        callback(err, result);
    });
};

Iteration.prototype.save = function (id, data, callback, prefix, options) {
    this._save(id, data, function (err, result) {
        callback(err, result);
    }, prefix, options);
}

module.exports = Iteration;
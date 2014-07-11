function Item() {
    this.uid = 'apmt_';
    this.validate = { 'title' : function(value, validationData, callback) {
        if (value.length > 5) {
            callback(true);
        } else {
            callback(false);
        }
    } };
    this.requires = { 'title' : 'Must have a title' };
    this.locks = {};
    this.keys = {};
};

Item.prototype.findById = function (id, callback) {
    this.model.findByKey(id, 'id_', function(err, result) {
        callback(err, result);
    });
};

module.exports = Item;

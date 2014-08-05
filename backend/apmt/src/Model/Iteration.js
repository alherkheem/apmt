function Iteration() {
    this.uid = 'apmt_iteration';
    this.validate = { 'name' : function (value, validationData, callback) {
        if (typeof value !== 'string' || value.length < 5) {
            callback(false);
        } else {
            callback(true);
        }
    }};
    this.requires = { 'name' : 'name' };
    this.locks = {};
    this.keys = {};
    this.separator = '_';
    this.schema = {
        'name' : 'string',
        'planningMeetingDate' : 'string',
        'startDate' : 'string',
        'endDate' : 'string',
        'reviewMeetingDate' : 'string',
        'retrospectiveMeetingDate' : 'string',
        'holidays' : 'string',
        'goal' : 'string',
        'storyPointsPredition' : 0
    };

};


Iteration.prototype.query = function(query, callback) {
    this._find(query, function (err, result) {
        callback(err, result);
    });
};

Iteration.prototype.delete = function(query, callback) {
    this._removeById(query, function (err, result) {
        callback(err, result);
    });
};

Iteration.prototype.store = function (id, data, callback) {
    this._save(id, data, function (err, result) {
        callback(err, result);
    });
};

module.exports = Iteration;
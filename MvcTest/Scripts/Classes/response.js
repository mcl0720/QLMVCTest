var Response = function (jqResponse, type) {
    this.jqResponse = jqResponse;
    this.type = type;
};

Response.prototype.remove = function () {
    this.jqResponse.remove();
};
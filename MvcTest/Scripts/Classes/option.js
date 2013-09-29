var Option = function (jqOption, type) {
    this.jqOption = jqOption;
    this.type = type;
    this.id = -1;
};

Option.prototype.remove = function () {
    this.jqOption.remove();
};
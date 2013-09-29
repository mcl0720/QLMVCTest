var Option = function (jqOption, type) {
    this.jqOption = jqOption;
    this.type = type;
};

Option.prototype.remove = function () {
    this.jqOption.remove();
};
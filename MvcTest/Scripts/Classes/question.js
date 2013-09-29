var Question = function (jqQuestion, type) {
    this.jqQuestion = jqQuestion;
    this.options = [];
    this.jqOptionSection = jqQuestion.find(".option-container");
    this.type = type;
};

Question.prototype.addOption = function (option) {
    this.options.push(option);
    this.jqOptionSection.append(option.jqOption);
};

Question.prototype.removeOption = function (index) {
    this.options[index].remove();
    this.options.splice(index, 1);
}

Question.prototype.remove = function () {
    var Question = this;
    this.jqQuestion.hide("slow", function () {
        Question.jqQuestion.remove();
    });
};

Question.prototype.setPosition = function (position) {
    this.jqQuestion.find(".question-position").html(position);
};
var Question = function (jqQuestion) {
    this.jqQuestion = jqQuestion;
    this.controls = [];
};

Question.prototype.addControl = function () {

};

Question.prototype.remove = function () {
    this.jqQuestion.remove();
};
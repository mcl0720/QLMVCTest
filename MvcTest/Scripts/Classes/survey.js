var Survey = function (jqSurvey, jqHiddenMarkup) {
    this.questions = [];
    this.jqSurvey = jqSurvey;
    this.jqHiddenMarkup = jqHiddenMarkup;
};

Survey.prototype.addQuestion = function (jqQ, index) {
    var question = new Question(jqQ);
    this.questions.splice(index, 0, question);
};

Survey.prototype.removeQuestion = function () {

};

Survey.prototype.moveQuestion = function (direction) {

};

Survey.prototype.getControl = function () {

};
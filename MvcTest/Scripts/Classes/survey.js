var Survey = function (jqSurvey, jqHiddenMarkup) {
    this.questions = [];
    this.jqSurvey = jqSurvey;
    this.jqHiddenMarkup = jqHiddenMarkup;
};

Survey.prototype.addQuestion = function (qType, index) {
    var Survey = this;

    $.get(qType, function (data) {
        questionJQ = $(data);

        var question = new Question(questionJQ, qType);
        if (index === 0) {
            Survey.jqSurvey.prepend(questionJQ);
        }
        else {
            Survey.questions[index - 1].jqQuestion.after(questionJQ);
        }

        Survey.questions.splice(index, 0, question);
        Survey.questions[index].jqQuestion.show("slow");
        Survey.updateQuestionPositions();

        console.log(Survey);
    });
};

Survey.prototype.updateQuestionPositions = function () {
    var length = this.questions.length, question = null;
    for (var i = 0; i < length; i++) {
        question = this.questions[i];

        question.setPosition(i + 1);
    }
};

Survey.prototype.removeQuestion = function (index) {
    this.questions[index].remove();
    this.questions.splice(index, 1);
    this.updateQuestionPositions();

    console.log(this);
};

Survey.prototype.moveQuestion = function (from, to) {
    if (from < 0 || to < 0 || from > this.questions.length - 1 || to > this.questions.length - 1)
        return;

    this.moveQuestionUpOrDown(from, to);
};

Survey.prototype.moveQuestionUp = function (index) {
    if (index == 0)
        return;

    this.moveQuestionUpOrDown(index, index - 1);
};

Survey.prototype.moveQuestionDown = function (index) {
    if (index == this.questions.length-1)
        return;

    this.moveQuestionUpOrDown(index, index + 1);
};

Survey.prototype.moveQuestionUpOrDown = function (from, to) {
    var Survey = this;
    var Questions = this.questions;
    var movingQuestion = this.questions[from].jqQuestion;
    movingQuestion.hide(400, function () {
        var q = null;
        if (to < from) {
            q = movingQuestion.insertBefore(Questions[to].jqQuestion);
        } else if (to > from) {
            q = movingQuestion.insertAfter(Questions[to].jqQuestion);
        }

        q.show(400, function () {
            var tmp = Questions[from]
            Questions[from] = Questions[to];
            Questions[to] = tmp;

            Questions[from].setPosition(from + 1);
            Questions[to].setPosition(to + 1);
        });
    });
}

Survey.prototype.addOption = function (qIndex, optionType) {
    var jqOption = $("#hidden-markup > ." + optionType).clone();
    var option = new Option(jqOption, optionType);
    this.questions[qIndex].addOption(option);
};

Survey.prototype.questionNum = function () {
    return this.questions.length;
};

Survey.prototype.getJSON = function () {
    return JSON.stringify(this.questions);
};
var Question = function (jqQuestion, type) {
    this.jqQuestion = jqQuestion;
    this.responses = [];
    this.jqResponseSection = jqQuestion.find(".response-container");
    this.type = type;
};

Question.prototype.addResponse = function (response) {
    this.responses.push(response);
    this.jqResponseSection.append(response.jqResponse);
};

Question.prototype.removeResponse = function (index) {
    this.responses[index].remove();
    this.responses.splice(index, 1);
}

Question.prototype.remove = function () {
    this.jqQuestion.remove();
};
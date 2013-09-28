/// <reference path="/Scripts/backbone.js" />

var Survey = Backbone.Collection.extend({
    model: function (attrs, options) {
        switch (attrs.type) {
            case "SingleResponse": new SingleResponse(attrs, options);
            case "MultiResponse": new MultiResponse(attrs, options);
        }
    }
});

//var Survey = function (jqSurvey, jqHiddenMarkup) {
//    this.questions = [];
//    this.jqSurvey = jqSurvey;
//    this.jqHiddenMarkup = jqHiddenMarkup;
//};

//Survey.prototype.addQuestion = function (qType, index) {
//    var Survey = this;

//    $.get(qType, function (data) {
//        questionJQ = $(data);

//        var question = new Question(questionJQ, qType);
//        if (index === 0) {
//            Survey.jqSurvey.prepend(questionJQ);
//        }
//        else {
//            Survey.questions[index-1].jqQuestion.after(questionJQ);
//        }

//        Survey.questions.splice(index, 0, question);
//        console.log(Survey);
//    });
//};

//Survey.prototype.removeQuestion = function (index) {
//    this.questions[index].remove();
//    this.questions.splice(index, 1);
//    console.log(this);
//};

//Survey.prototype.moveQuestion = function (direction) {

//};

//Survey.prototype.addResponse = function (qIndex, responseType) {
//    var jqResponse = $("#hidden-markup > ." + responseType).clone();
//    var response = new Response(jqResponse, responseType);
//    this.questions[qIndex].addResponse(response);
//};

//Survey.prototype.questionNum = function () {
//    return this.questions.length;
//};
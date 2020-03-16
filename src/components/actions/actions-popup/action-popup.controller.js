"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _initialState_1 = require("~initialState");
var _consts_1 = require("~consts");
var ActionPopupController = (function () {
    function ActionPopupController() {
        this.title = '';
        this.participants = '';
        this.validationError = '';
    }
    ActionPopupController.prototype.setParticipants = function (participants) {
        var hasParticipants = participants.length > 0;
        if (!hasParticipants) {
            return;
        }
        return participants.split(', ');
    };
    ActionPopupController.prototype.createEvent = function (event, participants) {
        var isMeeting = event.type === _initialState_1.types.meeting;
        if (isMeeting) {
            event.participants = this.setParticipants(participants);
        }
        return event;
    };
    ActionPopupController.prototype.isTitleValid = function (title) {
        return _consts_1.titleRegexp.test(title);
    };
    ActionPopupController.prototype.isParticipantsValid = function (participants) {
        return _consts_1.participantsRegexp.test(participants);
    };
    ActionPopupController.prototype.getValidationResult = function (event, isEventTypeMeeting, participants) {
        var validationError = '';
        var isInValid = false;
        var isTitleValid = this.isTitleValid(event.title);
        var isParticipantsValid = this.isParticipantsValid(participants);
        if (!isTitleValid) {
            validationError = 'Title is invalid! ';
        }
        if (isEventTypeMeeting && !isParticipantsValid) {
            validationError += 'Participants is invalid!';
        }
        if (validationError.length > 0) {
            isInValid = true;
        }
        return { validationError: validationError, isInValid: isInValid };
    };
    ActionPopupController.prototype.setValidationError = function (error) {
        this.validationError = error;
    };
    ActionPopupController.prototype.addEvent = function () {
        var event = this.createEvent({
            type: this.actionType,
            title: this.title,
        }, this.participants);
        var isEventTypeMeeting = event.type === _initialState_1.types.meeting;
        var _a = this.getValidationResult(event, isEventTypeMeeting, this.participants), validationError = _a.validationError, isInValid = _a.isInValid;
        if (isInValid) {
            this.setValidationError(validationError);
            return;
        }
        this.saveCallback({ event: event });
    };
    return ActionPopupController;
}());
exports.ActionPopupController = ActionPopupController;
//# sourceMappingURL=action-popup.controller.js.map
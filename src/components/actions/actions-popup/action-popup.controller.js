"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _initialState_1 = require("~initialState");
var _consts_1 = require("~consts");
var ActionPopupController = (function () {
    function ActionPopupController() {
        this.title = '';
        this.participants = '';
        this.validationError = '';
        this.isTitleValid = function (title) {
            return _consts_1.titleRegexp.test(title);
        };
        this.isParticipantsValid = function (participants) {
            return _consts_1.participantsRegexp.test(participants);
        };
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
    ActionPopupController.prototype.getValidationResult = function (event, isEventTypeMeeting, participants) {
        var initialValidationState = { validationError: '', isInValid: false };
        var validators = [this.isTitleValid.bind(this, event.title), this.isParticipantsValid.bind(this, participants)];
        var errorTitleValidation = { validationError: 'Title is invalid!', isInValid: true };
        var errorParticipantsValidation = {
            validationError: 'Participants is invalid!',
            isInValid: true,
        };
        var errorTitleAndParticipantsValidation = {
            validationError: 'Title is invalid! Participants is invalid!',
            isInValid: true,
        };
        var validationResult = validators.reduce(function (reduceResult, validator, index) {
            if (index === 1) {
                return isEventTypeMeeting ? validator() ? reduceResult : reduceResult.isInValid ? errorTitleAndParticipantsValidation : errorParticipantsValidation : reduceResult;
            }
            return validator() ? reduceResult : errorTitleValidation;
        }, initialValidationState);
        return validationResult;
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
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types;
(function (types) {
    types["appointment"] = "appointment";
    types["meeting"] = "meeting";
})(types = exports.types || (exports.types = {}));
exports.state = {
    user: {
        name: 'User',
        isSelected: true,
    },
    actions: [
        {
            type: types.meeting,
            title: 'Meeting',
            participants: [],
        },
        {
            type: types.appointment,
            title: 'Appointment',
        },
    ],
    events: [],
};
//# sourceMappingURL=initialState.js.map
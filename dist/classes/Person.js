"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person() {
        this._myName = 'Alexandre';
    }
    Person.prototype.info = function () {
        return "Meu nome \u00E9 ".concat(this._myName);
    };
    Object.defineProperty(Person.prototype, "MyName", {
        get: function () {
            return this._myName;
        },
        set: function (myName) {
            this._myName = myName;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
exports.Person = Person;

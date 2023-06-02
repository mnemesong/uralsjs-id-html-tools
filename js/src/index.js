"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullDefaultIdTool = exports.StringPrefixIdTool = exports.NumPrefixIdTool = void 0;
var NumPrefixIdTool = /** @class */ (function () {
    function NumPrefixIdTool(prefix) {
        this.prefix = prefix;
        this.prefixLength = prefix.length;
    }
    NumPrefixIdTool.prototype.renderId = function (id) {
        return this.prefix + id;
    };
    NumPrefixIdTool.prototype.parseId = function (htmlId) {
        return parseInt(htmlId.substring(this.prefixLength));
    };
    return NumPrefixIdTool;
}());
exports.NumPrefixIdTool = NumPrefixIdTool;
var StringPrefixIdTool = /** @class */ (function () {
    function StringPrefixIdTool(prefix) {
        this.prefix = prefix;
        this.prefixLength = prefix.length;
    }
    StringPrefixIdTool.prototype.renderId = function (id) {
        return this.prefix + id;
    };
    StringPrefixIdTool.prototype.parseId = function (htmlId) {
        return htmlId.substring(this.prefixLength);
    };
    return StringPrefixIdTool;
}());
exports.StringPrefixIdTool = StringPrefixIdTool;
var NullDefaultIdTool = /** @class */ (function () {
    function NullDefaultIdTool(def) {
        this.def = def;
    }
    NullDefaultIdTool.prototype.renderId = function (id) {
        return this.def;
    };
    NullDefaultIdTool.prototype.parseId = function (htmlId) {
        return null;
    };
    return NullDefaultIdTool;
}());
exports.NullDefaultIdTool = NullDefaultIdTool;

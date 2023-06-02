"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var src_1 = require("../src");
var mocha_1 = require("mocha");
var assert = __importStar(require("assert"));
(0, mocha_1.describe)("test int-prefix-id-tool", function () {
    (0, mocha_1.it)("test1", function () {
        var tool = new src_1.NumPrefixIdTool('pre_');
        assert.equal('pre_11', tool.renderId(11));
        assert.equal(11, tool.parseId('pre_11'));
    });
});
(0, mocha_1.describe)("test string-prefix-id-tool", function () {
    (0, mocha_1.it)("test1", function () {
        var tool = new src_1.StringPrefixIdTool('some-');
        assert.equal('some-bug', tool.renderId('bug'));
        assert.equal('bug', tool.parseId('some-bug'));
    });
});
(0, mocha_1.describe)("test null-default-id-tool", function () {
    (0, mocha_1.it)("test1", function () {
        var tool = new src_1.NullDefaultIdTool('itsId');
        assert.equal('itsId', tool.renderId(null));
        assert.equal(null, tool.parseId('itsId'));
    });
});

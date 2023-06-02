import { 
    NumPrefixIdTool, 
    StringPrefixIdTool, 
    NullDefaultIdTool 
} from "../src";
import { it, describe } from "mocha";
import * as assert from "assert";

describe("test int-prefix-id-tool", () => {
    it("test1", () => {
        const tool = new NumPrefixIdTool('pre_');
        assert.equal('pre_11', tool.renderId(11));
        assert.equal(11, tool.parseId('pre_11'));
    });
});

describe("test string-prefix-id-tool", () => {
    it("test1", () => {
        const tool = new StringPrefixIdTool('some-');
        assert.equal('some-bug', tool.renderId('bug'));
        assert.equal('bug', tool.parseId('some-bug'));
    });
});

describe("test null-default-id-tool", () => {
    it("test1", () => {
        const tool = new NullDefaultIdTool('itsId');
        assert.equal('itsId', tool.renderId(null));
        assert.equal(null, tool.parseId('itsId'));
    });
});
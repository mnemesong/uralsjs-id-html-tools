export type IdTool<Id> = {
    renderId: (id: Id) => string;
    parseId: (htmlId: string) => Id;
};
export declare class NumPrefixIdTool implements IdTool<number> {
    private prefix;
    private prefixLength;
    constructor(prefix: string);
    renderId(id: number): string;
    parseId(htmlId: string): number;
}
export declare class StringPrefixIdTool implements IdTool<string> {
    private prefix;
    private prefixLength;
    constructor(prefix: string);
    renderId(id: string): string;
    parseId(htmlId: string): string;
}
export declare class NullDefaultIdTool implements IdTool<null> {
    private def;
    constructor(def: string);
    renderId(id: null): string;
    parseId(htmlId: string): any;
}

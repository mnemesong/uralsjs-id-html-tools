export type IdTool<Id> = {
    renderId: (id: Id) => string,
    parseId: (htmlId: string) => Id
}

export class NumPrefixIdTool implements IdTool<number> {
    private prefix: string;
    private prefixLength: number;

    public constructor(prefix: string) {
        this.prefix = prefix;
        this.prefixLength = prefix.length;
    }

    public renderId(id: number) {
        return this.prefix + id;
    }

    public parseId(htmlId: string) {
        return parseInt(htmlId.substring(this.prefixLength));
    }
}

export class StringPrefixIdTool implements IdTool<string> {
    private prefix: string;
    private prefixLength: number;

    public constructor(prefix: string) {
        this.prefix = prefix;
        this.prefixLength = prefix.length;
    }

    public renderId(id: string) {
        return this.prefix + id;
    }

    public parseId(htmlId: string) {
        return htmlId.substring(this.prefixLength);
    }
}

export class NullDefaultIdTool implements IdTool<null> {
    private def: string;

    public constructor(def: string) {
        this.def = def;
    }

    public renderId(id: null) {
        return this.def;
    }

    public parseId(htmlId: string) {
        return null;
    }
}
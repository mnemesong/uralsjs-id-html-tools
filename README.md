# uralsjs-id-html-tools
Tools for rendering and parsing ids of html elements

## API
```typescript
/**
 * Abstract type of class, which will render and parse id some type by some rules
 */
export type IdTool<Id> = {
    renderId: (id: Id) => string,
    parseId: (htmlId: string) => Id
}

/**
 * Tool which biective render numeric id by stringifying it and prepends prefix
 */
export class NumPrefixIdTool implements IdTool<number> {...}

/**
 * Tool which biective render stringc id by prepends prefix
 */
export class StringPrefixIdTool implements IdTool<string> {...}

/**
 * Tool which biective render default value instead of null-id
 */
export class NullDefaultIdTool implements IdTool<null> {...}
```
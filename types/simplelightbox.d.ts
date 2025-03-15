declare module "simplelightbox" {
  export default class SimpleLightbox {
    constructor(selector: string, options?: object);
    refresh(): void;
    destroy(): void;
    next(): void;
    prev(): void;
    open(): void;
    close(): void;
  }
}

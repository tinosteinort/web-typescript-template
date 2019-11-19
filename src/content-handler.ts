export class ContentHandler {

    private element: Element;

    constructor() {
        this.element = document.getElementsByClassName('content')[0];
    }

    public setContent(innerHtml: string): void {
        this.element.innerHTML = innerHtml;
    }
}
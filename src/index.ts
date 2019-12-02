import { ContentHandler } from "./content-handler";

const contentHandler = new ContentHandler();

function getTimeString(): string {
    const date = new Date();
    return "# Time: " + date.toLocaleTimeString() + " #";
}

function updateTime(): void {
    contentHandler.setContent(getTimeString());
}

setInterval(() => updateTime(), 1000);

updateTime();

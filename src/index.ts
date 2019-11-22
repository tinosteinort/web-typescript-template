
import { ContentHandler } from "./content-handler";


const contentHandler = new ContentHandler();
setInterval(() => updateTime(), 1000);

updateTime();

function updateTime() {
    contentHandler.setContent(getTimeString());
}

function getTimeString() {
    const date = new Date();
    return "# Time: " + date.toLocaleTimeString() + " #";
}

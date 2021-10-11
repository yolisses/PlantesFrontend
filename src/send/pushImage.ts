import axios from "axios";
import { brokenSendLink } from "./deprecated/brokenSendLink";

export async function pushImage(image: Image) {
    const file = { uri: image.localUri };
    const headers = { 'Content-Type': 'multipart/form-data', }
    const res = await axios.put(image.sendLink, file, { headers });
    if (res.status === 403) {
        throw brokenSendLink;
    } else if (res.status === 200) {
        image.sent = true;
    } else {
        throw 'Unknown error: ' + JSON.stringify(res);
    }
}
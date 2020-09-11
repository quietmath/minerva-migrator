import * as fs from 'fs-extra';
import { config } from 'dotenv';
import * as request from 'request-promise';

export async function downloadImage(url: string): Promise<boolean> {
    config();
    const opts = {
        url: url,
        encoding: null
    };
    let fileName;
    const fileParts = (url != null) ? url.split('/') : null;
    if(fileParts != null && fileParts.length > 0) {
        fileName = fileParts.pop();
    }
    if(fileName !== undefined) {
        try {
            const result = await request.get(opts);
            fs.writeFileSync(`${ process.env.DOWNLOAD_PATH }/${ fileName }`, result);
            return true;
        }
        catch(e) {
            console.error(e);
            return false;
        }
    }
    return false;
}

import * as fs from 'fs-extra';
import * as request from 'request-promise';
import { DOWNLOAD_DIR } from './schema';

export async function downloadImage(url: string): Promise<boolean> {
    const opts = {
        url: url,
        encoding: null
    };
    let fileName: string;
    const fileParts = (url != null) ? url.split('/') : null;
    if(fileParts != null && fileParts.length > 0) {
        fileName = fileParts.pop();
    }
    if(fileName !== undefined) {
        try {
            const result = await request.get(opts);
            fs.writeFileSync(`${ DOWNLOAD_DIR }/${ fileName }`, result);
            return true;
        }
        catch(e) {
            console.error(e);
            return false;
        }
    }
    return false;
}

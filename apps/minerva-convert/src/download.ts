import * as fs from 'fs-extra';
import * as request from 'request-promise';
import { DOWNLOAD_DIR } from './schema';

export async function downloadImage(url: string): Promise<string> {
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
            const filePath = `${ DOWNLOAD_DIR }/${ fileName }`;
            fs.writeFileSync(filePath, result);
            return filePath;
        }
        catch(e) {
            console.error(`Error downloading image file ${ e }`);
            return null;
        }
    }
    return null;
}

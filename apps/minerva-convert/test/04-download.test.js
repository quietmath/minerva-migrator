/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const assert = require('assert');
const rewire = require('rewire');
const download = rewire('../dist/download');

const request = {
    get: async function() {
        return Promise.resolve('This is some data...');
    }
};

const fs = {
    writeFileSync: function(path, result) {
        console.info(path);
        console.log(result);
    }
};

download.__set__('request', request);
download.__set__('fs', fs);

describe('Unit tests for downloading files.', function() {
    it('should mock download a file', async () => {
        const result = await download.downloadImage('https://codepunk.io/images/test.jpg');
        assert.notEqual(result, null);
    });
});

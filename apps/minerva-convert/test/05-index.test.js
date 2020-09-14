/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const assert = require('assert');
const rewire = require('rewire');
const main = rewire('../dist/index');

const createDirectory = async () => {
    return new Promise((resolve) => resolve(true));
};

const publishFile = () => {
    return new Promise((resolve) => {
        resolve({
            Title: 'Markdown Document Title'
        });
    });
};

main.__set__('createDirectory', createDirectory);
main.__set__('publishFile', publishFile);

describe('Unit tests for the main entry point of the application,', function() {
    it('should run through the publish process', () => {
        assert.doesNotThrow(async () => {
            await main.publish();
        }, 'Failed to run through publish process.');
    });
});

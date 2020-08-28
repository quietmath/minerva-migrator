/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const assert = require('assert');
const { checkMarkdownPostImage, retrieveMarkdownPosts } = require('../dist/publish');

describe('Unit tests for retrieve posts', function() {
    it('should retrieve posts', async () => {
        const posts = await retrieveMarkdownPosts();
        assert.notEqual(posts, null);
        assert.equal(posts.length > 0, true);
    });
});

describe('Unit tests for checking images in markdown posts.', function() {
    it('should loop images', async () => {
        try {
            await checkMarkdownPostImage();
            assert.equal(true, true);
        }
        catch(e) {
            assert.equal(true, false);
        }
    });
});

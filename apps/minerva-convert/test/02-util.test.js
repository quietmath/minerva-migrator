/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const assert = require('assert');
const { getPosts } = require('../dist/db');
const { shapePosts, isString, isAbsoluteURL, makeAbsoluteURL } = require('../dist/util');

const pNo = {
    image: 'https://cdn.october.codes/images/1.png'
};

const pYes = {
    image: '/content/images/2.png'
};

const pNull = {
    image: null
};

describe('Unit tests for shaping posts from Ghost into Minerva format.', function() {
    it('should shape posts', async () => {
        const posts = await getPosts();
        const result = shapePosts(posts);
        assert.notEqual(result, null);
    });
});

describe('Unit tests for check properties on the post objects.', function() {
    it('should check if image is a string', async () => {
        const posts = await getPosts();
        const result = isString(posts[0].image);
        assert.equal(result, true);
    });
    it('should be a URL to modify',() => {
        const result = isAbsoluteURL(pYes.image);
        assert.equal(result, false);
    });
    it('should not be a URL to modify',() => {
        const result = isAbsoluteURL(pNo.image);
        assert.equal(result, true);
    });
    it('should not be a URL to modify',() => {
        const result = isAbsoluteURL(pNull.image);
        assert.equal(result, false);
    });
    it('should modify the URL',() => {
        const result = makeAbsoluteURL(pYes.image);
        assert.equal(result, `https://codepunk.io${ pYes.image }`);
    });
    it('should return null for the URL',() => {
        const result = makeAbsoluteURL(pNull.image);
        assert.equal(result, null);
    });
});

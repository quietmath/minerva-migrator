/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const assert = require('assert');
const { getPosts } = require('../dist/db');
const { shapePosts, isString } = require('../dist/util');

describe('Unit tests for shaping posts from Ghost into Minerva format.', function() {
    it('should shape posts', async () => {
        const posts = await getPosts();
        const result = shapePosts(posts);
        assert.notEqual(result, null);
    });
    it('should check if image is a string', async () => {
        const posts = await getPosts();
        const result = isString(posts[0]);
        assert.equal(result, true);
    });
});

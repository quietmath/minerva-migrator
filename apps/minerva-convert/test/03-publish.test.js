/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const assert = require('assert');
const matter = require('gray-matter');
const { retrieveMarkdownPosts, markdownConversion } = require('../dist/publish');

describe('Unit tests for retrieve posts', function() {
    it('should retrieve posts', async () => {
        const posts = await retrieveMarkdownPosts();
        assert.notEqual(posts, null);
        assert.equal(posts.length > 0, true);
    });
});

describe('Unit tests for converting Ghost blog posts to standard markdown posts with gray matter.', function() {
    it('should output markdown text with gray matter', async () => {
        const posts = await retrieveMarkdownPosts();
        const md = markdownConversion(posts[0]);
        assert.notEqual(md, null);
    });
    it('should output markdown that can be parsed by gray matter', async () => {
        const posts = await retrieveMarkdownPosts();
        const md = markdownConversion(posts[0]);
        const result = matter(md);
        assert.notEqual(result.data, null);
        assert.notEqual(result.data.title, null);
        assert.notEqual(result.data.description, null);
        assert.notEqual(result.data.author, null);
        assert.notEqual(result.content, null);
    });
});

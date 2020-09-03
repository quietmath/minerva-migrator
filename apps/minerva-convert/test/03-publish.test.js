/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const assert = require('assert');
const rewire = require('rewire');
const matter = require('gray-matter');
const pub = rewire('../dist/publish');

const fs = {
    ensureDir: () => {
        return new Promise((resolve) => resolve(true));
    },
    writeFile: () => {
        return new Promise((resolve) => resolve(true));
    }
};

pub.__set__('fs', fs);

describe('Unit tests for retrieve posts', function() {
    it('should retrieve posts', async () => {
        const posts = await pub.retrieveMarkdownPosts();
        assert.notEqual(posts, null);
        assert.equal(posts.length > 0, true);
    });
});

describe('Unit tests for converting Ghost blog posts to standard markdown posts with gray matter.', function() {
    it('should output markdown text with gray matter', async () => {
        const posts = await pub.retrieveMarkdownPosts();
        const md = pub.markdownConversion(posts[0]);
        assert.notEqual(md, null);
    });
    it('should output markdown that can be parsed by gray matter', async () => {
        const posts = await pub.retrieveMarkdownPosts();
        const md = pub.markdownConversion(posts[0]);
        const result = matter(md);
        assert.notEqual(result.data, null);
        assert.notEqual(result.data.title, null);
        assert.notEqual(result.data.description, null);
        assert.notEqual(result.data.author, null);
        assert.notEqual(result.content, null);
    });
});

describe('Unit tests for publishing functions that require mocks,', function() {
    it('should ensure the directory is created', async () => {
        const result = await pub.createDir();
        assert.equal(result, true);
    });
    it('should write the file', async () => {
        const result = await pub.publishMarkdownFile('this is a title', 'this is the content');
        assert.equal(result, true);
    });
});

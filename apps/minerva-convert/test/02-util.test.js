/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const assert = require('assert');
const { getPosts, getAuthors } = require('../dist/db');
const { shapePosts, isString, isAbsoluteURL, makeAbsoluteURL, stringifyTags, replaceColon, getAuthor } = require('../dist/util');

const pNo = {
    image: 'https://cdn.october.codes/images/1.png'
};

const pYes = {
    image: '/content/images/2.png'
};

const pNull = {
    image: null
};

const postWithAuthor = {
    authorId: 1
};

describe('Unit tests for shaping posts from Ghost into Minerva format.', function() {
    it('should shape posts', async () => {
        const posts = await getPosts();
        const result = shapePosts(posts);
        assert.notEqual(result, null);
    });
    it('should get author', async () => {
        const authors = await getAuthors();
        const author = getAuthor(postWithAuthor.authorId, authors);
        assert.notEqual(author, null);
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
    it('should stringify tags', async () => {
        const posts = await getPosts();
        const result = stringifyTags(posts[0].postsTags);
        assert.notEqual(result, null);
        assert.equal(typeof(result), 'string');
    });
    it('should return an empty string', () => {
        const result = stringifyTags(undefined);
        assert.equal(result, '');
    });
    it('should return a string without a colon', () => {
        const result = replaceColon('This title has a colon: See?');
        assert.equal(result.indexOf(':') === -1, true);
    });
});

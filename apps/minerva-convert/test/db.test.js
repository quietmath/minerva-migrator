/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const assert = require('assert');
const { createConnection, getConnection } = require('typeorm');
const { Users } = require('../dist/entities/Users');
const { Posts } = require('../dist/entities/Posts');
const { Tags } = require('../dist/entities/Tags');
const { PostsTags } = require('../dist/entities/PostsTags');

describe('Unit tests for interacting with the SQLite database through TypeORM.', function() {
    it('should open a SQLite connection', async () => {
        await createConnection().then(async (result) => {
            assert.notEqual(result, null);
        });
    });
    it('should read from the users table', async () => {
        const users = await getConnection().manager.findAndCount(Users);
        assert.notEqual(users, null);
        assert.equal(true, users.length > 0);
    });
    it('should read from the posts table', async () => {
        const posts = await getConnection().manager.findAndCount(Posts);
        assert.notEqual(posts, null);
        assert.equal(true, posts.length > 0);
    });
    it('should read from the tags table', async () => {
        const tags = await getConnection().manager.findAndCount(Tags);
        assert.notEqual(tags, null);
        assert.equal(true, tags.length > 0);
    });
    it('should read from the posts tags table', async () => {
        const x = await getConnection().manager.findAndCount(PostsTags);
        assert.notEqual(x, null);
        assert.equal(true, x.length > 0);
    });
});

/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const assert = require('assert');
const { createConnection, getConnection } = require('typeorm');
const { Users } = require('../dist/entities/Users');
const { Posts } = require('../dist/entities/Posts');
const { Tags } = require('../dist/entities/Tags');
const { PostsTags } = require('../dist/entities/PostsTags');
const { getPosts, getAuthors } = require('../dist/db');

describe('Unit tests for interacting with the SQLite database through TypeORM.', function() {
    it('should open a SQLite connection', async () => {
        const conn = await createConnection();
        assert.notEqual(conn, null);
    });
    it('should read from the users table', async () => {
        const [users, count] = await getConnection().manager.findAndCount(Users);
        assert.notEqual(users, null);
        assert.equal(true, count > 0);
    });
    it('should read from the posts table', async () => {
        const [posts, count] = await getConnection().manager.findAndCount(Posts);
        assert.notEqual(posts, null);
        assert.equal(true, count > 0);
    });
    it('should read from the tags table', async () => {
        const [tags, count] = await getConnection().manager.findAndCount(Tags);
        assert.notEqual(tags, null);
        assert.equal(true, count > 0);
    });
    it('should read from the posts tags table', async () => {
        const [x, count] = await getConnection().manager.findAndCount(PostsTags);
        assert.notEqual(x, null);
        assert.equal(true, count > 0);
    });
    it('should read a single record from the users table', async () => {
        const user = await getConnection().manager.findOne(Users);
        assert.notEqual(user, null);
    });
    it('should read a single record from the posts table', async () => {
        const post = await getConnection().manager.findOne(Posts);
        assert.notEqual(post, null);
    });
    it('should read a single record from the tags table', async () => {
        const tag = await getConnection().manager.findOne(Tags);
        assert.notEqual(tag, null);
    });
    it('should read a single record from the posts tags table', async () => {
        const x = await getConnection().manager.findOne(PostsTags);
        assert.notEqual(x, null);
    });
    it('should read from the posts table with associated records', async () => {
        const [result, count] = await getConnection().manager.findAndCount(Posts, {
            relations: ['postsTags']
        });
        assert.notEqual(result, null);
        assert.equal(true, count > 0);
    });
    it('should read a single record from the posts table with associated records', async () => {
        const result = await getConnection().manager.findOne(Posts, {
            relations: ['postsTags']
        });
        assert.notEqual(result, null);
    });
});

describe('Unit tests for interacting with the SQLite database through the database functions.', function() {
    it('should get posts', async () => {
        const posts = await getPosts();
        assert.notEqual(posts, null);
    });
    it('should get users', async () => {
        const users = await getAuthors();
        assert.notEqual(users, null);
    });
});

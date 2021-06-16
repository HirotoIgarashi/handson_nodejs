'use strict';

const chai = require('chai');
const sinon = require('sinon');
const fileSystem = require('../../file-system');

// ストレージとしてfile-systemの実装が使われるようにする
process.env.npm_lifecycle_event = 'file-system';
const app = require('../../app');

// Sinon.JSのアサーションAPIをchaiのアサーションAPIを介して利用できるようにする
const assert = chai.assert;
sinon.assert.expose(assert, { prefix: '' });

// chai HTTPプラグインの利用
chai.use(require('chai-http'));

// 毎回のテスト実行後にSinon.JSによる副作用を元に戻す
afterEach(() => sinon.restore());

// GET /api/todosでcompletedが指定されていない場合のテスト(Mocha)
describe('app', () => {
  describe('GET /api/todos', () => {
    describe('completedが指定されていない場合', () => {
      it('fetchAll()で取得したToDoの配列を返す', async () => {
        const todos = [
          { id: 'a', title: 'ネーム', completed: false },
          { id: 'b', title: '下書き', completed: true }
        ];
        // スタブの生成
        sinon.stub(fileSystem, 'fetchAll').resolves(todos);
        // リクエストの送信
        const res = await chai.request(app).get('/api/todos');
        // レスポンスのアサーション
        assert.strictEqual(res.status, 200);
        assert.deepEqual(res.body, todos);
      });
      it('fetchAll()が失敗したらエラーを返す', async () => {
        // スタブの生成
        sinon.stub(fileSystem, 'fetchAll')
          .reject(new Error('fetchAll()失敗'));
        // リクエストの送信
        const res = await chai.request(app).get('/api/todos');
        // レスポンスのアサーション
        assert.strictEqual(res.status, 500);
        assert.deepEqual(res.body, { error: 'fetchAll()失敗'});
      });
    });
    // GET /api/todosでcompletedが指定されている場合のテスト(Mocha)
    describe('completedが指定されている場合', () => {
      it(
        'completedを引数にfetchByCompleted()を実行し取得したToDoの配列を返す',
        async () => {

        });
      it('fetchByCompleted()が失敗したらエラーを返す', async () => {});
    });
  });
  // POST /api/todosのテスト(Mocha)
  describe('POST /api/todos', () => {
    it('パラメータで指定したタイトルを引数にcreate()を実行し、結果を返す', async () => {});
    it('パラメータにタイトルが指定されていない場合、400エラーを返す', async () => {});
    it('create()が失敗したらエラーを返す', async () => {});
  });
});

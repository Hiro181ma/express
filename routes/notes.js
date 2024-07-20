var express = require('express');
var router = express.Router();
const cors = require('cors'); // corsミドルウェアを追加
require('dotenv').config();

// 接続情報を設定
<<<<<<< HEAD
const { MongoClient } = require("mongodb");
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

// corsミドルウェアを使用
router.use(cors());

router.get('/', async (req, res) => {
=======
const {MongoClient} = require("mongodb");
const uri= "***";
const client= new MongoClient(uri);
router.get('/', async(req, res) =>{
>>>>>>> ea982c259fe22f4caf1f33127b1453610f89ffbc
// データベース、コレクションを指定
const database = client.db('notes');
const notes = database.collection('notes');

// idが１のドキュメントを取得
const query = { id: 2 };
const note = await notes.findOne(query);

res.json(note);
})

<<<<<<< HEAD
module.exports = router;
=======
module.exports= router;
>>>>>>> ea982c259fe22f4caf1f33127b1453610f89ffbc

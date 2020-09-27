import express from 'express';

const app = express();
app.get('/', (req, res) => { res.send('Hello World!!'); });

app.get('/api/v1/list', (req, res) => {
  // クライアントに送るJSONデータ
  const todoList = [
      { title: 'JavaScriptを勉強する', done: true },
      { title: 'Node.jsを勉強する', done: false },
      { title: 'Web APIを作る', done: false }
  ];
  // JSONを送信する
  res.json(todoList);
});

app.listen(process.env.PORT || 8080, () => {
  console.log('Listening on port 8080');
});

// ユニットテストのために app をエクスポートする
export default app;
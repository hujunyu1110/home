const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.post('/submit', (req, res) => {
    // console.log(req);
    // console.log(req.body);
    const data = req.body;  // 获取请求体中的数据
    //   res.send(`Received data: ${JSON.stringify(data)}`);
    res.send(data);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
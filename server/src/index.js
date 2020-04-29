const express = require('express');

const port = 8000;

// ვქმნით აპლიკაციას
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});



app.listen(port, () => {
    console.log(`სერვერი ჩართულია http://localhost:${port}`)
})
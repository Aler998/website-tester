const express = require('express')
const pa11y = require('pa11y');
const PORT = process.env.PORT || 5000
const cors = require('cors')

const app = express();
app.use(cors())

app.listen(PORT, () => console.log(`Server started at port ${PORT}`))

app.get('/api/test', async (req, res) => {
    if (!req.query.url) {
        res.status(404).json({error: 'url is required'})
    } else {
        const result = await pa11y(req.query.url)
        res.status(200).json(result)
    }
})

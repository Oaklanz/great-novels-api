const express = require('express')


const app = express()

app.get('/authors', getAllAuthors)


app.listen(1337, () => {
  console.log('Listening on port 1337...') // eslint-disable-line no-console 
})

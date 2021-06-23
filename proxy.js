const express = require('express')
const request = require('request')

const app = express()

const port = process.env.PORT || 4000


app.use('/', function (req, res) {
	  const { url } = req;
	  // replace this website url you want
	  const urls = `https://apk.tools${url}`
	  const html = request({url: urls, timeout: 2000},((err) => {
		if(err) {
		  res.status = 404;
		  res.end("TIMES OUT PROXY ERROR")
		  return;
		}
	  }));
	  req.pipe(html).pipe(res)
})

app.use('/favicon.ico', function (req, res) {
	res.sendFile('./assets/favicon.ico')
})
app.listen(port)

console.log(`app listening on  4000 port`);

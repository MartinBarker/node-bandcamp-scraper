const express = require('express');
const morgan = require("morgan");
const { createProxyMiddleware } = require('http-proxy-middleware');
const axios = require('axios');
const xpath = require("xpath-html");


// Create Express Server
const app = express();

// Configuration
const PORT = 8080;
const HOST = "localhost";

// bandcamp GET endpoint
app.get('/bandcamp', (req, res, next) => {
    let bandcampUrl = req.query.url;
    console.log('/bandcamp url=',bandcampUrl)

    axios.request({
        //responseType: 'arraybuffer',
        url: bandcampUrl,
        method: 'get',
      }).then(resp => {
        //get html string from response
        var htmlStr = resp.data
        //get html <script> tag contents
        var releaseInfo = htmlStr.substring(htmlStr.indexOf(`<script type="application/ld+json">`))
        releaseInfo = releaseInfo.substring(0, releaseInfo.indexOf(`</script>`))
        releaseInfo = releaseInfo.substring(releaseInfo.indexOf(`{`))
        //convert to json
        releaseInfoJson = JSON.parse(releaseInfo)
        //return data
        console.log('/bandcamp returning: ', releaseInfo)
        res.send(releaseInfo);
    }).catch(function(error) {  
        console.log('Request failed', error)  
    });

 });



// Start the Proxy
app.listen(PORT, HOST, () => {
    console.log(`Starting Proxy at ${HOST}:${PORT}`);
 });
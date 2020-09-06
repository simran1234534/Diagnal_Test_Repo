# TEST_DIAGNAL_SUBMISSION

You’re required to scrape an input URL and parse its metadata. If the page has OG parameters set exclusively, then you must return all the OG parameters. If they are not set, you must parse the webpage to get relevant details such as title, description, images etc. The script should work similar to the tool provided by Facebook: http://bit.ly/2QDhxRY

Details on OGP ( Open Graph Parameters ) can be found at: http://ogp.me/ 
Design Requirements Your application must be a RESTful service to which the URL to be fetched is given as a POST request. For example, 
POST application/json {"url:" "http://www.amazon.com/Apple-iPhone-16gb-Space-Unlocked/dp/B00NQGP42Y/" }Above request must return response similar to the following: 
{ 
"title": "Apple iPhone 6, 16gb, Space Gray, Unlocked", "description": "Built on 64-bit desktop-class architecture, the new A8 chip delivers more power.", "images": [ 
"http://amazon.com/sample_image1.jpg", "http: //amazon.com/sample_image2.jpg" ] }Implement caching if needed. 

## Installation Required

Use the package manager npm to install OPEN-GRAPH-SCRAPER.

```bash
npm i open-graph-scraper
```

## Setup
```bash
npm install 
```
```bash
npm start 
```

## Endpoint

http://localhost:4011/api/getdata
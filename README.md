# Node Bandcamp Parser

This is a node express proxy server which will accept a bandcamp url as input, and return the javascript json data of that Bandcamp release. Since there is no public Bandcamp API available at the moment. 

## Routes:
- /bandcamp
    - Accepts bandcamp url param `?url=https://ultramajic.bandcamp.com/album/the-ashtar-lavanda-mix`
    - Will return json map of bandcamp release page info
    - Example request: `curl localhost:8080/bandcamp?url=https://ultramajic.bandcamp.com/album/the-ashtar-lavanda-mix`

## How To Run Server
- Clone repo
- Run `npm i`
- Run `npm start` (default port is 8080)


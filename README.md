# beatenpath
AXDD Beaten Path


## Local Web Server

Without running a local webserver, your browser will likely throw an error "Cross origin requests are only supported for HTTP." To fix this you can run a local webserver.

### Node.js

1. Install http-server by typing npm install -g http-server
2. Change into your working directory, where yoursome.html lives
3. Start your http server by issuing http-server -c-1

This spins up a Node.js httpd which serves the files in your directory as static files accessible from http://localhost:8080

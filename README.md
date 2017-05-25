# BarebonesNode
Barebones Node Web App - May 24 2017

This app just gives you the most basic set up of a node web app!

Install instructions (linux):

  - install node
       - yum install node or apt-get install nodejs
  - place contents of this repo in /opt/someAppName/
  - run npm to get the version of express and pug that I used, you can see them defined as dependencies in package.json
       -this must be run in the same directory that your package.json file is located
       - npm install
  - launch the app
       - node server.js
  - you should see "Linstening on port: 3000"
  - in your browser go to localhost:3000 you should see the app body!

MIT license


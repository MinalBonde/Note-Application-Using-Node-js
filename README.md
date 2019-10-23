# Note-Application-Using-Node-js
Simple Note Application to add ,remove ,list and read notes added by user with the help of Node JS

## What does this app do?
- adds a new note along with title and it's body,throws error if duplicate note is being added-
- removes existing note with title and throws error if note is not found with given title
- lists all the title of the notes added in notes.json 
- read : display the body of the note based on the title 

## How does it work?
- based on the command given from command line parameter the functions like add , remove ,list and read note will be perfromed.
- npm modules used : yargs, chalk, fs  

## Use following commands to add , remove , list or read the notes
1. Add : node app.js add --title="<titleName>" --body="<body of the Note>"
2. Remove : node app.js remove --title="<titleName>"
3. List : node app.js list
4. Read : node app.js read --title="<titleName>"

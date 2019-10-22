const chalk = require('chalk')
const notes = require('./notes.js')
const yargs = require('yargs')

// add, remove, read,list notes

//Create add command
yargs.command({
    command :'add',
    describe :'Add a new note',
    builder :{
        title:{
            describe :'Note title',
            demandOption : true,
            type :'string'
        },
        body :{
            describe : 'Note Body',
            demandOption : true,
            type :'string'
        }
    },
   
    handler : function(argv){
        notes.addNotes(argv.title,argv.body)
    }
})

//Create remove command
yargs.command({
    command : 'remove',
    describe :'Removes a note',
    builder :{
        title : {
            describe :'Note title',
            demandOption : true,
            type :'string'
        }
    },
    handler : function(argv){
        notes.removeNnotes(argv.title)
    }
})

//Create read command
yargs.command({
    command : 'read',
    describe :'read a note',
    builder :{
        title : {
            describe : 'Note title',
            demandOption : true,
            type :'string'
        }
    },
    handler : function(argv){
        notes.readNotes(argv.title)
    }
})

//Create list command
yargs.command({
    command : 'list',
    describe :'List all notes', 
    handler : function(){
        notes.listNotes()
    }
})
yargs.parse()

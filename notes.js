const fs = require('fs')
const chalk = require('chalk')

const getNote =()=>{
    return 'Your note...'
}

debugger
const addNote = (title,body)=>{
    const notes1 = loadNotes()
    const duplicateNotes = notes1.find((note)=>note.title === title
    )
      
    debugger
    
    if(duplicateNotes.length === 0){
        notes1.push({
            title : title,
            body : body
        }) 
        saveNotes(notes1)
        console.log(chalk.green.bold('New note added'))
    }else{
        console.log(chalk.red.bold('Note title taken!'))
    }
    
}
const removeNote = (title)=>{
    const notes1 = loadNotes()
    const notesToKeep = notes1.filter((note)=>note.title !== title)
    
    if(notes1.length >notesToKeep.length){
        console.log(chalk.green.bold('Note Removed'))
        saveNotes(notesToKeep)
    }else{
        console.log(chalk.red.bold('No Note Found!'))
    }
}
const listNotes = ()=>{
    
    const notes = loadNotes()
    console.log(chalk.blue('Your Notes'))
    notes.forEach((element) => {
        console.log(chalk.yellow(element.title))
    })
}
const readNotes = (title)=>{
    const notes = loadNotes()
    const note = notes.find((note)=>note.title === title)
    if(note){
        console.log(chalk.blue(note.title))
        console.log(chalk.blue(note.body))
    }else{
        console.log(chalk.red('Note not found'))
    }
}
const saveNotes = (notes1)=>{
    const dataJSON = JSON.stringify(notes1)
    fs.writeFileSync('notes.json',dataJSON)
}
const loadNotes = ()=>{
    try{
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
    }catch(e){
        return []
    }
}

module.exports = {
    getNotes : getNote,
    addNotes : addNote,
    removeNnotes : removeNote,
    listNotes : listNotes,
    readNotes : readNotes
}

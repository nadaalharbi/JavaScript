const { get } = require("http")
const fs = require("fs")
const { default: chalk } = require("chalk")

getNote = () => "My note is..."

// ADD NOTE
const addNote = (title, body) => {
    // 1- Load all stored notes as an Array
    const notes = loadNotes()
    // 2- Check if the note is duplicated(already exist)
    //const duplicateNotes = notes.filter((note) => note.title === title)
    // More effecient, once it found it stop searching
    const duplicateNotes = notes.find((note) => note.title === title)

    // 3- if return true - then it's not duplicated, so push the new notes(title and body) to the array
    if (!duplicateNotes) {
        notes.push({
            title: title,
            body: body
        })
        console.log("Note is not duplicated.")
        //4- save the note by writing JSON obj to the file
        saveNote(notes)

    }// end of if
    else {
        console.log(chalk.red.inverse("Warning: Note is duplicated!!"))
    }

}

// REMOVE NOTE
const removeNote = (title) => {
    //1-
    const notes = loadNotes()
    //2- 
    const notesToKeep = notes.filter((note) => note.title !== title)

    if (notes.length > notesToKeep.length) {
        saveNote(notesToKeep)
        console.log(chalk.bold(title) + chalk.green.inverse(" is removed successfuly!"))
    } else {
        console.log(chalk.yellow.inverse(" No notes found to be removed!"))

    }
}

// LIST NOTES
const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.yellowBright.inverse("Your Notes: "))
    notes.forEach((note) => {
        console.log(note.title)

    })
}

// READ NOTE
const readNote = (title) => {
    const notes = loadNotes()
    const noteToRead = notes.find((note) => note.title === title)
    if (noteToRead) {
        console.log(chalk.green.bold(noteToRead.title))
        console.log(noteToRead.body)
    } else {
        console.log(chalk.red.bold("No note found to read"))
    }
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync("notes.json").toString()
       // const dataJSON = dataBuffer.toString()
        return JSON.parse(dataBuffer)
    } catch (error) {
        //if the file notes.json not found return an empty array
        return []
    }
}

const saveNote = (notes) => {
    // stringify() takes an array of string and convert it to JSON Obj to be stored back to json file
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync("notes.json", dataJSON)
    console.log("Note saved successfuly!")

}


module.exports = {
    getNote: getNote,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
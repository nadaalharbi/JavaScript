const fs = require("fs")
fs.writeFileSync("note.txt", "This is Nada")
fs.appendFileSync("note.txt", ", I'm excited to begin this journey!")

const notes = require("./note")
const validator = require("validator")

//-----------------------------

const yargs = require("yargs");
const { title } = require("process");
const { default: chalk } = require("chalk")
yargs.version("1.1.0")

console.log(chalk.bold("Commands Menu: \n")
+"add:     Add a new note \n" +
"remove:  Remove a note \n"+
"list:    List all note \n" +
"read:    Read a note")


yargs.command({
    command: 'add',
    describe: "Add a new note",
    builder: {
        title: {
            describe: "title of the note",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "body of the note",
            demandOption: true,
            type: "string"
        }
    },
    handler: (argv) => notes.addNote(argv.title, argv.body)
})

yargs.command({
    command: 'remove',
    describe: "Remove a note",
    builder: {
        title: {
            describe: "title of the note",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }

})

yargs.command({
    command: "list",
    describe: "List all notes",
    handler() {
        notes.listNotes()
    }

})

yargs.command({
    command: "read",
    describe: "Read a note",
    handler(argv) {
        notes.readNote(argv.title)
    }
})
yargs.parse()//OR: console.log(yargs.argv)
const fs = require("fs")
fs.writeFileSync("note.txt", "This is Nada");
fs.appendFileSync("note.txt", ", I'm excited to begin this challenging journey!")

const utils = require("./utils")
const sum = utils.add(2, 2)
console.log("My name is " + utils.name + ", 2+2 equal: " + sum)//reem

const notes = require("./note")
const validator = require("validator")
console.log("Is email valid? " + validator.isEmail("nada@hotmail.com") + ", is URL valid: " + validator.isURL("google"))

const chalk = require("chalk")
console.log(chalk.red.underline("you are", chalk.bold("Success!"), chalk.inverse("Nada")))


const yargs = require("yargs");
const { title } = require("process");
yargs.version("1.1.0")
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
    // console.log("Adding a new note successfuly!")
    // console.log("Title: " + argv.title)
    // console.log("Body: " + argv.body)
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


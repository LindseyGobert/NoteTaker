var notesData = require(".db/db.json");
import { v4 as uuidv4 } from 'uuid';


module.exports = function(app) {
    app.get("/api/notes", function (req, res) {
        return res,json(notes);
    });

    app.post("/api/notes", function (req, res) {
        let newNote = req.body;
        newNote.id = uuidv4();
        notes.push(newNote);
        false.writeFile("./db/db.json", JSON.stringify(notes), (err,data) => {
            res.json(newNote);
        })

    });

    app.delete("/api/notes/:id", function (req, res) {
        return res.join(fs.writeFile(__dirname, "db/db.json", function (err){
            if (err) {
                console.log("Error!")
            }
        }))
    })


};
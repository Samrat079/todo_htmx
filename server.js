const express = require('express');
const app = express()
const db = require('./db')
const renderUserListHTML = require('./views/renderUserListHTML')

const PORT = 3008;

app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 


app.get('/user', (req, res) => {
    const users = db.prepare('SELECT * FROM users').all();
    res.send(renderUserListHTML(users));
});


app.post('/add-user', (req, res) => {

    const { name, description } = req.body; //this puts the value of the name des in a var
    db.prepare('INSERT INTO users (name, description) VALUES (?, ?)').run(name, description);

    const users = db.prepare('SELECT * FROM users').all();
    res.send(renderUserListHTML(users));
});

app.put('/update-user/:id', (req, res) => {

    const { name, description } = req.body // takes name, desc from the req
    const {id} = req.params //puts the id into a var

    db.prepare('UPDATE users SET name = ?, description = ? WHERE id = ?').run(name, description, id)

    const users = db.prepare('SELECT * FROM users').all();
    res.send(renderUserListHTML(users))
});

app.delete('/delete-user/:id', (req, res) => {
    const {id} = req.params // finds id of the entry from the url

    db.prepare('DELETE FROM users WHERE id = ?').run(id)

    const users = db.prepare('SELECT * FROM users').all();
    res.send(renderUserListHTML(users))
})



app.listen(PORT, () => {
    console.log('Server is running')
})
require('dotenv').config();

const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const app = express();
const port = 3001;
const connection = getConnection();
const objectId = require('mongodb').ObjectId;

function getConnection() {

    const { DB_USER: user, DB_NAME: db, DB_CONNECTION: connection, DB_PASSWORD: password, local } = process.env
    if (local) return `mongodb://localhost:27017`
    const conn = `mongodb+srv://${user}:${password}@${connection}/${db}?retryWrites=true&w=majority`
    console.log(conn);
    return conn;
}

const mongoOptions = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

function resetGame() {
    return {
        id: 0,
        players: [],
        relation: {},
    }
}

app.use(cors());
app.options("*", cors());
app.use(express.static('build'));

app.post('/api/game/new', (req, res) => {
    try {
        const client = new MongoClient(connection, mongoOptions);
        client.connect(async (err) => {
            const db = client.db('guess_game');
            const obj = resetGame();
            await db.collection('games').deleteMany();
            await db.collection('games').updateOne({ _id: new objectId() }, { $set: obj }, { upsert: true });
            res.sendStatus(200);
        });
    } catch (e) {
        res.statusMessage = e;
        res.status(500).end();
    }
});


app.get('/api/game/add-player/:player_name', (req, res) => {
    try {
        console.log('params:', req.params);
        const player = req.params.player_name;
        const client = new MongoClient(connection, mongoOptions);
        client.connect(async (err) => {
            const db = client.db('guess_game');
            const game = await db.collection('games').findOne();
            const { _id } = game;
            game.players.push(player);
            game.players = [...new Set(game.players)];
            const len = await db.collection('words').countDocuments();
            const random = Math.floor(Math.random() * len - 1);
            const word = await db.collection('words').findOne({ wordId: random });
            game.relation[player] = word.str;
            await db.collection('games').updateOne(
                { _id: new objectId(_id) },
                { $set: game }
            )
            console.log(game);
            delete game.relation[player];
            res.send(game);
        });
    } catch (e) {
        res.statusMessage = e;
        res.status(500).end();
    }
});

app.get('/api/game/stop', (req, res) => {
    try {
        const client = new MongoClient(connection, mongoOptions);
        client.connect(async (err) => {
            const db = client.db('guess_game');
            const game = await db.collection('games').findOne();
            const obj = resetGame();
            await db.collection('games').updateOne({ _id: new objectId(game._id) }, { $set: obj }, { upsert: true });
            res.sendStatus(200);
        });
    } catch (e) {
        res.statusMessage = e;
        res.status(500).end();
    }
});

app.get('/api/game', (req, res) => {
    try {
        const client = new MongoClient(connection, mongoOptions);
        client.connect(async (err) => {
            const db = client.db('guess_game');
            const game = await db.collection('games').findOne();
            res.send(game);
        })
    } catch (e) {
        res.statusMessage = e;
        res.status(500).end();
    }
});

app.get('/api/game/words/:player_name', (req, res) => {
    try {
        console.log("here");
        const client = new MongoClient(connection, mongoOptions);
        client.connect(async (err) => {
            const db = client.db('guess_game');
            const game = await db.collection('games').findOne();
            delete game.relation[player_name];
            res.send(game.relation);
        });
    } catch (e) {
        console.log(e);
        res.statusMessage = e;
        res.status(500).end();
    }
});

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.listen(port, () => console.log(`created server on port ${port}`));

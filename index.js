const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;

const users = [
    {id: 0, name:'Shabana', email: 'shabana@gmail.com', phone: '01847524455'},
    {id: 1, name:'Sabnor', email: 'shabana@gmail.com' ,phone: '01847524455'},
    {id: 2, name:'purnima', email: 'shabana@gmail.com' ,phone: '01847524455'},
    {id: 3, name:'susorita', email: 'shabana@gmail.com' ,phone: '01847524455'},
    {id: 4, name:'shumaiya', email: 'shabana@gmail.com', phone: '01847524455'},
    {id: 5, name:'susmita', email: 'shabana@gmail.com' ,phone: '01847524455'}
];

app.get('/', (req, res) => {
    res.send('Wow that is a simple node project');
});
app.get('/users', (req, res) => {
    const search = req.query.search;
    // use query parameter
    if(search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else{
        res.send(users);
    }
});

// app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser)); // or
    res.json(newUser); 
})

// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
});

app.get('/fruits', (req, res) => {
    res.send(['mango', 'banana', 'oranges', 'apple']);
})
app.get('/fruits/mango/fazli', (req, res) => {
    res.send('Yummy Yummy tok marka fazli');
})

app.listen(port, () => {
    console.log('listening to port', port);
});
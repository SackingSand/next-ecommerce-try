// import seeder from "mongoose-seed"
const seeder = require("mongoose-seed")
const db = "mongodb://localhost:27017/next-commerce"


const data = [
    {
        'model' : 'user',
        'documents' : [
            {
                "_id": "5f4f13f40c799b2049188acd",
                "name": "Andi",
                "email": 'andi@mail.com',
                "password": "12345",
                "saldo": 100000,
                "product": ["5f4f1f63e2e89a3dd686dcab"],
            },
            {
                "_id": "5f4f1de1400cffc5a0fa01f4",
                "name": "Budi",
                "email": "budi@mail.com",
                "password": "12345",
                "saldo": 100000,
                "product": ["5f4f1f664a4b54fe3eafd2ff"],
            },
            {
                "_id": "5f4f1de56eaee3f62683fa50",
                "name": "Charlie",
                "email": "charlie@mail.com",
                "password": "12345",
                "saldo": 100000,
                "product": ["5f4f1f6959286959c09bf3f4"],
            },
            {
                "_id": "5f4f1deb7bae17ce03826b1b",
                "name": "Danu",
                "email": "danu@mail.com",
                "password": "12345",
                "saldo": 100000,
                "product": [],
            }
        ]
    },
    {
        'model' : 'product',
        'documents' : [
            {
                "_id" : "5f4f1f63e2e89a3dd686dcab",
                "name": "Andi's Shirt",
                "amount": 10,
                "price": 25000,
                "userId": "5f4f13f40c799b2049188acd"
            },
            {
                "_id" : "5f4f1f664a4b54fe3eafd2ff",
                "name": "Budi's scarf",
                "amount": 5,
                "price": 15000,
                "userId": "5f4f1de1400cffc5a0fa01f4"
            },
            {
                "_id" : "5f4f1f6959286959c09bf3f4",
                "name": "Charlie's Ring",
                "amount": 2,
                "price": 20000,
                "userId": "5f4f1de56eaee3f62683fa50"
            }
        ]
    }
]

seeder.connect(db, ()=> {
    seeder.loadModels([
        "./models/product.js",
        "./models/user.js",
        "./models/cart.js"
    ]);
    seeder.clearModels([
        'product',
        'user',
        'cart'
    ], () => {
        seeder.populateModels(data, function (err, done) {
            if(err) {
                return console.log("seed err ", err)
            }
            if(done) {
                return console.log("seed done ", done)
            }
            seeder.disconnect()
        })
    });

})
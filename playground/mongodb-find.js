const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
if (err) {
    return console.log('Unable to connect to MongoDB server.');
}    
    console.log('Connected to MongoDB server');

//   db.collection('Todos').find({completed: false}).toArray().then((docs)=>{
//       console.log('Todos');
//       console.log(JSON.stringify(docs, undefined, 2));
//       
//   },(err)=>{
//       console.log('couldnt fetch the search', err);
//   });
    
    db.collection('Users').find({name: 'Ibby'}).toArray().then((data) => {
        console.log(JSON.stringify(data, undefined, 2));
    });
    
    //db.close();
});
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
if (err) {
    return console.log('Unable to connect to MongoDB server.');
}    
    console.log('Connected to MongoDB server');

     db.collection('Todos').findOneAndUpdate(
         {_id: new ObjectID("592eda4ab2201f0ec80d9f36")},
         {$set: {completed: false, text:'something new' }},
         {returnOriginal: false}
                )
         .then((result)=>{
         console.log(result);
     });
    
    //db.close();
});
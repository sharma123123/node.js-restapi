


//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017',(error,client)=>{
  var db=client.db('databasename1');
if(error){
  return console.log('unable to connect');
}

console.log('connect to database');

db.collection('mytablename1').find().count().then((count)=>{
  console.log('total records are',count);
},(err)=>{
  console.log('unable to count---');
})


})

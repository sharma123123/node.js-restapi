
//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017',(error,client)=>{
  var db=client.db('databasename1');
if(error){
  return console.log('unable to connect');
}

console.log('connect to database');

// db.collection('mytablename1').find().toArray().then((docs)=>{
// db.collection('mytablename1').find({
//   _id: ObjectID('231' )
//}).toArray().then((docs)=>{

db.collection('mytablename1').find({name:'prasad'}).toArray().then((docs)=>{

console.log('----------------------------')

  console.log('mytablename1')
  console.log('----------------------------')
  console.log(JSON.stringify(docs,undefined,2))
},(error)=>{
  console.log('unable to fetch data',error);
})

})

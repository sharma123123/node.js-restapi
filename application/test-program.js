
const MongoClient=require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017',(error,client)=>{
  var db=client.db('databasename1');
if(error){
  return console.log('unable to connect');
}

console.log('connect to database');

// db.collection('mytablename1').insertOne({
// //    _id:23151,
//   name:'testname',
//   age :33
// },(error,rst)=>{
//   if(error){
//     console.log('unable to put---')
//   }
// console.log(JSON.stringify(rst.ops,undefined,2))
// console.log(rst.ops);
// console.log(rst.ops[0]._id);
// console.log(rst.ops[0]._id.getTimestamp());
//
})

db.collection('mytablename1').find().count().then((count)=>{
  console.log('total records are',count);
},(err)=>{
  console.log('unable to count---');
})






client.close();
})

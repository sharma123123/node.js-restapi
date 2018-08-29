
// const MongoClient=require('mongodb').MongoClient;
// MongoClient.connect('mongodb://localhost:27017',(error,client)=>{
//   var db=client.db('databasename1');
// if(error){
//   return console.log('unable to connect');
// }
//
// console.log('connect to database');
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
// })
// client.close();
// })

//------------------------------------------------------------------------------------------


//  const MongoClient=require('mongodb').MongoClient;
// MongoClient.connect('mongodb://localhost:27017',(err,client)=>{
//  var db = client.db('sharma123');
//
//   if(err){
//     return console.log('unable to connect to mongodb server')
//   }
//   console.log("connected to mongodb server");
//
//    db.collection('User').insertMany([{
//     name: 'vivek',
//     age :23,
//     location : 'kolkata'
//   },
//    {
//      name: 'rohan',
//      age :13,
//      location : 'mumbai'
//    }]
//
//
//   ,(error,rst)=>{
//     if(error){
//       return console.log('unable to insert DataBase1',error);
//     }
//     console.log(JSON.stringify(rst.ops,undefined,2))
//     // ops method fetch data that inserted
//   })
// client.close();
// })


//-------------------------------------------------------------


const {MongoClient,ObjectID}=require('mongodb');

var obj=new ObjectID();
console.log(obj);

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
// })
client.close();
})

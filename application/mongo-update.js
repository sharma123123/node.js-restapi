const MongoClient=require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017',(error,client)=>{
  var db=client.db('databasename1');
  if(error){
    console.log('unable to make connection',error);
  }
  console.log('successfully setup connection-------------')
  db.collection('mytablename1').findOneAndUpdate({
    _id:12
  },
   {
     $set : {
       name : 'priya kumari sharma'
     }
   }
).then((doc)=>{
    console.log('geeting new updated value is ',doc);
  },(err)=>{
    console.log('not able to go inside table',err);
  })
})
//

// const MongoClient=require('mongodb').MongoClient;
// MongoClient.connect('mongodb://localhost:27017',(error,client)=>{
//   var db=client.db('databasename1');
//   if(error){
//     console.log('unable to make connection',error);
//   }
//   console.log('successfully setup connection-------------')
//   db.collection('mytablename1').update({
//     _id:121
//   },
//    {
//      $inc : {
//        age1 : -20
//      }
//    }
//
// ).then((doc)=>{
//     console.log('geeting new updated value is ',doc);
//   },(err)=>{
//     console.log('not able to go inside table',err);
//   })
// })

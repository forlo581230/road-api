#資料庫重複過濾

db.overspeedrecords.aggregate([
{ $group: {
_id: { name: "$name", town:"$town"},
uniqueIds: { $addToSet: "$_id" },
count: { $sum: 1 }
}},
{ $match: {
count: { $gt: 1 }
}}
]).forEach(function(doc){
  doc.uniqueIds.shift();db.overspeedrecords.remove({
    _id: {
      $in: doc.uniqueIds
    }
  });
})#   r o a d - a p i  
 
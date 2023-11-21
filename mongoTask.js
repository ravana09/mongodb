test> use task1;
task1> db.craeteCollection("task")

task1> db.task.insertMany( )

// 1.find all details

task1> db.task.find().toArray();

//2.Find the product price which are between 400 to 800


task1> db.task.find({product_price :{$gt:400 , $lt : 800}});

//3. Find the product price which are not between 400 to 600

task1> db.task.find({product_price : { $not :{ $gt :400, $lt :600}}}).toArray();

// 4.List the four product which are greater than 500 in price

task1>  db.task.find({product_price:{$gt :500} }).sort ({product_price :1}).limit(4);

// 5.Find the product name and product material of each products

task1> db.task.find ().forEach (function(data) {print ("productName " + data.product_name),
print("productMaterial " + data. product_material )})

//6.Find the product with a row id of 10

task1>  db.task.find({id :"10"});

// 7.Find only the product name and product material



// 8.Find all products which contain the value of soft in product material 

task1>   db.task.find({ product_material: "Soft"});

//9. Find products which contain product color indigo  and product price 492.00


task1> db.task.find ({$or: [ {product_color: 'indigo'},{ product_price: 492
}]})

//10.Delete the products which product price value are same

task1>
db.task.aggregate(
    [
      {
        $group: {
          _id: "$product_material",
          duplicate: { $addToSet: "$_id" },
          TotalCount: { $sum: 1 }
        }
      },
      { $match: { TotalCount: { $gt: 1 } } }
    ]
  ).forEach((doc)=>{
    doc.duplicate.shift();
    db.task.deleteMany({_id:{$in:doc.duplicate}})
  })

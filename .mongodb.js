C:\Users\prade>mongosh
Current Mongosh Log ID: 655a2880104e7a1214eeae0b
Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.2
Using MongoDB:          7.0.3
Using Mongosh:          2.0.2

For mongosh info see: https://docs.mongodb.com/mongodb-shell/

------
   The server generated these startup warnings when booting
   2023-11-16T20:48:35.240+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
------

test> show dbs
admin   40.00 KiB
config  72.00 KiB
guvi    72.00 KiB
local   72.00 KiB
test> use task1
switched to db task1
task1> db.craeteCollection("task")
TypeError: db.craeteCollection is not a function
task1> db.createCollection("task")
{ ok: 1 }
task1> show collections
task
task1> db.task.insertMany( 
    [
        {
          _id: ObjectId("655a2977104e7a1214eeae0c"),
          id: '1',
          product_name: 'Intelligent Fresh Chips',
          product_price: 655,
          product_material: 'Concrete',
          product_color: 'mint green'
        },
        {
          _id: ObjectId("655a2977104e7a1214eeae0d"),
          id: '2',
          product_name: 'Practical Fresh Sausages',
          product_price: 911,
          product_material: 'Cotton',
          product_color: 'indigo'
        },
        {
          _id: ObjectId("655a2977104e7a1214eeae0e"),
          id: '3',
          product_name: 'Refined Steel Car',
          product_price: 690,
          product_color: 'gold'
        },
        {
          _id: ObjectId("655a2977104e7a1214eeae0f"),
          id: '4',
          product_name: 'Gorgeous Plastic Pants',
          product_price: 492,
          product_material: 'Soft',
          product_color: 'plum'
        },
        {
          _id: ObjectId("655a2977104e7a1214eeae10"),
          id: '5',
          product_name: 'Sleek Cotton Chair',
          product_price: 33,
          product_material: 'Fresh',
          product_color: 'black'
        },
        {
          _id: ObjectId("655a2977104e7a1214eeae11"),
          id: '6',
          product_name: 'Awesome Wooden Towels',
          product_price: 474,
          product_material: 'Plastic',
          product_color: 'orange'
        },
        {
          _id: ObjectId("655a2977104e7a1214eeae12"),
          id: '7',
          product_name: 'Practical Soft Shoes',
          product_price: 500,
          product_material: 'Rubber',
          product_color: 'pink'
        },
        {
          _id: ObjectId("655a2977104e7a1214eeae13"),
          id: '8',
          product_name: 'Incredible Steel Hat',
          product_price: 78,
          product_material: 'Rubber',
          product_color: 'violet'
        },
        {
          _id: ObjectId("655a2977104e7a1214eeae14"),
          id: '9',
          product_name: 'Awesome Wooden Ball',
          product_price: 28,
          product_material: 'Soft',
          product_color: 'azure'
        },
        {
          _id: ObjectId("655a2977104e7a1214eeae15"),
          id: '10',
          product_name: 'Generic Wooden Pizza',
          product_price: 84,
          product_material: 'Frozen',
          product_color: 'indigo'
        },
        {
          _id: ObjectId("655a2977104e7a1214eeae16"),
          id: '11',
          product_name: 'Unbranded Wooden Cheese',
          product_price: 26,
          product_material: 'Soft',
          product_color: 'black'
        },
        {
          _id: ObjectId("655a2977104e7a1214eeae17"),
          id: '12',
          product_name: 'Unbranded Plastic Salad',
          product_price: 89,
          product_material: 'Wooden',
          product_color: 'pink'
        },
        {
          _id: ObjectId("655a2977104e7a1214eeae18"),
          id: '13',
          product_name: 'Gorgeous Cotton Keyboard',
          product_price: 37,
          product_material: 'Concrete',
          product_color: 'sky blue'
        },
        {
          _id: ObjectId("655a2977104e7a1214eeae19"),
          id: '14',
          product_name: 'Incredible Steel Shirt',
          product_price: 54,
          product_material: 'Metal',
          product_color: 'white'
        },
        {
          _id: ObjectId("655a2977104e7a1214eeae1a"),
          id: '15',
          product_name: 'Ergonomic Cotton Hat',
          product_price: 43,
          product_material: 'Rubber',
          product_color: 'mint green'
        },
        {
          _id: ObjectId("655a2977104e7a1214eeae1b"),
          id: '16',
          product_name: 'Small Soft Chair',
          product_price: 47,
          product_material: 'Cotton',
          product_color: 'teal'
        },
        {
          _id: ObjectId("655a2977104e7a1214eeae1c"),
          id: '17',
          product_name: 'Incredible Metal Car',
          product_price: 36,
          product_material: 'Fresh',
          product_color: 'indigo'
        },
        {
          _id: ObjectId("655a2977104e7a1214eeae1d"),
          id: '18',
          product_name: 'Licensed Plastic Bacon',
          product_price: 88,
          product_material: 'Steel',
          product_color: 'yellow'
        },
        {
          _id: ObjectId("655a2977104e7a1214eeae1e"),
          id: '19',
          product_name: 'Intelligent Cotton Chips',
          product_price: 46,
          product_material: 'Soft',
          product_color: 'azure'
        },
        {
          _id: ObjectId("655a2977104e7a1214eeae1f"),
          id: '20',
          product_name: 'Handcrafted Wooden Bacon',
          product_price: 36,
          product_material: 'Concrete',
          product_color: 'lime'
        },
        {
            _id: ObjectId("655a2977104e7a1214eeae20"),
            id: '21',
            product_name: 'Unbranded Granite Chicken',
            product_price: 90,
            product_material: 'Metal',
            product_color: 'gold'
          },
          {
            _id: ObjectId("655a2977104e7a1214eeae21"),
            id: '22',
            product_name: 'Ergonomic Soft Hat',
            product_price: 99,
            product_material: 'Rubber',
            product_color: 'black'
          },
          {
            _id: ObjectId("655a2977104e7a1214eeae22"),
            id: '23',
            product_name: 'Intelligent Steel Pizza',
            product_price: 95,
            product_material: 'Cotton',
            product_color: 'azure'
          },
          {
            _id: ObjectId("655a2977104e7a1214eeae23"),
            id: '24',
            product_name: 'Tasty Rubber Cheese',
            product_price: 47,
            product_material: 'Frozen',
            product_color: 'orchid'
          },
          {
            _id: ObjectId("655a2977104e7a1214eeae24"),
            id: '25',
            product_name: 'Licensed Steel Car',
            product_price: 20,
            product_material: 'Cotton',
            product_color: 'indigo'
          }
        ]
)
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("655a2977104e7a1214eeae0c"),
    '1': ObjectId("655a2977104e7a1214eeae0d"),
    '2': ObjectId("655a2977104e7a1214eeae0e"),
    '3': ObjectId("655a2977104e7a1214eeae0f"),
    '4': ObjectId("655a2977104e7a1214eeae10"),
    '5': ObjectId("655a2977104e7a1214eeae11"),
    '6': ObjectId("655a2977104e7a1214eeae12"),
    '7': ObjectId("655a2977104e7a1214eeae13"),
    '8': ObjectId("655a2977104e7a1214eeae14"),
    '9': ObjectId("655a2977104e7a1214eeae15"),
    '10': ObjectId("655a2977104e7a1214eeae16"),
    '11': ObjectId("655a2977104e7a1214eeae17"),
    '12': ObjectId("655a2977104e7a1214eeae18"),
    '13': ObjectId("655a2977104e7a1214eeae19"),
    '14': ObjectId("655a2977104e7a1214eeae1a"),
    '15': ObjectId("655a2977104e7a1214eeae1b"),
    '16': ObjectId("655a2977104e7a1214eeae1c"),
    '17': ObjectId("655a2977104e7a1214eeae1d"),
    '18': ObjectId("655a2977104e7a1214eeae1e"),
    '19': ObjectId("655a2977104e7a1214eeae1f"),
    '20': ObjectId("655a2977104e7a1214eeae20"),
    '21': ObjectId("655a2977104e7a1214eeae21"),
    '22': ObjectId("655a2977104e7a1214eeae22"),
    '23': ObjectId("655a2977104e7a1214eeae23"),
    '24': ObjectId("655a2977104e7a1214eeae24")
  }
}

1.find all details

task1> db.task.find()
[
  {
    _id: ObjectId("655a2977104e7a1214eeae0c"),
    id: '1',
    product_name: 'Intelligent Fresh Chips',
    product_price: 655,
    product_material: 'Concrete',
    product_color: 'mint green'
  },
  {
    _id: ObjectId("655a2977104e7a1214eeae0d"),
    id: '2',
    product_name: 'Practical Fresh Sausages',
    product_price: 911,
    product_material: 'Cotton',
    product_color: 'indigo'
  },
  {
    _id: ObjectId("655a2977104e7a1214eeae0e"),
    id: '3',
    product_name: 'Refined Steel Car',
    product_price: 690,
    product_color: 'gold'
  },
  {
    _id: ObjectId("655a2977104e7a1214eeae0f"),
    id: '4',
    product_name: 'Gorgeous Plastic Pants',
    product_price: 492,
    product_material: 'Soft',
    product_color: 'plum'
  },
  {
    _id: ObjectId("655a2977104e7a1214eeae10"),
    id: '5',
    product_name: 'Sleek Cotton Chair',
    product_price: 33,
    product_material: 'Fresh',
    product_color: 'black'
  },
  {
    _id: ObjectId("655a2977104e7a1214eeae11"),
    id: '6',
    product_name: 'Awesome Wooden Towels',
    product_price: 474,
    product_material: 'Plastic',
    product_color: 'orange'
  },
  {
    _id: ObjectId("655a2977104e7a1214eeae12"),
    id: '7',
    product_name: 'Practical Soft Shoes',
    product_price: 500,
    product_material: 'Rubber',
    product_color: 'pink'
  },
  {
    _id: ObjectId("655a2977104e7a1214eeae13"),
    id: '8',
    product_name: 'Incredible Steel Hat',
    product_price: 78,
    product_material: 'Rubber',
    product_color: 'violet'
  },
  {
    _id: ObjectId("655a2977104e7a1214eeae14"),
    id: '9',
    product_name: 'Awesome Wooden Ball',
    product_price: 28,
    product_material: 'Soft',
    product_color: 'azure'
  },
  {
    _id: ObjectId("655a2977104e7a1214eeae15"),
    id: '10',
    product_name: 'Generic Wooden Pizza',
    product_price: 84,
    product_material: 'Frozen',
    product_color: 'indigo'
  },
  {
    _id: ObjectId("655a2977104e7a1214eeae16"),
    id: '11',
    product_name: 'Unbranded Wooden Cheese',
    product_price: 26,
    product_material: 'Soft',
    product_color: 'black'
  },
  {
    _id: ObjectId("655a2977104e7a1214eeae17"),
    id: '12',
    product_name: 'Unbranded Plastic Salad',
    product_price: 89,
    product_material: 'Wooden',
    product_color: 'pink'
  },
  {
    _id: ObjectId("655a2977104e7a1214eeae18"),
    id: '13',
    product_name: 'Gorgeous Cotton Keyboard',
    product_price: 37,
    product_material: 'Concrete',
    product_color: 'sky blue'
  },
  {
    _id: ObjectId("655a2977104e7a1214eeae19"),
    id: '14',
    product_name: 'Incredible Steel Shirt',
    product_price: 54,
    product_material: 'Metal',
    product_color: 'white'
  },
  {
    _id: ObjectId("655a2977104e7a1214eeae1a"),
    id: '15',
    product_name: 'Ergonomic Cotton Hat',
    product_price: 43,
    product_material: 'Rubber',
    product_color: 'mint green'
  },
  {
    _id: ObjectId("655a2977104e7a1214eeae1b"),
    id: '16',
    product_name: 'Small Soft Chair',
    product_price: 47,
    product_material: 'Cotton',
    product_color: 'teal'
  },
  {
    _id: ObjectId("655a2977104e7a1214eeae1c"),
    id: '17',
    product_name: 'Incredible Metal Car',
    product_price: 36,
    product_material: 'Fresh',
    product_color: 'indigo'
  },
  {
    _id: ObjectId("655a2977104e7a1214eeae1d"),
    id: '18',
    product_name: 'Licensed Plastic Bacon',
    product_price: 88,
    product_material: 'Steel',
    product_color: 'yellow'
  },
  {
    _id: ObjectId("655a2977104e7a1214eeae1e"),
    id: '19',
    product_name: 'Intelligent Cotton Chips',
    product_price: 46,
    product_material: 'Soft',
    product_color: 'azure'
  },
  {
    _id: ObjectId("655a2977104e7a1214eeae1f"),
    id: '20',
    product_name: 'Handcrafted Wooden Bacon',
    product_price: 36,
    product_material: 'Concrete',
    product_color: 'lime'
  }
]
Type "it" for more
task1> it
[
  {
    _id: ObjectId("655a2977104e7a1214eeae20"),
    id: '21',
    product_name: 'Unbranded Granite Chicken',
    product_price: 90,
    product_material: 'Metal',
    product_color: 'gold'
  },
  {
    _id: ObjectId("655a2977104e7a1214eeae21"),
    id: '22',
    product_name: 'Ergonomic Soft Hat',
    product_price: 99,
    product_material: 'Rubber',
    product_color: 'black'
  },
  {
    _id: ObjectId("655a2977104e7a1214eeae22"),
    id: '23',
    product_name: 'Intelligent Steel Pizza',
    product_price: 95,
    product_material: 'Cotton',
    product_color: 'azure'
  },
  {
    _id: ObjectId("655a2977104e7a1214eeae23"),
    id: '24',
    product_name: 'Tasty Rubber Cheese',
    product_price: 47,
    product_material: 'Frozen',
    product_color: 'orchid'
  },
  {
    _id: ObjectId("655a2977104e7a1214eeae24"),
    id: '25',
    product_name: 'Licensed Steel Car',
    product_price: 20,
    product_material: 'Cotton',
    product_color: 'indigo'
  }
]
task1>
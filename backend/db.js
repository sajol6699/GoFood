const mongoose =require("mongoose");
const url=("mongodb://127.0.0.1:27017/gofoodmern");

const mongodb= async()=>{
    await mongoose.connect(url).then(console.log("connected to database"))


// fetching data from database
// display food_item
const fetched_data =await mongoose.connection.db.collection("food_item")
 const data = await fetched_data.find({}).toArray()
 global.food_items=data;
//  food category display
const fetchedCategory =await mongoose.connection.db.collection("foodCategory")
 const data2 = await fetchedCategory.find({}).toArray()
 global.food_items2=data2;

}

    



    module.exports=mongodb;
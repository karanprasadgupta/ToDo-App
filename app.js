//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const _ = require('lodash');
const mongoose = require("mongoose");
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb+srv://karan20439:Test123@cluster0.9wbjca0.mongodb.net/todolistDB" ,{useNewUrlParser: true});

const itemsSchema = {
  name: String
};

const Item = mongoose.model("Item", itemsSchema);

const item1= new Item({
  name: "Welcome to your ToDoList!"
}); 
const item2= new Item({
  name: "Hit the + button to add new task."
}); 
const item3= new Item({
  name: "<= Click here to delete the task."
}); 

const defaultItems=[item1, item2, item3]

const listSchema = {
  name:String,
  items: [itemsSchema]
}
const List=mongoose.model("List",listSchema);

app.get("/", async function(req, res) {
  var foundItems=await Item.find({});
  if(foundItems.length==0){
    Item.insertMany(defaultItems).then(function () {
      console.log("Successfully saved default items to Database.");
    })
    .catch(function (err) {
      console.log(err);
    });
    res.redirect("/");
  }
  res.render("list", {listTitle: "Today", newListItems: foundItems});
});

app.post("/", async function(req, res){

  const itemName = req.body.newItem;
  const listName = req.body.listn;
  const item =new Item({name:itemName});
  //console.log(itemName+", "+listName);
  if (listName === "Today") {
    item.save();
    res.redirect("/");
  } else {
    const foundList=await List.findOne({ name: listName }).exec();
    foundList.items.push(item);
    foundList.save();
    res.redirect("/"+listName);
  }
});

app.post("/delete", function(req, res){

  const itemid = req.body.checkbox;
  const listName = req.body.lnm;
  console.log(itemid+", "+listName);
  if(listName === "Today"){
    Item.findByIdAndRemove(itemid).then(function () {
      console.log("Successfully removed task.");
  })
  .catch(function (err) {
      console.log(err);
  });
      res.redirect("/");
  }
  else{
    List.findOneAndUpdate({name: listName}, {$pull: {items:{_id: itemid}}}).then(function () {
      console.log("Successfully removed task.");
  })
  .catch(function (err) {
      console.log(err);
  });
    res.redirect("/"+listName);
  }
});

app.get("/:customListName",async function(req,res){
  const customListName=_.capitalize(req.params.customListName);
  
  const foundList=await List.findOne({ name: customListName }).exec();
  if(!foundList){
    const list= new List({
      name: customListName,
      items: defaultItems
    });
    list.save();
    res.render("list", {listTitle: customListName, newListItems: list.items});
  }
  else{

    res.render("list", {listTitle: customListName, newListItems: foundList.items});
  }

});

app.get("/about", function(req, res){
  res.render("about");
});
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log('server started on port ${PORT}');
});
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.set('view engine','ejs');
app.set('views', './views');


/*var users = [
  {
    first:"Joe",
    last:"Billy",
    email:"jbilly@yahoo.com"
  },

  {
    first:"Neil",
    last:"Smith",
    email:"nsmith@yahoo.com"
  },

  {
    first:"Leonard",
    last:"Cooper",
    email:"lcooper@yahoo.com"
  }
];
*/
app.get('/',function(req, res)
{
  res.render('index',{
    title:"Customers",
  });

});



app.post('/actionPage/haha', function(req, res)
{
  var newUser = {
    id:req.body.id,
    first: req.body.first,
    last:req.body.last,
    gender:req.body.gender,
    age:req.body.age,
    phone:req.body.phone,
    email:req.body.email

  }


  res.render('success', 
  {
    users:newUser
  });
 
});




app.listen(process.env.PORT || 5000, function()
{
  console.log("Server started on port 2000");
});
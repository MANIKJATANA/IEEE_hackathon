const express=require("express");
const bodyParser=require("body-parser")


const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.set('view engine', 'ejs');
// index
app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
});


app.get("/forms.html",function(req,res){
  res.sendFile(__dirname + "/forms.html");
});
var weight;
var height;
var headCircumference;
var age;
var learning;
var disability;
app.post("/",function(req,res){
  weight=Number(req.body.fname);
  height=Number(req.body.lname);
  headCircumference=Number(req.body.hc);

  age=Number(req.body.age);

  learning=Number(req.body.learning);
  disability=Number(req.body.disability);
  console.log(age);
  console.log(disability);
  console.log(learning);


  var string=[];
  var ans=weight/(height*height);
  if(18.5<=ans && ans<=24.9){
    string.push("Physically Healthy")
  }else if(25.0<=ans ){
    string.push("Overweight");
  }else if(ans<18.5){
    string.push("Underweight");
  }


  if(disability===1){
    string.push("Motor Disorder: Treatment includes Physical or occupational therapy for movement disorder and counsellers session with Psychiatrist for mental neuron disorder")
  }

  if(learning===1){
    string.push(" Brain development issue: Treatment includes physical, speech, language and occupational therapy ")
  }

  switch (age) {
    case 1:
      if(headCircumference<=40 || headCircumference>=44 ){
        string.push("Microcephaly");
      }
      break;
    case 2:
        if(headCircumference<=44 || headCircumference>=48){
          string.push("Microcephaly");
        }
        break;

    case 3:
      if(headCircumference<=48 || headCircumference>=52){
        string.push("Microcephaly");
      }
      break;
  }

  res.render('Result',{string});

});


app.listen(3000,function(){
  console.log("server started at port 3000");
});

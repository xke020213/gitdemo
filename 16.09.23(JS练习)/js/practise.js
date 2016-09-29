var i;
var cars=new Array("Audi","BMW","Volvo")
for (i = 0; i<cars.length; i++) {
		document.write(cars[i] + "<br />");
}

var result=0;
for (var start=1; start<101; start++) {
		result=result+start;
}
document.write(result + "<br />");

var message="Hello Word!";
var x=message.length;
document.write(x + "<br />");

var message="Hello Word!";
var x=message.toUpperCase();
document.write(x + "<br />");

var x;
var txt="";
var person={fname:"Bill",lname:"Gates",age:56}; 
for (x in person) {
	txt=txt + person[x];	
}
document.write(txt + "<br />");

var x="",i=0;
while (i<5){
	x=x + "The number is " + i + "<br>";
    i++;
}
document.write(x + "<br />");

var x="",i=0;
do{
	x=x + "The number is " + i + "<br>";
	i++;
}
while (i<5)
document.write(x + "<br />");

//比较 for 和 while：
cars=["BMW","Volvo","Saab","Ford"];
for (var i=0;cars[i];i++){    //car[i]或i<cars.length
    document.write(cars[i] + "<br />");
}

cars=["BMW","Volvo","Saab","Ford"];
var i=0;
while (cars[i]){
document.write(cars[i] + "<br />");
i++;
}

var x="",i=0;
for (;i<10;i++){
	if (i==3) break;
    x=x + "The number is " + i + "<br>";
}
document.write(x + "<br />");

var x="",i=0;
for (;i<10;i++){
	if (i==3) continue;
    x=x + "The number is " + i + "<br>";
}
document.write(x + "<br />");

cars=["BMW","Volvo","Saab","Ford"];
list:{
document.write(cars[0] + "<br>"); 
document.write(cars[1] + "<br>"); 
document.write(cars[2] + "<br>"); 
break list;
document.write(cars[3] + "<br>"); 
document.write(cars[4] + "<br>"); 
document.write(cars[5] + "<br>"); 
}

function tryFunction()
{
	try{
		var x=document.getElementById("try").value;
        if(x=="")     throw "empty";
        if(isNaN(x))  throw "not a number";
        if(x>10)      throw "too high";
        if(x<5)       throw "too low";
	}
	catch(err){
        var y=document.getElementById("mess");
        y.innerHTML="Error: " + err + ".";
    }
}

//必填（或必选）项目：
function validate_required(field,alerttxt)
{
    with (field) {
        if (value==null||value==""){
        	alert(alerttxt);
        	return false;
        }
        else {
        	return true;
        }
  }
}

function validate_form(thisform)
{
    with (thisform) {
        if (validate_required(email,"Email must be filled out!")==false) {
        	email.focus();
        	return false;
        }
    }
}


//E-mail 验证：
function validate_email(field,alerttxt)
{
    with (field) {
        apos=value.indexOf("@")
        dotpos=value.lastIndexOf(".")
        if (apos<1||dotpos-apos<2) {
        	alert(alerttxt);
        	return false;
        }
        else {
        	return true;
        }
    }
}

function validate_form(thisform)
{
    with (thisform) {
        if (validate_email(email,"Not a valid e-mail address!")==false) {
        	email.focus();
        	return false
        }
    }
}

document.write(Date());

function changetext(id)
{
	id.innerHTML="谢谢!";
}

function fnamFunction()
{
    var x=document.getElementById("fname");
    x.value=x.value.toUpperCase();
}

var c=0
var t
function timedCount()
{
	document.getElementById('txt').value=c
    c=c+1
    t=setTimeout("timedCount()",1000)
}




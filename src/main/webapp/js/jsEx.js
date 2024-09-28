/* 
var testInt = 100;
testInt2 = "ICT";

console.log(testInt);
console.log(testInt2);

var testInt = 200;
console.log(testInt);

console.time("ArrayTime");
let arr = new Array(1000000);

for (var i =0; i<arr.length; i++){
	arr[i] = i;
}
console.timeEnd("ArrayTime");
 */

/*
var test1 = 100;
var test2 = "ICT";
var test3 = true;

var test4 = function(){

}

var test5 ={};

var test6;

console.log(typeof test1);
console.log(typeof test2);
console.log(typeof test3);
console.log(typeof test4);
console.log(typeof test5);
console.log(typeof test6);
*/

/*
function testVarriable(){
	testVar; //지역변수
	console.log(testVar);
}

testVarriable();
*/

/*
var comp1 = 100;
var comp2 = "100";

if(comp1 == comp2){
	console.log("같아요");
}else{
	console.log("달라요");
}

if(comp1 === comp2){
	console.log("같아요");
}else{
	console.log("달라요");
}
*/

/*
var arr1 = ["ICT", 100, true, {}, function(){}]

console.log(arr1[0]);
console.log(arr1[1]);

arr1[50] = "들어가나요?";
console.log(arr1[50]);

for(var i = 0; i<arr1.length; i++){
	console.log(arr1[i]);
}

for(var i in arr1){
	console.log(arr1[i]);
}
*/

/*
var testFunc = function(){
	console.log("lamda function");
}

testFunc();

var testFunc2 = function(arg1, arg2){
	console.log(arg1);
	console.log(arg2);
	
	console.log(arg1 + arg2);
}

testFunc2(100, 200);
testFunc2(1000);
testFunc2(100, 200, 500);
*/

/*
var obj = {
	pName : "ICT",
	pPrice : 1000,
	pColor : "Yellow",
	"my pName" : "전주빈",
	
	pPrint : function(){dss
		console.log(this.pName + this.pPrice);
	}
}

console.log(obj.pColor);
obj.pPrint();

obj.pDoor = 2;
console.log(obj.pDoor);

console.log(obj["pPrice"]);
*/

/*
function CreateObject(pName, pPrice, pColor){
	this.pName = pName
	this.pPrice = pPrice
	this.pColor = pColor
	
	this.pPrint = function(){
		console.log(this.pName + " : " + this.pColor)
	}
}

var obj1 = new CreateObject("그랜져", 100000, "black");
var obj2 = new CreateObject("제네시스", 500000, "white");

obj1.pPrint();
obj2.pPrint();
*/










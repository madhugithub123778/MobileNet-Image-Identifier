Webcam.set({
width: 290,
height: 300, 
image_format: "png",
png_quality: 90,

constraints: {
facingMode: "environment"
}
}); 

camera = document.getElementById("camera");

Webcam.attach(camera);

function take_pic(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML= '<img id="cap_pic"src="'+data_uri+'"/>';});
}

console.log("ml5 version is: ", ml5.version);

identifier = ml5.imageClassifier("MobileNet",modelLoaded);

function identify(){
image = document.getElementById("cap_pic");
identifier.classify(image,gotResult);

}

function modelLoaded(){
console.log("Model has Loaded");}

function gotResult(error, results){
if (error){
console.error(error);}

else{
console.log(results);
document.getElementById("object_name").innerHTML = results[0].label;}


}
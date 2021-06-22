camera=document.getElementById("camera");
Webcam.attach("#camera");
Webcam.set({
    width:350,
    height:300,
    image_format:"jpeg",
    jpeg_quality: 90
});

console.log("ml5 version : ", ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/j4feDXXPX/model.json" ,modelLoaded);
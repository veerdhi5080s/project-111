prediction_1="";
prediction_2="";

Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:100
});

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image"src="'+data_uri+'">';
    });
}

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Uto0Y4UZO/',modelLoaded);/*Put The Link*/

function modelLoaded(){
    console.log("Magazine Loaded!!");
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "the First Prediction is " + prediction_1;
    speak_data_2 = "the Second Prediction is " + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utterThis);
}
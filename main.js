Webcam.set({
    width: 350,
    height:300,
    image_format: "png",
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function takeSnapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="capturedImg" src="'+data_uri+'"/>';
    });
}

console.log('ml5 versión: ', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/k0_7Fa9yf/model.json',modelLoaded);

function modelLoaded() {
    console.log("Modelo cargado");
}

function check() {
    img = document.getElementById("capturedImg");
    clasifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label * 100;
        document.getElementById("result_object_name").innerHTML = results[0].confidence.toFixed(3) * 100;
    }
}
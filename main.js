function setup() {
  cuadro = createCanvas(300, 300);
  cuadro.position(515,250);
  video = createCapture(VIDEO);
  video.hide();
  plumones=ml5.imageClassifier('MobileNet',reloj);
}
function reloj(){
  console.log(' YA ESTA LISTO TU MODELO PARA OCUPAR :) ');
}
function draw(){
  image(video,0,0,300,300);
  plumones.classify(video,vaso)
}
function vaso(error,respuesta){
if(error){
  console.error(error);
}
else{
  console.log(respuesta);
  document.getElementById("perla").innerHTML=respuesta[0].label;
  document.getElementById("name").innerHTML=respuesta[0].confidence.toFixed(2);
}
}
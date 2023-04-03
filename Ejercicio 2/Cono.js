var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xDDDDDD, 1);
document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(80, WIDTH / HEIGHT);
camera.position.z = 4.5;
camera.position.x = -1.2;
camera.position.y = 2;

camera.rotation.set(0, -0.5, 0);
scene.add(camera);

var controls = new THREE.OrbitControls(camera, renderer.domElement);
//Se parametriza como variables globales r y a
//r: Radio del cono
//a: Altura del cono
r=1;
a = 3;
// Gemotria del cono 
var geometry = new THREE.ConeGeometry(r, a, 10);
//Material del cono
var material = new THREE.MeshPhongMaterial({ color: 0xCC99FF });
//Representacion del Cono
var cono = new THREE.Mesh(geometry, material);
scene.add(cono)

//Transfromaciones en el cono
//Conversion de angulo 
var angulo = Math.atan2(r, a);
//Rotación del cono en X
geometry.rotateX(Math.PI/2);
//Rotacion del cono en Y
geometry.rotateY (Math.PI/2);
//Traslacion del cono 
geometry.translate(r+r/2, r, 0);
//Rotacion en Z negativamente
geometry.rotateZ(-angulo);

//Aplicacion de luz 
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(-1, 2, 4);
scene.add(light);

const size = 150;
const divisions = 160;
//Creación de ejes
const axesHelper = new THREE.AxesHelper(1000);
scene.add(axesHelper);
//Creacion de la grilla
const gridHelper = new THREE.GridHelper(size, divisions);
scene.add(gridHelper);
//Funcion para renderizar
function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}

render();
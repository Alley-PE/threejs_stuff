import './three_style.css'

import * as THREE from 'three';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);

const mahCanvas = document.querySelector('#bg')
let width = mahCanvas.offsetWidth
let height = mahCanvas.offsetHeight

const renderer = new THREE.WebGL1Renderer({
  antialias: true,
  alpha: true,
});

renderer.setPixelRatio( Math.min(window.devicePixelRatio, 2) );
renderer.setSize( width, height );
mahCanvas.appendChild(renderer.domElement)

camera.position.setZ(30);

const geometry = new THREE.TorusGeometry( 10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial( { color: 0xFF6347, wireframe: true } ); 
const torus = new THREE.Mesh( geometry, material ); 

scene.add( torus );

const pointLight = new THREE.PointLight(0xffffff, 1000, 100)
pointLight.position.set( 5, 5, 5)

const ambientLight = new THREE.AmbientLight(0xffffff)
scene.add(pointLight, ambientLight)

torus.rotation.y = 77;

function animate() {

 

  requestAnimationFrame( animate );

 
  torus.rotation.y += 0.005;
  


  renderer.render( scene, camera );
  
}

animate()





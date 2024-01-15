import './three_style.css'

import * as THREE from 'three';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);



const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#threejs-canvas'),
});

renderer.setPixelRatio( Math.min(window.devicePixelRatio) );
renderer.setSize( window.innerWidth, window.innerHeight );

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





const threejsCanvas = document.querySelector('#threejs-canvas')
let width = threejsCanvas.offsetWidth
let height = threejsCanvas.offsetHeight

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(70,width/height,1,1000)
camera.position.set(10,10,10)
camera.lookAt(0,0,0)

const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha:true,
})

renderer.setSize(width, height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
threejsCanvas.appendChild(renderer.domElement)

// load a texture, set wrap mode to repeat
const texture = new THREE.TextureLoader().load( "everything.jpg" );
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set( 4, 4 );

const geometry = new THREE.TorusGeometry( 10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial( { color: 0xFF6347, map: texture} ); 
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
    torus.rotation.x += 0.005;
    
  
  
    renderer.render( scene, camera );
    
  }
  
  animate()

  window.addEventListener('resize', onResize)

  function onResize() {
    width = threejsCanvas.offsetWidth
    height = threejsCanvas.offsetHeight

    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    camera.aspect = width / height
    camera.updateProjectionMatrix()
  }





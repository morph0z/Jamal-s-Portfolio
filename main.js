import './style.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
import {OBJLoader} from 'three/addons/loaders/OBJLoader.js';
import {MTLLoader} from 'three/addons/loaders/MTLLoader.js';
import { randFloat, randInt } from 'three/src/math/MathUtils.js';

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
//scene.add( cube );
const light = new THREE.DirectionalLight(0x08A1F3, 1);
scene.add(light);
{
  const objLoader = new OBJLoader();
  objLoader.load('assets/models/gun.obj', (root) => {
    scene.add(root);
    root.position.set(randInt(-5, 5), randInt(-5, 5), randInt(-5, 5));
    root.rotation.set(randInt(0, 360), randInt(0, 360), randInt(0, 360)); // Adjust rotation
  });
  const mtlLoader = new MTLLoader();
  mtlLoader.load('assets/models/materials/Arachknight.mtl', (mtl) => {
    mtl.preload();
    objLoader.setMaterials(mtl);
  });
  objLoader.load('assets/models/Arachknight.obj', (root) => {
    scene.add(root);
    root.position.set(randInt(-5, 5), randInt(-5, 5), randInt(-5, 5));
    root.scale.set(0.1, 0.1, 0.1); // Adjust scale
    root.rotation.set(randInt(0, 360), randInt(0, 360), randInt(0, 360)); // Adjust rotation
  });
  objLoader.load('assets/models/sniper.obj', (root) => {
    scene.add(root);
    root.position.set(randInt(-5, 5), randInt(-5, 5), randInt(-5, 5));
    root.rotation.set(randInt(0, 360), randInt(0, 360), randInt(0, 360)); // Adjust rotation
  });
  objLoader.load('assets/models/hand.obj', (root) => {
    scene.add(root);
    root.position.set(randInt(-5, 5), randInt(-5, 5), randInt(-5, 5));
    root.scale.set(0.5, 0.5, 0.5); // Adjust scale
    root.rotation.set(randInt(0, 360), randInt(0, 360), randInt(0, 360)); // Adjust rotation
  });
  objLoader.load('assets/models/cha.obj', (root) => {
    scene.add(root);
    root.position.set(randInt(-5, 5), randInt(-5, 5), randInt(-5, 5));
    root.scale.set(0.7, 0.7, 0.7); // Adjust scale
    root.rotation.set(randInt(0, 360), randInt(0, 360), randInt(0, 360)); // Adjust rotation
  });
  mtlLoader.load('assets/models/materials/blackHole.mtl', (mtl) => {
    mtl.preload();
    objLoader.setMaterials(mtl);
  });
  objLoader.load('assets/models/blackHole.obj', (root) => {
    scene.add(root);
    root.position.set(randInt(-5, 5), randInt(-5, 5), randInt(-5, 5));
    root.scale.set(0.3, 0.3, 0.3); // Adjust scale
    root.rotation.set(randInt(0, 360), randInt(0, 360), randInt(0, 360)); // Adjust rotation
  });
  objLoader.load('assets/models/house.obj', (root) => {
    scene.add(root);
    root.position.set(randInt(-5, 5), randInt(-5, 5), randInt(-5, 5));
    root.scale.set(0.1, 0.1, 0.1); // Adjust scale
    root.rotation.set(randInt(0, 360), randInt(0, 360), randInt(0, 360)); // Adjust rotation
  });
  mtlLoader.load('assets/models/materials/addvet.mtl', (mtl) => {
    mtl.preload();
    objLoader.setMaterials(mtl);
  });
  objLoader.load('assets/models/addvet.obj', (root) => {
    scene.add(root);
    root.position.set(randInt(-5, 5), randInt(-5, 5), randInt(-5, 5));
    root.scale.set(0.1, 0.1, 0.1); // Adjust scale
    root.rotation.set(randInt(0, 360), randInt(0, 360), randInt(0, 360)); // Adjust rotation
  });
  mtlLoader.load('assets/models/materials/katana.mtl', (mtl) => {
    mtl.preload();
    objLoader.setMaterials(mtl);
  });
  objLoader.load('assets/models/katana.obj', (root) => {
    scene.add(root);
    root.position.set(randInt(-5, 5), randInt(-5, 5), randInt(-5, 5));
    root.scale.set(0.5, 0.5, 0.5); // Adjust scale
    root.rotation.set(randInt(0, 360), randInt(0, 360), randInt(0, 360)); // Adjust rotation
  });
  mtlLoader.load('assets/models/materials/cowBoyHat.mtl', (mtl) => {
    mtl.preload();
    objLoader.setMaterials(mtl);
  });
  objLoader.load('assets/models/cowBoyHat.obj', (root) => {
    scene.add(root);
    root.position.set(randInt(-5, 5), randInt(-5, 5), randInt(-5, 5));
    root.scale.set(0.5, 0.5, 0.5); // Adjust scale
    root.rotation.set(randInt(0, 360), randInt(0, 360), randInt(0, 360)); // Adjust rotation
  });
  mtlLoader.load('assets/models/materials/shatterdcity.mtl', (mtl) => {
    mtl.preload();
    objLoader.setMaterials(mtl);
  });
  objLoader.load('assets/models/shatterdcity.obj', (root) => {
    scene.add(root);
    root.position.set(randInt(-5, 5), randInt(-5, 5), randInt(-5, 5));
    root.scale.set(0.007, 0.007, 0.007); // Adjust scale
    root.rotation.set(randInt(0, 360), randInt(0, 360), randInt(0, 360)); // Adjust rotation
  });
  mtlLoader.load('assets/models/materials/GAMUR_PERSONAL_COMPUTER.mtl', (mtl) => {
    mtl.preload();
    objLoader.setMaterials(mtl);
  });
  objLoader.load('assets/models/GAMUR_PERSONAL_COMPUTER.obj', (root) => {
    scene.add(root);
    root.position.set(randInt(-5, 5), randInt(-5, 5), randInt(-5, 5));
    root.scale.set(0.1, 0.1, 0.1); // Adjust scale
    root.rotation.set(randInt(0, 360), randInt(0, 360), randInt(0, 360)); // Adjust rotation
  });
  mtlLoader.load('assets/models/materials/ImTheCoolestApplied.mtl', (mtl) => {
    mtl.preload();
    objLoader.setMaterials(mtl);
  });
  objLoader.load('assets/models/ImTheCoolestApplied.obj', (root) => {
    scene.add(root);
    root.position.set(randInt(-5, 5), randInt(-5, 5), randInt(-5, 5));
    root.scale.set(1, 1, 1); // Adjust scale
    root.rotation.set(randInt(0, 360), randInt(0, 360), randInt(0, 360)); // Adjust rotation
  });
}

camera.position.z = 5;

// Add OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);

function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    light.position.set(camera.position.x, camera.position.y, camera.position.z);
    controls.update(); // required for damping, otherwise optional

    renderer.render( scene, camera );
}

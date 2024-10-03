import { Controller } from "@hotwired/stimulus"
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


export default class extends Controller {
  connect() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize( 1000, 500 );
    
    this.element.appendChild( this.renderer.domElement );


    this.loader = new GLTFLoader();

    // Load a glTF resource
this.loader.load('images/test.glb', function ( gltf ) {
		this.scene.add( gltf.scene );
		gltf.animations; // Array<THREE.AnimationClip>
		gltf.scene; // THREE.Group
		gltf.scenes; // Array<THREE.Group>
		gltf.cameras; // Array<THREE.Camera>
		gltf.asset; // Object
	}
)


    this.renderer.setAnimationLoop( this.animate() );


    
  }

  animate() {

    this.renderer.render( this.scene, this.camera );
  }
}

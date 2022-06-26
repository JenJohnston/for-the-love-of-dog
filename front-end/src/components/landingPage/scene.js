import React from 'react'
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";

export default class Scene extends React.Component {
    componentDidMount() {

      // Canvas
      const canvas = document.querySelector("canvas.webgl");

      // Scene
      const scene = new THREE.Scene();
      
      const textureLoader = new THREE.TextureLoader()

      const alphaTexture = textureLoader.load('/alpha3.png')

      /**
       * Lights
       */

      // Ambient light
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);

      scene.add(ambientLight);

      // Directional light
      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.962);
      directionalLight.position.set(-1.987, 1.915, 1.59);

      scene.add(directionalLight);

      directionalLight.castShadow = true;
      directionalLight.shadow.mapSize.width = 1024;
      directionalLight.shadow.mapSize.height = 1024;
      directionalLight.shadow.camera.top = 2;
      directionalLight.shadow.camera.right = 2;
      directionalLight.shadow.camera.bottom = -2;
      directionalLight.shadow.camera.left = -2;
      directionalLight.shadow.camera.near = 1;
      directionalLight.shadow.camera.far = 6;

      // directionalLight.shadow.radius = 10;

      // point light

      const pointLight = new THREE.PointLight(0xffffff, 0.6);

      pointLight.shadow.mapSize.width = 1024;
      pointLight.shadow.mapSize.height = 1024;
      pointLight.shadow.camera.near = 0.1;
      pointLight.shadow.camera.far = 10;

      pointLight.position.x = 0;
      pointLight.position.y = 5;
      pointLight.position.x = 10;

      const pointLightCameraHelper = new THREE.CameraHelper(pointLight.shadow.camera);
      pointLightCameraHelper.visible = false;

      // spot light

      const spotLight = new THREE.SpotLight(0xffffff, 0.5, 10, Math.PI * 0.5);
      spotLight.intensity = 0.887;
      spotLight.castShadow = true;
      spotLight.shadow.mapSize.width = 1024;
      spotLight.shadow.mapSize.height = 1024;
      spotLight.shadow.camera.fov = 30;
      spotLight.shadow.camera.near = 1;
      spotLight.shadow.camera.far = 6;

      spotLight.position.set(0, 2, 2);

      const spotLightCameraHelper = new THREE.CameraHelper(spotLight.shadow.camera);
      spotLightCameraHelper.visible = false;

      scene.add(spotLight, spotLightCameraHelper);

      /**
       *  Models
       */

      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath("/draco/");

      const gltfLoader = new GLTFLoader();
      gltfLoader.setDRACOLoader(dracoLoader);

      let mixer = null;

      gltfLoader.load("/models/schnauzer/schnauzer.gltf", (gltf) => {
        mixer = new THREE.AnimationMixer(gltf.scene);
      
        const action = mixer.clipAction(gltf.animations[0]);
      
        action.play();
      
        gltf.scene.scale.set(4.65, 4.5, 4.5);
        gltf.scene.castShadow = true;
        gltf.scene.receiveShadow = true;
        gltf.scene.traverse(function (child) {
          if (child) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });
        
        scene.add(gltf.scene);
      });

      /**
       * Floor
       */

      const geo = new THREE.PlaneGeometry(10, 5)


      const floor = new THREE.Mesh(
        geo,
        new THREE.MeshStandardMaterial({
          color: "#677522",
          metalness: 0,
          roughness: 0.5,
          alphaMap: alphaTexture,
          transparent: true,
         
        })
      );
      floor.receiveShadow = true;
      floor.rotation.x = -Math.PI * 0.5;
      scene.add(floor);

      /**
       * Sizes
       */
      const sizes = {
        width: window.innerWidth,
        height: 600,
      };

      window.addEventListener("resize", () => {
        // Update sizes
        sizes.width = window.innerWidth;
        sizes.height = window.innerHeight;

        // Update camera
        camera.aspect = sizes.width / sizes.height;
        camera.updateProjectionMatrix();

        // Update renderer
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      });

      /**
       * Camera
       */

      // Base camera

      const camera = new THREE.PerspectiveCamera(
        75,
        sizes.width / sizes.height,
        0.1,
        100
      );
      camera.position.x = -0.069;
      camera.position.y = 1.448;
      camera.position.z = 3.182;
      scene.add(camera);

      // Controls
      // const controls = new OrbitControls(camera, canvas);
      // controls.enableDamping = true;

      /**
       * Renderer
       */

      const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
        alpha: true
      });
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;

      /**
       * Animate
       */

      const clock = new THREE.Clock();
      let previousTime = 0;

      const tick = () => {
        const elapsedTime = clock.getElapsedTime();
        const deltaTime = elapsedTime - previousTime;
        previousTime = elapsedTime;

        // Update controls
        // controls.update();

        // update mixer
        if (mixer !== null) {
          mixer.update(deltaTime);
        }

        // Render
        renderer.render(scene, camera);

        // Call tick again on the next frame
        window.requestAnimationFrame(tick);
      };

      tick();

    }

    render() {
        return (
          <></>
        )
    }
}
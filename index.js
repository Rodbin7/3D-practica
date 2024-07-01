      import * as THREE from 'three';

      function main() {
            const canvas = document.querySelector('#c');
            const renderer = new THREE.WebGLRenderer({antialias: true, canvas});

            const fov = 75;
      	const aspect = 2;
      	const near = 0.1;
      	const far = 5;
      	const camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
      	camera.position.z = 2;

            const scene = new THREE.Scene();
            
            const BoxHeight = 1;
            const BoxWidth = 1;
            const BoxDepth = 1;
            const geometry = new THREE.BoxGeometry(BoxHeight, BoxWidth, BoxDepth);
      
            const material = new THREE.MeshBasicMaterial({color: 0x44aa88});
      
            const cube = new THREE.Mesh(geometry, material);
            scene.add(cube);
      
            renderer.render(scene, camera);
      }
      main();

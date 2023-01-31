import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { VRButton } from 'three/examples/jsm/webxr/VRButton.js';
import { XRControllerModelFactory } from 'three/examples/jsm/webxr/XRControllerModelFactory.js';

const ThreeJsVRDragging = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let container;
    let camera, scene, renderer;
    let controller1, controller2;
    let controllerGrip1, controllerGrip2;

    let raycaster;

    const intersected = [];
    const tempMatrix = new THREE.Matrix4();

    let controls, group;

    const init = () => {
      container = containerRef.current;

      scene = new THREE.Scene();
      scene.background = new THREE.Color(0x808080);

      camera = new THREE.PerspectiveCamera(
        50,
        window.innerWidth / window.innerHeight,
        0.1,
        10
      );
      camera.position.set(0, 1.6, 3);

      controls = new OrbitControls(camera, container);
      controls.target.set(0, 1.6, 0);
      controls.update();

      const floorGeometry = new THREE.PlaneGeometry(4, 4);
      const floorMaterial = new THREE.MeshStandardMaterial({
        color: 0xeeeeee,
        roughness: 1.0,
        metalness: 0.0,
      });
      const floor = new THREE.Mesh(floorGeometry, floorMaterial);
      floor.rotation.x = -Math.PI / 2;
      floor.receiveShadow = true;
      scene.add(floor);

      scene.add(new THREE.HemisphereLight(0x808080, 0x606060));

      const light = new THREE.DirectionalLight(0xffffff);
      light.position.set(0, 6, 0);
      light.castShadow = true;
      light.shadow.camera.top = 2;
      light.shadow.camera.bottom = -2;
      light.shadow.camera.right = 2;
      light.shadow.camera.left = -2;
      light.shadow.mapSize.set(4096, 4096);
      scene.add(light);

      group = new THREE.Group();
      scene.add(group);

      const geometries = [
        new THREE.BoxGeometry(0.2, 0.2, 0.2),
        new THREE.ConeGeometry(0.2, 0.2, 64),
        new THREE.CylinderGeometry(0.2, 0.2, 0.2, 64),
        new THREE.IcosahedronGeometry(0.2, 8),
        new THREE.TorusGeometry(0.2, 0.04, 64, 32),
      ];

      const wallGeometry

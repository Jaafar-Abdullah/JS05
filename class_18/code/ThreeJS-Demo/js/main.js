let step = 0;

function createRenderer() {
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor("#16161D"); // Background of the 3D world
  renderer.shadowMap.enabled = true;
  renderer.setPixelRatio(window.devicePixelRatio || 1);
  const outputDiv = document.querySelector("#output");
  outputDiv.appendChild(renderer.domElement);
  return renderer;
}

function createScene() {
  const scene = new THREE.Scene();
  return scene;
}

function createCamera(scene) {
  const camera = new THREE.PerspectiveCamera(
    45, // Field of View
    window.innerWidth / window.innerHeight, // Ratio
    0.1, // Near (Macro)
    1000 // Far (Horizon)
  );
  camera.position.set(-30, 40, 30); // X, Y, Z
  camera.lookAt(scene.position); // Look at center of scene
  return camera;
}

function addAxesHelper() {
  const axesHelper = new THREE.AxesHelper(40);
  // Red === X axis, Green === Y axis, Blue === Z axis
  return axesHelper;
}

function createCube() {
  // Creating a shape:
  //   Create a Geometry
  //   Create a Material
  //   Create a Mesh === Material + Geometry
  const cubeGeo = new THREE.BoxGeometry(4, 4, 4); // w, h, d
  const cubeMat = new THREE.MeshLambertMaterial({
    color: "#A31621"
    // wireframe: true
  });
  const cube = new THREE.Mesh(cubeGeo, cubeMat);
  cube.position.x = -4; // Move to the left four units
  cube.position.y = 4; // Move it up four units
  cube.position.z = 0;
  cube.castShadow = true;
  cube.receiveShadow = true;
  return cube;
}

function createFloor() {
  const boxGeo = new THREE.BoxGeometry(60, 0.1, 20);
  const boxMat = new THREE.MeshLambertMaterial({
    color: "#CED3DC"
  });
  const box = new THREE.Mesh(boxGeo, boxMat);
  box.position.x = 15;
  box.castShadow = true;
  box.receiveShadow = true;
  return box;
}

function createSphere() {
  // Geometry + Material === Mesh
  const sphereGeo = new THREE.SphereGeometry(4, 30, 30);
  const sphereMat = new THREE.MeshLambertMaterial({
    color: "#016FB9"
  });
  const sphere = new THREE.Mesh(sphereGeo, sphereMat);
  sphere.position.set(20, 4, 0);
  sphere.castShadow = true;
  sphere.receiveShadow = true;
  return sphere;
}

function createLight() {
  const pointLight = new THREE.PointLight("#F3F3F5", 2); // Color, Intensity
  pointLight.position.x = 15;
  pointLight.position.y = 15;
  pointLight.position.z = 0;
  pointLight.castShadow = true;
  pointLight.shadow.mapSize.width = 2048; // Should be a power of 2
  pointLight.shadow.mapSize.height = 2048;
  return pointLight;
}

function addLightHelper(light) {
  const pointLightHelper = new THREE.PointLightHelper(light);
  return pointLightHelper;
}

function createStats() {
  const stats = new Stats();
  const outputDiv = document.querySelector("#stats");
  outputDiv.appendChild(stats.domElement);
  return stats;
}

function createController() {
  const details = {
    lightX: 15,
    lightY: 30,
    lightZ: 0,
    bouncingSpeed: 0.02,
    rotationSpeed: 0.02
  };
  return details;
}

function addGUI(controller) {
  const gui = new dat.GUI();
  gui.add(controller, "lightX", -50, 50);
  gui.add(controller, "lightY", -50, 50);
  gui.add(controller, "lightZ", -50, 50);
  gui.add(controller, "bouncingSpeed", 0, 1);
  gui.add(controller, "rotationSpeed", 0, 1);
  return gui;
}

function addOrbitControls(camera, renderer) {
  const orbitControls = new THREE.OrbitControls(camera, renderer.domElement);
  return orbitControls;
}

const renderer = createRenderer();
const scene = createScene();
const camera = createCamera(scene);
const axes = addAxesHelper();
const cube = createCube();
const floor = createFloor();
const sphere = createSphere();
const light = createLight();
const lightHelper = addLightHelper(light);
const stats = createStats();
const controller = createController();
const gui = addGUI(controller);
addOrbitControls(camera, renderer);

scene.add(axes, cube, floor, sphere, light, lightHelper);

function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

renderer.render(scene, camera);
window.addEventListener("resize", onResize);

function animate() {
  renderer.render(scene, camera);
  stats.update();

  step += controller.bouncingSpeed;

  light.position.x = controller.lightX;
  light.position.y = controller.lightY;
  light.position.z = controller.lightZ;

  sphere.position.x = 20 + 10 * Math.cos(step);
  sphere.position.y = 4 + 10 * Math.abs(Math.sin(step));

  cube.rotation.x += controller.rotationSpeed;
  cube.rotation.y += controller.rotationSpeed;
  cube.rotation.z += controller.rotationSpeed;

  requestAnimationFrame(animate);
}

animate();

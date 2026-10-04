/**
 * 3D Visualization Module
 * Menangani Three.js setup dan rendering bangun ruang
 */

let scene, camera, renderer;
let currentMesh = null;
let highlightedParts = {};

/**
 * Inisialisasi Three.js
 * @param {HTMLElement} canvasElement - canvas untuk rendering
 */
export function init3D(canvasElement) {
  // Scene setup
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xf5f5f5);

  // Camera setup
  const width = canvasElement.clientWidth;
  const height = canvasElement.clientHeight;
  camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
  camera.position.z = 3;

  // Renderer setup
  renderer = new THREE.WebGLRenderer({ 
    canvas: canvasElement, 
    antialias: true, 
    alpha: true 
  });
  renderer.setSize(width, height);
  renderer.setPixelRatio(window.devicePixelRatio);

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(5, 5, 5);
  scene.add(directionalLight);

  // Handle resize
  window.addEventListener('resize', () => onWindowResize(canvasElement));

  // Start animation loop
  animate();
}

/**
 * Gambar bentuk bangun ruang
 * @param {string} shape - 'cylinder', 'cone', atau 'sphere'
 */
export function drawShape(shape) {
  // Hapus mesh lama
  if (currentMesh) {
    scene.remove(currentMesh);
  }

  const material = new THREE.MeshPhongMaterial({
    color: 0x667eea,
    shininess: 100,
    wireframe: false
  });

  let geometry;

  switch (shape) {
    case 'cylinder':
      geometry = new THREE.CylinderGeometry(1, 1, 2, 32);
      break;
    case 'cone':
      geometry = new THREE.ConeGeometry(1, 2, 32);
      break;
    case 'sphere':
      geometry = new THREE.SphereGeometry(1, 32, 32);
      break;
    default:
      geometry = new THREE.CylinderGeometry(1, 1, 2, 32);
  }

  currentMesh = new THREE.Mesh(geometry, material);
  currentMesh.rotation.x = 0.3;
  currentMesh.rotation.z = 0.2;
  scene.add(currentMesh);
}

/**
 * Highlight bagian tertentu dari bangun ruang
 * @param {string} part - 'base', 'lateral', 'height'
 */
export function highlightPart(part) {
  // Reset semua highlight
  if (currentMesh) {
    currentMesh.material.color.setHex(0x667eea);
    currentMesh.material.emissive.setHex(0x000000);
  }

  // Highlight bagian yang dipilih
  if (currentMesh) {
    currentMesh.material.emissive.setHex(0x4c63d2);
  }
}

/**
 * Animation loop
 */
function animate() {
  requestAnimationFrame(animate);

  if (currentMesh) {
    currentMesh.rotation.x += 0.005;
    currentMesh.rotation.z += 0.003;
  }

  renderer.render(scene, camera);
}

/**
 * Handle window resize
 */
function onWindowResize(canvasElement) {
  const width = canvasElement.clientWidth;
  const height = canvasElement.clientHeight;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
}

/**
 * Get current camera position (untuk zoom effect)
 */
export function getCameraDistance() {
  return camera.position.z;
}

/**
 * Set camera distance (untuk zoom)
 */
export function setCameraDistance(distance) {
  camera.position.z = Math.max(1, Math.min(10, distance));
}

/**
 * Reset camera ke posisi awal
 */
export function resetCamera() {
  camera.position.z = 3;
  if (currentMesh) {
    currentMesh.rotation.x = 0.3;
    currentMesh.rotation.z = 0.2;
  }
}

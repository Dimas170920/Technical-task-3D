import * as THREE from 'three';
import { useThree } from '@react-three/fiber';

function MeshList({ meshData }) {
  const { scene } = useThree();

  const meshes = meshData.map((data, index) => {
    const { geometry, material, scale } = data;
    const mesh1 = new THREE.Mesh(geometry, material);
    mesh1.position.set(-10 + index + index, -5, 0)
    mesh1.scale.set(scale, scale, scale)
    return mesh1
  });


  meshes.forEach(mesh => {
    scene.add(mesh);
  });

  return null;
}

export default MeshList;

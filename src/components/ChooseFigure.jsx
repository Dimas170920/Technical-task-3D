import React from "react";
import Cube from './Cube'
import Sphere from './Sphere'
import * as THREE from 'three';



 const ChooseFigure = (figure) => {
const figures = {
    cube: { geometry: new THREE.BoxGeometry(), material: new THREE.MeshBasicMaterial({ color: 'red' }) },
    sphere: { geometry: new THREE.SphereGeometry(), material: new THREE.MeshBasicMaterial({ color: 'green' }) },
}
    return (
        figures[figure]
    );
  }

  export default ChooseFigure
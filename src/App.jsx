import React, { useState } from 'react';
import * as THREE from 'three';
import { Canvas } from "@react-three/fiber";
import { Button, InputLabel, MenuItem, FormControl, Select, Box } from '@material-ui/core';
import CloseSharpIcon from '@material-ui/icons/CloseSharp';
import './App.css'
import MeshList from './components/Figures'


const ChooseFigure = (figure, scale) => {
  const figures = {
      cube: { geometry: new THREE.BoxGeometry(1, 1, 1), material: new THREE.MeshBasicMaterial({ color: 'lightgrey' }) },
      sphere: { geometry: new THREE.SphereGeometry(0.3, 32), material: new THREE.MeshBasicMaterial({ color: 'lightgrey' }) },
      piramide: { geometry: new THREE.ConeGeometry(2, 1, 3), material: new THREE.MeshBasicMaterial({ color: 'lightgrey' }) },
  }
      return (
          {...figures[figure], scale: scale, id:figures[figure].geometry.uuid }
      );
    }
  


function App() {
  const [figures, setFigures] = useState([]) 
  const [geometry, setGeometry] = React.useState('');
  const [scale, setScale] = React.useState(1);


  const handleGeometryChange = (event) => {
    setGeometry(event.target.value);
  };

  const handleScaleChange = (event) => {
    setScale(event.target.value);
  };

  const handleClick = () => {
    setFigures((prevState) => {
      return [...prevState,ChooseFigure( geometry, scale)]
    }
     
    );
  };

  const handleDelete = () => {
    setFigures((prevState) => {
      return [...prevState, ChooseFigure( geometry, scale)]
    }
     
    );
  };



  const list1 = figures.map((fig) => {
    return (<div className='card'><div>{fig.geometry.uuid} <CloseSharpIcon onClick={ () => {
      setFigures((prevState) => {
        return [prevState.filter((word => word.id !== fig.geometry.uuid))]
      }
       
      );
    }}/></div></div>)
  })



  return (
    <>
    <Box className={'box'}>
      <FormControl >
        <InputLabel id="demo-simple-select-label" className='label'>Geometry</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={geometry}
          label="Geometry"
          onChange={handleGeometryChange}
          className='select'
        >
          <MenuItem value={'cube'}>Cube</MenuItem>
          <MenuItem value={'sphere'}>Sphere</MenuItem>
          <MenuItem value={'piramide'}>Piramide</MenuItem>

        </Select>
      </FormControl>
      <FormControl>
      <InputLabel id="demo-simple-select-label" className='label'>Scale</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={scale}
          label="Scale"
          onChange={handleScaleChange}
          className='select'
        >
          <MenuItem value={0.25}>25%</MenuItem>
          <MenuItem value={0.5}>50%</MenuItem>
          <MenuItem value={1}>100%</MenuItem>
          <MenuItem value={1.5}>150%</MenuItem>
          <MenuItem value={2}>200%</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained"onClick={handleClick} >Create</Button>
      </Box>


      <Canvas camera={{
    fov: 90,
    position: [3, 3, 9],
  }}>
        <ambientLight intensity={0.001} />
        <directionalLight position={[-3, 100, 0.5]} intensity={0.5} />
        <MeshList meshData={figures}/>
      </Canvas>
      <div className='list' style={{'top' : -50*figures.length}}> {list1}</div>
    </>
  );
}

export default App;

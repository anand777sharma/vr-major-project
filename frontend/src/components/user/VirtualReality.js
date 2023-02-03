import Box from "./"
import {Canvas} from "@react-three/fiber";

const VirtualReality = () => {
  return (

    <div>
         <Canvas className="canvas" height= '500px'>
            <Box/>
         </Canvas>
    </div>

  )
}

export default VirtualReality
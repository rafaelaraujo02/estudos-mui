import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';

export default function App() {
const [image, setImage] = useState(
    "https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
);
useEffect(() => {
    setImage(
        "https://post.healthline.com/wp-content/uploads/2020/08/3180-Pug_green_grass-732x549-thumbnail-732x549.jpg"
    );
});

return (
    <div className="App">
        <img src={image} alt="okay" />
        <input
                accept="image/*"
                style={{ display: 'none' }}
                id="btn"
                type="file"
                
        />
        <label htmlFor="btn">
            <Button variant="raised" component="span" id='btn'>
                <CameraAltOutlinedIcon fontSize="large" style={{color: "#094e6f"}}/>
            </Button>
        </label> 
    </div>
);
}
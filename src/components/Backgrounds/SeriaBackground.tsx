import React from "react";
import Slider from "../Slider";

const SeriaBackground = () => {
    return(
        <div className="w-full h-screen bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: 'url("/assets/seriabg.jpg")' }}>
            <div className="w-full h-full bg-bottom bg-no-repeat"
                style={{ backgroundImage: 'url("/assets/seria1.png")', backgroundSize: '42%', backgroundPosition: '42% bottom'}}>
                <Slider Color="#FFD700" Colors="#B8860B" Colorl="#F4A460"/>
            </div>
        </div>
    )
}

export default SeriaBackground;
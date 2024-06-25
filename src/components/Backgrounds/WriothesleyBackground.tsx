import React from "react";
import Slider from "../Slider";

const WriothesleyBackground = () => {
    return(
        <div className="w-full h-screen bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: 'url("/assets/wriothesleybg.jpg")' }}>
            <div className="w-full h-full bg-bottom bg-no-repeat"
                style={{ backgroundImage: 'url("/assets/wriothesley.png")', backgroundSize: '45%', backgroundPosition: '42% bottom'}}>
                <Slider Color="#960018" Colors="#8B0000" Colorl="#FF6347"/>
            </div>
        </div>
    )
}

export default WriothesleyBackground;
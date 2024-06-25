"use client"

import React, {useEffect, useState} from "react";

import TextBoX from "../components/TextBox";
import WriothesleyBackground from "@/Backgrounds/WriothesleyBackground";
import SeriaBackground from "@/Backgrounds/SeriaBackground";

const Home: React.FC = () => {

  // const [SelectedBackground, setSelectedBackground] = useState<React.FC | null>(null);

  // useEffect(() => {
  //   const backgrounds = [WriothesleyBackground, SeriaBackground];
  //   const randomBackgrounds = backgrounds[Math.floor(Math.random() * backgrounds.length)];

  //   setSelectedBackground(() => randomBackgrounds); //Commented to remove the random effect while dev
  // }, []);

  // if (!SelectedBackground) return null;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0">
      <TextBoX string="This website was created to try to recreate different components found on the web"/>
      <SeriaBackground/>
      <TextBoX string="Bottom Line"/>
    </main>
  );
}


export default Home;

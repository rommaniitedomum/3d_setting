import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import ModelView from "./ModelView";
import { yellowImg } from "./../utils/index";

import * as THREE from "three";

const Model = () => {
  useGSAP(() => {
    gsap.to("#heading", { y: 0, opacity: 1 });
  }, []);

  const [size, setSize] = useState("small");
  const [model, setModel] = useState({
    title: "iPhone 15 pro in Natural Titanium",
    color: ["#8f8a81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  });

  // 기기 크기에 따른 컨트롤 요소 저장
  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();

  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  // rotation states
  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setlargeRotation] = useState(0);

  return (
    <section className="">
      <div className="screen-max-width">
        <h1
          id="heading"
          className="section-heading">
          Take a closer look.
        </h1>
      </div>

      <div className="flex flex-col items-center mt-5">
        <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative bg-slate-600">
          <ModelView
            index={1}
            groupRef={small}
            controlRef={cameraControlSmall}
            setRotationSize={setSmallRotation}
            gsapType="view1"
            item={model}
            size={size}
          />
        </div>
      </div>
    </section>
  );
};

export default Model;

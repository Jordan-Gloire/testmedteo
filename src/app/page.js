import Image from "next/image";
import Icon from "@ant-design/icons";
import { Carousel } from "antd";
import Meteo from "./Meteo/page";
import imgdeFond from "../../public/fondHome (1).jpg";
import "animate.css";
import tinycolor from "@ctrl/tinycolor";

import Link from "next/link";
import { hslToRgb } from "../../../node_modules/@ctrl/tinycolor/dist/conversion";
export default function Home() {
  const contentStyle = {
    color: "#fff",
    textAlign: "center",
  };
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const formattedTime = `${hours < 10 ? "0" : ""}${hours}h:${
    minutes < 10 ? "0" : ""
  }${minutes}`;

  const dateActuelle = new Date();
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  const dateFormatee = dateActuelle.toLocaleDateString("fr-FR", options);
  return (
    <>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/60 z-[1] flex justify-center items-center flex-col animate__animated animate__fadeIn">
        <p className="text-6xl text-white font-bold">{formattedTime}</p>
        <p className="text-white py-3">{dateFormatee}</p>
        <Carousel autoplay className="w-screen text-white text-2xl">
          <div>
            <h3 style={contentStyle}>
              Restez hydraté Évitez les activités physiques intenses
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              Portez des vêtements légers <br />
              Mangez léger
            </h3>
          </div>

          <div>
            <h3 style={contentStyle}>
              Évitez les heures les plus chaudes Utilisez un
              ventilateur/climatisation
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              Pour plus d'astuces consultez un professionnel de santé.
            </h3>
          </div>
        </Carousel>
        <Link
          href={`/Meteo`}
          className="bg-cyan-600 mt-8 text-white hover:text-black duration-700 ease-in rounded-md outline-none border-none py-2 px-6 text-lg"
        >
          Voir la météo
        </Link>
      </div>
      <Image
        src={imgdeFond}
        alt="ok"
        className="h-screen w-screen object-cover animate__animated animate__fadeIn"
      />
    </>
  );
}

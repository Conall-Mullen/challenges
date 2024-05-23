import GlobalStyle from "../styles";
import { useState } from "react";
import Layout from "../components/Layout";
import Lights from "@/components/Lights";

export default function App({ Component, pageProps }) {
  const initialLights = [
    { id: 0, name: "Living Room", isOn: false },
    { id: 1, name: "Kitchen", isOn: false },
    { id: 2, name: "Bedroom", isOn: false },
    { id: 3, name: "Bathroom", isOn: false },
    { id: 4, name: "Garage", isOn: false },
    { id: 5, name: "Porch", isOn: false },
    { id: 6, name: "Garden", isOn: false },
    { id: 7, name: "Office", isOn: false },
  ];
  const [lights, setLights] = useState(initialLights);

  function handleToggle(_id) {
    setLights((lights) =>
      lights.map((light) => {
        if (light.id === id) {
          return { ...light, isOn: !light.isOn };
        }
        return light;
      })
    );
  }

  return (
    <Layout>
      <GlobalStyle />
      <Component lights={lights} handleToggle={handleToggle} {...pageProps} />
    </Layout>
  );
}

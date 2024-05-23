import { useEffect, useState } from "react";
import useSWR from "swr";
import { mutate } from "swr";
import Controls from "../Controls/index";
import Map from "../Map/index";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function ISSTracker() {
  // const [coords, setCoords] = useState({
  //   longitude: 0,
  //   latitude: 0,
  // });

  // async function getISSCoords() {
  //   try {
  //     const response = await fetch(URL);
  //     if (response.ok) {
  //       const data = await response.json();
  //       setCoords({ longitude: data.longitude, latitude: data.latitude });
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     getISSCoords();
  //   }, 5000);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);
  const fetcher = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      const error = new Error("An error occurred while fetching the data.");

      error.info = await res.json();
      error.status = res.status;
      throw error;
    }

    return res.json();
  };

  const { data, error, isLoading, mutate } = useSWR(URL, fetcher, {
    refreshInterval: 1000,
  });
  console.log(data);

  function handleReload(data) {
    console.log("Clicked");
    mutate(data);
  }

  return (
    <main>
      <Map longitude={data.longitude} latitude={data.latitude} />
      <Controls
        longitude={data.longitude}
        latitude={data.latitude}
        onRefresh={() => handleReload(data)}
      />
    </main>
  );
}

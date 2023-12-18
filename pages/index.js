import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";
import HomeScreen from "./screens/Home/Home";
export default function Home() {
  const [number, setNumber] = useState(0);
  useEffect(() => {
    // const getData = async () => {
    //   const data = await fetch("/api/getRandomNumber", { method: "get" });
    //   const response = data.json();
    //   console.log("response", response);
    // };
    // getData();
  }, []);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeScreen />
    </div>
  );
}

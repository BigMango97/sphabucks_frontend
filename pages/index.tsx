import axios from "axios";
import Head from "next/head";
import { useState, useEffect } from "react";

import FirstHeader from "@/components/sections/FirstHeader";
import SlideCircleProduct from "@/components/layouts/SlideCircleProduct";
import SlideSquareProduct from "@/components/layouts/SlideSquareProduct";
import SliderContainer from "@/components/layouts/Slide";
import TopScrollBtn from "@/components/ui/TopScrollBtn";

import { recommandData } from "@/types/type";


export default function Home() {
  const [data, setData] = useState<recommandData[]>([]);

  useEffect(() => {
    const BaseUrl = process.env.baseApiUrl;
    axios
      .get(`${BaseUrl}/api/v1/event-products/get/recommendMD`)
      .then((res) => {
        console.log(res);
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Head>
        <title>starbucks main</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="/favic
        rfon.ico"
        />
      </Head>
      <TopScrollBtn />
      <FirstHeader />
      <SliderContainer />
      <SlideCircleProduct />
      {data &&
        data.map((item) => (
          <SlideSquareProduct
            key={item.id}
            title={item.name}
            itemData={item.data}
            description={item.description}
          />
        ))}
    </>
  );
}

import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  return <div>{router.query.homePageSection}</div>;
};

export default Home;

import {  About, Contacts, Banner } from "./components/index";
import Promotions from "./components/Promotions";

export default function Home() {
  return (
    <>
      <Banner />
      <Promotions />
      <About />
      <Contacts />
    </>
  );
  }

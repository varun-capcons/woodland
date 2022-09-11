import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className=" container h-screen w-full justify-center items-center">
        <h1 className="text-3xl">Coming Soon</h1>
      </div>
      <Footer />
    </>
  );
}

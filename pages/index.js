import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className="h-screen container">Coming Soon</div>
      <Footer />
    </>
  );
}

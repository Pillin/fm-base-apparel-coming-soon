import React from "react";
import CommingSoonCard from "./components/Cards/CommingSoon";
import "./styles.css";

export default function App() {
  const data = {
    logo: {
      mobile: "/images/logo.svg",
      desktop: "/images/logo.svg",
      alt: ""
    },
    headerImage: {
      mobile: "/images/hero-mobile.jpg",
      desktop: "/images/hero-desktop.jpg",
      alt: ""
    },
    title: "We're",
    subTitle: "Comming Soon",
    content: `Hello fellow shoppers! We're currently building our new fashion store.
    Add your email below to stay up-to-date with announcements and our launch deals.`
  };
  return (
    <div className="App">
      <CommingSoonCard {...data} />
    </div>
  );
}

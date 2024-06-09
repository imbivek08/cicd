import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Image from "next/image";
import ContactPage from "./contact/page";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Projects />
      <Skills />
      <ContactPage />
    </div>
  );
}

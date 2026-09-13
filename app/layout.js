//import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import "./globals.css";
import Header from "@/components/Header";

//const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bivek Yadav | Full-Stack Developer",
  description:
    "Bivek Yadav is a full-stack developer passionate about building scalable APIs, reliable applications, and elegant solutions to complex problems.",
  icons: {
    icon: "/fevicon.jpeg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

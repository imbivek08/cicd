//import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import "./globals.css";
import Header from "@/components/Header";

//const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bivek Yadav | DevOps Engineer",
  description:
    "Bivek Yadav is a DevOps engineer focused on cloud infrastructure, automation, reliable delivery, and full-stack application development.",
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

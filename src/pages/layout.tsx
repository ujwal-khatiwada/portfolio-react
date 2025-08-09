/* eslint-disable @next/next/next-script-for-ga */
import "../styles/globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Layout, FixedPlugin } from "../components";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ujwal Khatiwada",
  description:
    "Introducing Ujwal's Portfolio, a versatile and stylish portfolio built on the foundation of Tailwind CSS and Material Tailwind.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          data-site="ujwalkhatiwada.com.np"
        ></script>
        <link rel="shortcut icon" href="/ujwal.jpg" type="image/jpg" />
      </head>
      <body className={roboto.className}>
        <Layout>
          {children}
          <FixedPlugin />
        </Layout>
      </body>
    </html>
  );
}

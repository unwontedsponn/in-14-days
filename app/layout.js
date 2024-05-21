import { Work_Sans } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "IN 14 DAYS",
  description: "Publishing company.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={workSans.className}>{children}</body>
    </html>
  );
}

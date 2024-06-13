import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home",
  description: "e-quiz agama",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-gray-900"}>
        <main className="container mx-auto">
          <div className="flex min-h-screen flex-col items-center justify-center">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm flex flex-col">
              {children}
            </div>
          </div>
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7252869313064193"
            crossorigin="anonymous"
          ></script>
        </main>
        <footer className="fixed bottom-0 w-full">
          <p className="text-white text-center font-mono">
            Developed by Furqon August Seventeenth
          </p>
        </footer>
      </body>
    </html>
  );
}

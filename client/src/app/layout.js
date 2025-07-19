import ToasterProvider from "@/store/providers/ToasterProvider";
import "./globals.css";

export const metadata = {
  title: "Gift Card ETH",
  description: "Buy gift cards with ETH",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <ToasterProvider>{children}</ToasterProvider>
      </body>
    </html>
  );
}

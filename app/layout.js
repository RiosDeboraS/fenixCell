import "./globals.css";

export const metadata = {
  title: "FenixCell",
  description: "FenixCell",
  icons: {
    icon: ["/WhatsApp-Image-2024-01-30-at-13.13.01-_1_.ico"],
    apple: ["/WhatsApp-Image-2024-01-30-at-13.13.01-_1_.ico"],
    shortcut: ["/WhatsApp-Image-2024-01-30-at-13.13.01-_1_.ico"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import "./global.css";

export const metadata = {
  title: "LOVA — Smart Menstrual Health & Wellness",
  description:
    "Track cycles, understand phases, connect with experts and Kungwi mentors.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
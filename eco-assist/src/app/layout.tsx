import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EcoAssist",
  description: "um futuro melhor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}

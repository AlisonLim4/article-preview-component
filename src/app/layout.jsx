import "./globals.css";

export const metadata = {
  title: "Frontend Mentor | article-preview-component",
  description: "Chalenge solution",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="grid place-content-center items-center justify-center bg-grayish-blue-light">
        {children}
      </body>
    </html>
  );
}

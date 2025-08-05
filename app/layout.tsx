export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body style={{ margin: 0, fontFamily: 'sans-serif', backgroundColor: '#000', color: '#fff' }}>
        {children}
      </body>
    </html>
  );
}
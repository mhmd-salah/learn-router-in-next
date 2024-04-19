export const metadata = {
  title: "home page",
  description:"from main layout"
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        { children }
      </body>
    </html>
  )
}

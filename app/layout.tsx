export const metadata = {
  title: {
    absolute: "",
    default: "next js tutorial - condevolution",
    template:"%s | codevolution"
  },
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
        hello deer
        { children }
      </body>
    </html>
  )
}


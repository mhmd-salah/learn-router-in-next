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
        <header
          className=" bg-slate-100 shadow-md text-black sticky top-0"
        >
          <div className="py-5 px-20 flex justify-between items-center">
            <a href="logo" className="text-2xl font-bold text-sky-500 ">ozzx</a>
            <ul className="flex  gap-2">
              <li>home</li>
              <li>about</li>
              <li>contact</li>
            </ul>
          </div>
        </header>
        { children }
      </body>
    </html>
  )
}


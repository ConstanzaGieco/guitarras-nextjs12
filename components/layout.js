import Head from "next/head"
import Header from "./header"
import Footer from "./footer"

export default function Layout({children, title = '', description = ''}) {
  return (
    <>
      <Head>
        <title>{`GuitarLA - ${title}`}</title>
        <meta name="decription" content={description}></meta>
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  )
}

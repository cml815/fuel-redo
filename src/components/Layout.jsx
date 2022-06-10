import MainNav from './MainNav'
import Footer from './Footer'

export default function Layout( {children}) {
  return (
    <>
      <MainNav />
      <main>{children}</main>
      <Footer />
    </>
  )
}


import Navbar from '../components/NavbarUI/Navbar';
import Footer from '../components/Footer';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

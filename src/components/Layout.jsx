import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div className="min-h-screen flex flex-col bg-dark-900 text-dark-100">
    <Navbar />
    <main className="flex-grow p-4">
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;
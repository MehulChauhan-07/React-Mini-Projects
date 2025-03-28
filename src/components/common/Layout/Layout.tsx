import { Outlet } from "react-router-dom";
import Navbar from "@/components/common/Navigation/Navbar";
import Footer from "@/components/common/Layout/Footer";

const Layout = () => {
  return (
    // <div className="flex flex-col min-h-screen">
    <div className="flex min-h-screen flex-col bg-background font-sans antialiased">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

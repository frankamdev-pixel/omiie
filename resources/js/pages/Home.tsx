import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ServicesGrid from "@/components/ServicesGrid";
import ServicesSwiper from "@/components/ServicesSwiper";
import WhatsAppButton from "@/components/WhatsappButton";

export default function Home() {
  return (
    <div className="test">
      <Navbar/>
        <Hero/>
        <ServicesSwiper/>
        <ServicesGrid/>
        <WhatsAppButton />
      <Footer/>
    </div>
  );
}
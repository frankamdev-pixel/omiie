import ActionCall from '@/components/ActionCall';
import DashboardAppercu from '@/components/DashboardAppercu';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import ServicesGrid from '@/components/ServicesGrid';
import Testimonial from '@/components/Testimonial';
import WhatsAppButton from '@/components/WhatsappButton';
import WhyUs from '@/components/WhyUs';

export default function Home() {
    return (
        <div className="test">
            <Navbar />
            <div className="bg-[#C0CCFE]">
                <Hero />
                {/* <ServicesSwiper /> */}
                <WhyUs />
                <DashboardAppercu/>
                <Testimonial/>
                <ActionCall />
                <ServicesGrid />
                <DashboardAppercu/>
            </div>
            <WhatsAppButton />
            <Footer />
        </div>
    );
}



import { AppShowcase } from "@/app/components/lova/AppShowcase";
import { Community } from "@/app/components/lova/Community";
import { CyclePhases } from "@/app/components/lova/CyclePhases";
import { Experts } from "@/app/components/lova/Experts";
import { FAQ } from "@/app/components/lova/FAQ";
import { Features } from "@/app/components/lova/Features";
import { Footer } from "@/app/components/lova/Footer";
import { Hero } from "@/app/components/lova/Hero";
import { Navbar } from "@/app/components/lova/Navbar";
import { Testimonials } from "@/app/components/lova/Testimonials";
import { DownloadComponent } from "./components/lova/Download";

export default function Home() {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <Navbar />

            <main>
                <Hero />
                <Features />
                <CyclePhases />
                <Community />
                <Experts />
                <AppShowcase />
                <Testimonials />
                <DownloadComponent />
                <FAQ />
            </main>

            <Footer />
        </div>
    );
}
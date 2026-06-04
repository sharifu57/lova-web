import { AppShowcase } from "./components/lova/AppShowcase";
import { Community } from "./components/lova/Community";
import { CyclePhases } from "./components/lova/CyclePhases";
import { Download } from "./components/lova/Download";
import { Experts } from "./components/lova/Experts";
import { FAQ } from "./components/lova/FAQ";
import { Features } from "./components/lova/Features";
import { Footer } from "./components/lova/Footer";
import { Hero } from "./components/lova/Hero";
import { Navbar } from "./components/lova/Navbar";
import { Testimonials } from "./components/lova/Testimonials";




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
        <Download />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}


// export default function Home()({
//   head: () => ({
//     meta: [
//       { title: "LOVA — Understand Your Cycle. Empower Your Health." },
//       {
//         name: "description",
//         content:
//           "LOVA is a smart menstrual health platform for women — period tracking, cycle insights, Kungwi mentors, verified experts and a supportive community.",
//       },
//       { property: "og:title", content: "LOVA — Smart Menstrual Health & Wellness" },
//       {
//         property: "og:description",
//         content:
//           "Track cycles, understand phases, chat with Kungwi mentors and connect with women who get it.",
//       },
//       { property: "og:type", content: "website" },
//     ],
//   }),
//   component: Index,
// });

// function Index() {
//   return (
//     <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
//       <Navbar />
//       <main>
//         <Hero />
//         <Features />
//         <CyclePhases />
//         <Community />
//         <Experts />
//         <AppShowcase />
//         <Testimonials />
//         <Download />
//         <FAQ />
//       </main>
//       <Footer />
//     </div>
//   );
// }

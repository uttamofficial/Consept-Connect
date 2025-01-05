import ShiftingCountdown from "@/components/countdown"
import CountDownTimerHeader from "@/components/countdown-header"
import CTA from "@/components/CTA"
import GetStarted from "@/components/get-start"
import { LayoutGridDemo } from "@/components/grid-layout-view"
import { HappyRect } from "@/components/happy-rectangle"
import HeroSection from "@/components/hero-sec"
import { HorizontalScrollCarousel } from "@/components/horizontal-crsl"
import Intro from "@/components/intros"
import { MileStoneDemo } from "@/components/milestone/milestone-view"
import { ScrollProvider } from "@/components/providers/scroll-view"
import StartUpDemo from "@/components/startup-demo/startup-demo"

export default function IndexPage() {
  return (
    <div className="overflow-hidden">
      <ScrollProvider>
        {/* Main Page Layout */}
        <section className="flex flex-col gap-8">
          
          {/* Hero Section */}
          <div className="overflow-hidden">
            <HeroSection />
          </div>

          {/* Get Started Section */}
          <div>
            <GetStarted />
          </div>

          {/* Milestone Demo Section */}
          <div className="overflow-hidden">
            <MileStoneDemo />
          </div>

          {/* Intro Section */}
          <div>
            <Intro />
          </div>

          {/* Happy Rectangle Section */}
          <div className="overflow-hidden">
            <HappyRect />
          </div>

          {/* Countdown Timer Section */}
          <div className="mx-auto text-center">
            <CountDownTimerHeader />
            <ShiftingCountdown />
          </div>

          {/* Text + Horizontal Scroll Carousel */}
          <div className="grid items-center gap-6 md:grid-cols-2 md:gap-10">
            {/* Text Section */}
            <div className="flex justify-center px-4 text-center md:justify-start md:px-0">
              <p className="pt-40 text-2xl font-medium6leading-tight bg-gradient-to-tr from-[#E0B379] to-[#e8eaed] bg-clip-text text-transparent sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl">
                {/* Mobile View Text */}
                <span className="block md:hidden">
                Think It, We’ll Make It – Innovation Starts Here. <br />
                <br />
                Experience the ultimate innovation crafted for you - where your ideas fuel our creativity to create something truly extraordinary.
                </span>
                {/* Web/Desktop View Text */}
                <span className="hidden md:block">
                  Experience the ultimate innovation crafted for you
                </span>
              </p>
            </div>

            {/* Horizontal Scroll Carousel Section */}
            <div className="overflow-hidden">
              <HorizontalScrollCarousel />
            </div>
          </div>

          {/* Grid Layout Demo */}
          <div>
            <LayoutGridDemo />
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          {/* Startup Demo Section */}
          <div>
            <StartUpDemo />
          </div>

          {/* Call-To-Action Section */}
          <div>
            <CTA />
          </div>
        </section>
      </ScrollProvider>
  </div>
  )
}

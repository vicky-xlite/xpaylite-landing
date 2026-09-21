import Hero from "../components/Hero"
import ServicesSection from "../components/ServicesSection"
import CTASection from "../components/CTASection"
import BusinessSection from "../components/BusinessSection"
import WhyChooseSection from "../components/WhyChooseSection"
import TestimonialSection from "../components/TestimonialSection"
import DownloadSection from "../components/DownloadSection"
import AnimateUp from "../utils/AnimateUp"

function Home() {
  return (
    <>
      <Hero />
      <AnimateUp>      <ServicesSection /> </AnimateUp>
      <AnimateUp><CTASection /></AnimateUp>
      <AnimateUp><BusinessSection /></AnimateUp>
      <WhyChooseSection />
      <AnimateUp><TestimonialSection /></AnimateUp>
      <AnimateUp><DownloadSection /></AnimateUp>
    </>
  )
}

export default Home
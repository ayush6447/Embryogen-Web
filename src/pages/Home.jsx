import PageMeta from '../components/PageMeta';
import Hero from '../components/Hero';
import Positioning from '../components/Positioning';
import Problem from '../components/Problem';
import Limitations from '../components/Limitations';
import Solution from '../components/Solution';
import HowItWorks from '../components/HowItWorks';
import ExplainabilityShowcase from '../components/ExplainabilityShowcase';
import WhyEmbryogen from '../components/WhyEmbryogen';
import WhoItsFor from '../components/WhoItsFor';
import TrustNote from '../components/TrustNote';
import CTA from '../components/CTA';
import { meta } from '../data/content';

export default function Home() {
  return (
    <>
      <PageMeta {...meta.home} path="/" />
      <Hero />
      <Positioning />
      <Problem />
      <Limitations />
      <Solution />
      <HowItWorks />
      <ExplainabilityShowcase />
      <WhyEmbryogen />
      <WhoItsFor />
      <TrustNote />
      <CTA />
    </>
  );
}

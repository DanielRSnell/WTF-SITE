import { Verified } from 'lucide-react';

import { Meteors } from '@/components/magicui/meteors';
import { TechStackVisualization } from '@/components/ui/tech-stack-visualization';

export function Testimonials() {
  return (
    <section className="container">
      <div className="bordered-div-padding relative border border-t-0">
        <div className="absolute top-0 left-full -mt-0.25 hidden h-[calc(100%+2px)] w-[50vw] overflow-hidden border-y md:block">
          <Meteors
            number={1000}
            angle={65}
            maxDuration={20}
            minDuration={5}
            className="opacity-10 [&>div]:opacity-10"
          />
        </div>
        {/* Tech stack header */}
        <h2 className="text-muted-foreground flex items-center gap-2 text-sm leading-snug font-medium md:text-base">
          <Verified className="size-5" />
          Our WooCommerce Performance Stack
        </h2>

        {/* Tech stack visualization */}
        <div className="mt-6 md:mt-8 lg:mt-10">
          <TechStackVisualization />
        </div>
      </div>
      {/* Testimonial */}
      <blockquote className="bordered-div-padding flex flex-col justify-between gap-8 border border-t-0 md:flex-row">
        <p className="lg:text-4xxl font-weight-display flex-7 text-2xl leading-snug tracking-tighter md:text-3xl">
          The custom metal fabrication business needed speed that matched our craftsmanship. WooThatsFast delivered exactly that - our site performs as precisely as our metalwork.
        </p>

        <footer className="flex-6 self-end">
          <div className="flex items-center gap-4">
            <img
              src="/images/testimonials/robert-austin.webp"
              alt="John P"
              width={40}
              height={40}
              className="rounded-full"
            />
            <cite className="text-sm font-medium not-italic md:text-lg lg:text-xl">
              John P, Owner at TexasMetalWorks
            </cite>
          </div>
        </footer>
      </blockquote>
    </section>
  );
}

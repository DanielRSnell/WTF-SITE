import { FaGithub } from 'react-icons/fa6';

import { Button } from '@/components/ui/button';

export function ProductHero() {
  return (
    <section className="container">
      <div className="bordered-div-padding flex flex-col items-center gap-8 border-x text-center md:gap-10 lg:gap-16 lg:!py-25">
        {/* Main Heading */}
        <div className="max-w-4xl space-y-6 md:space-y-8 lg:space-y-12">
          <h1 className="font-weight-display text-2xl leading-snug tracking-tighter md:text-3xl lg:text-5xl">
            WooCommerce Performance Optimization
          </h1>
          <p className="text-muted-foreground mx-auto max-w-[700px] text-sm leading-relaxed md:text-lg lg:text-xl">
            Accelerate your WooCommerce store with expert performance optimization services that boost speed, improve Core Web Vitals, and increase conversions.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          <Button asChild className="md:px-10">
            <a href="#">Get Performance Audit</a>
          </Button>
          <Button asChild variant="outline">
            <a href="#">
              <FaGithub className="size-5" />
              View Case Studies
            </a>
          </Button>
        </div>
      </div>
      <div className="bordered-div-padding flex items-center justify-center border">
        <img
          src="/images/product/hero.webp"
          alt="WooCommerce performance optimization dashboard"
          width={1320}
          height={743}
          className="mask-b-from-55% mask-b-to-95%"
        />
      </div>
    </section>
  );
}

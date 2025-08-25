import { Verified } from 'lucide-react';

import { Marquee } from '@/components/magicui/marquee';
import { Meteors } from '@/components/magicui/meteors';

const companies = [
  {
    name: 'Premium Pet Products Co.',
    logo: { src: '/images/testimonials/pet-store.svg', width: 120, height: 26 },
    href: '#',
  },
  {
    name: 'Elite Fitness Gear',
    logo: { src: '/images/testimonials/fitness.svg', width: 105, height: 24 },
    href: '#',
  },
  {
    name: 'Artisan Coffee Roasters',
    logo: { src: '/images/testimonials/coffee.svg', width: 100, height: 22 },
    href: '#',
  },
  {
    name: 'Handcrafted Jewelry',
    logo: { src: '/images/testimonials/jewelry.svg', width: 88, height: 20 },
    href: '#',
  },
  {
    name: 'Tech Accessories Hub',
    logo: { src: '/images/testimonials/tech.svg', width: 105, height: 23 },
    href: '#',
  },
  {
    name: 'Organic Wellness Store',
    logo: { src: '/images/testimonials/wellness.svg', width: 125, height: 27 },
    href: '#',
  },
];

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
        {/* Trusted by text */}
        <h2 className="text-muted-foreground flex items-center gap-2 text-sm leading-snug font-medium md:text-base">
          <Verified className="size-5" />
          Trusted by Growing WooCommerce Businesses
        </h2>

        {/* Company logos */}
        <Marquee className="mt-6 [--gap:8rem] md:mt-8 lg:mt-10 xl:[&_div]:[animation-play-state:paused]">
          {companies.map((company) => (
            <a
              key={company.name}
              href={company.href}
              className="py-2.5 transition-opacity hover:opacity-80"
              target="_blank"
            >
              <img
                src={company.logo.src}
                alt={company.name}
                width={company.logo.width}
                height={company.logo.height}
              />
            </a>
          ))}
        </Marquee>
      </div>
      {/* Testimonial */}
      <blockquote className="bordered-div-padding flex flex-col justify-between gap-8 border border-t-0 md:flex-row">
        <p className="lg:text-4xxl font-weight-display flex-7 text-2xl leading-snug tracking-tighter md:text-3xl">
          WooThatsFast cut our page load times from 8 seconds to under 2. Our conversion rate improved 40% and we finally understand our server.
        </p>

        <footer className="flex-6 self-end">
          <div className="flex items-center gap-4">
            <img
              src="/images/testimonials/robert-austin.webp"
              alt="Sarah Chen"
              width={40}
              height={40}
              className="rounded-full"
            />
            <cite className="text-sm font-medium not-italic md:text-lg lg:text-xl">
              Sarah Chen, CEO at Premium Pet Products Co.
            </cite>
          </div>
        </footer>
      </blockquote>
    </section>
  );
}

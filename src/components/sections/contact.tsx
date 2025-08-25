import { Mail, Zap, Phone, Calendar } from 'lucide-react';

import { PlusSigns } from '@/components/icons/plus-signs';
import { Meteors } from '@/components/magicui/meteors';

const contactOptions = [
  {
    icon: Zap,
    title: 'Free Performance Analysis',
    description: 'Get a comprehensive audit of your WooCommerce site performance and improvement recommendations.',
    href: '#performance-analysis',
  },
  {
    icon: Calendar,
    title: 'Schedule Consultation',
    description: 'Book a strategy call to discuss your specific WooCommerce performance and hosting needs.',
    href: '#consultation',
  },
  {
    icon: Phone,
    title: 'Urgent Support',
    description: 'Need immediate help with a critical WooCommerce performance issue? Call us directly.',
    href: 'tel:+1-555-WOOFAST',
  },
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Questions about our services, custom packages, or partnerships:',
    href: 'mailto:hello@woothatsfast.com',
  },
];

export function ContactSection() {
  return (
    <section className="container">
      <div className="hidden border border-t-0 p-7.5 md:block" />

      <div className="grid grid-cols-1 items-center divide-y border-x md:grid-cols-2 md:divide-x md:divide-y-0">
        {/* Left Side - Contact Options */}
        <div className="divide-y">
          <div className="bordered-div-padding relative space-y-6 md:space-y-8 lg:space-y-10">
            <PlusSigns className="absolute inset-0 -mt-0.25 hidden !h-[calc(100%+2px)] -translate-x-full border-y md:block" />
            <h1 className="font-weight-display text-2xl leading-snug tracking-tighter md:text-3xl lg:text-5xl">
              Get Your WooCommerce Performance Analysis
            </h1>
            <p className="text-muted-foreground mx-auto max-w-[700px] text-sm leading-relaxed md:text-lg lg:text-xl">
              Ready to 3x your WooCommerce performance? Start with our free analysis 
              and discover exactly how we can optimize your store.
            </p>
          </div>
          {contactOptions.map((option, index) => (
            <a
              key={index}
              href={option.href}
              target="_blank"
              className="bordered-div-padding hover:bg-muted/30 dark:hover:bg-muted transition-color flex items-center gap-3"
            >
              <option.icon className="size-10 shrink-0 p-2.5" />
              <div>
                <h3 className="text-secondary font-medium">{option.title}</h3>
                <p className="text-muted-foreground mt-1 text-sm">
                  {option.description}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Right Side - Chat Example */}
        <div className="bordered-div-padding flex flex-col gap-4 mask-b-from-60% mask-b-to-95%">
          <img
            src="/images/contact/chat-1.webp"
            alt="Chat example"
            width={620}
            height={112}
          />
          <img
            src="/images/contact/chat-2.webp"
            alt="Chat example"
            width={620}
            height={240}
          />
        </div>
      </div>
      <div className="relative hidden overflow-hidden border-x border-t p-20 md:block">
        <Meteors
          number={1000}
          angle={65}
          maxDuration={20}
          minDuration={5}
          className="opacity-10 [&>div]:opacity-10"
        />
      </div>
    </section>
  );
}

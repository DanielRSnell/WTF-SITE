'use client';

import { useState } from 'react';

import { ArrowUpRight, MessageSquare } from 'lucide-react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useMediaQuery } from '@/hooks/use-media-query';

const testimonials = [
  {
    company: 'TexasMetalWorks',
    quote: 'WooThatsFast transformed our 8-second site into a sub-1-second powerhouse. Sales increased 31% in 60 days.',
    author: {
      name: 'Jake Morrison',
      role: 'Owner & Founder',
    },
  },
  {
    company: 'WeldProjects.com',
    quote: 'From 5-second load times to instant responses. Our Core Web Vitals went from failing to 94/100.',
    author: {
      name: 'Maria Santos',
      role: 'E-commerce Director',
    },
  },
  {
    company: 'Premium Pet Products Co.',
    quote: 'Finally, a WooCommerce host that understands performance. Our checkout abandonment dropped 40%.',
    author: {
      name: 'David Chen',
      role: 'CEO',
    },
  },
  {
    company: 'Austin Outdoor Gear',
    quote: 'Self-hosted WooCommerce with expert optimization. Better performance at half the cost of managed hosting.',
    author: {
      name: 'Sarah Johnson',
      role: 'Operations Manager',
    },
  },
  {
    company: 'Houston Home & Garden',
    quote: 'Database optimization alone cut our admin load times by 75%. Customer experience is night and day.',
    author: {
      name: 'Robert Martinez',
      role: 'Store Manager',
    },
  },
  {
    company: 'Texas Tech Solutions',
    quote: 'Redis caching and image optimization delivered results we never thought possible for WooCommerce.',
    author: {
      name: 'Lisa Wang',
      role: 'Technical Director',
    },
  },
  {
    company: 'DallasBasedBusiness',
    quote: 'WooThatsFast knows WooCommerce inside and out. Performance improvements are measurable and consistent.',
    author: {
      name: 'Mike Thompson',
      role: 'Founder',
    },
  },
  {
    company: 'Hill Country Crafts',
    quote: 'Mobile performance went from terrible to excellent. Our Google rankings improved dramatically.',
    author: {
      name: 'Rachel Green',
      role: 'Owner',
    },
  },
  {
    company: 'San Antonio Supplies',
    quote: 'Expert WooCommerce optimization without the managed hosting markups. Best decision we made.',
    author: {
      name: 'Carlos Rodriguez',
      role: 'Operations Director',
    },
  },
  {
    company: 'Fort Worth Fashion',
    quote: 'Image optimization and lazy loading transformed our product pages. Customers actually browse now.',
    author: {
      name: 'Jennifer Davis',
      role: 'E-commerce Manager',
    },
  },
];

export function AboutTestimonials() {
  const [activeTab, setActiveTab] = useState(testimonials[0].company);
  const { isAtLeast } = useMediaQuery();
  const isMobile = !isAtLeast('md');

  const activeTestimonial =
    testimonials.find((t) => t.company === activeTab) || testimonials[0];

  return (
    <section className="container">
      <div className="bordered-div-padding border-x !pb-0">
        {/* Trusted by text */}
        <h2 className="text-muted-foreground flex items-center gap-2 text-sm leading-snug font-medium md:text-base">
          <MessageSquare className="size-5" />
          WooCommerce Success Stories
        </h2>

        {/* Company tabs */}
        <div className="mt-6 md:mt-8 lg:mt-10">
          {isMobile ? (
            <Select value={activeTab} onValueChange={setActiveTab}>
              <SelectTrigger className="w-full">
                <SelectValue>{activeTab}</SelectValue>
              </SelectTrigger>
              <SelectContent>
                {testimonials.map((testimonial) => (
                  <SelectItem
                    key={testimonial.company}
                    value={testimonial.company}
                  >
                    {testimonial.company}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          ) : (
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="flex flex-wrap gap-3">
                {testimonials.map((testimonial) => (
                  <TabsTrigger
                    key={testimonial.company}
                    value={testimonial.company}
                  >
                    {testimonial.company}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          )}
        </div>
      </div>

      {/* Active Testimonial */}
      <blockquote className="bordered-div-padding flex flex-col justify-between gap-6 border border-t-0 md:flex-row">
        <p className="lg:text-4xxl font-weight-display flex-1 text-2xl leading-snug tracking-tighter md:text-3xl">
          {activeTestimonial.quote}
        </p>

        <footer className="flex-1 md:self-end">
          <a
            href="#"
            className="group hover:text-secondary relative flex items-center transition-colors md:justify-end md:gap-2"
          >
            <ArrowUpRight className="size-6 transition-transform group-hover:rotate-45 md:size-8" />
            <cite className="font-weight-display not-italic md:text-lg lg:text-2xl">
              {activeTestimonial.company}
            </cite>
          </a>
        </footer>
      </blockquote>
    </section>
  );
}

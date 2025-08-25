'use client';

import { useState } from 'react';

import { ChevronDown } from 'lucide-react';

import { Meteors } from '@/components/magicui/meteors';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

type Category =
  | 'Hosting & Performance'
  | 'Services & Pricing'
  | 'Technical Questions'
  | 'Getting Started';

const categories: Category[] = [
  'Hosting & Performance',
  'Services & Pricing',
  'Technical Questions',
  'Getting Started',
];

type FAQ = {
  question: string;
  answer: React.ReactNode;
};

const faqs: Record<Category, FAQ[]> = {
  'Hosting & Performance': [
    {
      question: 'How much faster will my WooCommerce store be?',
      answer: (
        <>
          Most of our clients see 3x performance improvements with typical Core Web Vitals improvements of 65% or more. 
          We guarantee sub-2.5 second Largest Contentful Paint and have helped stores improve conversion rates by 15-40%. 
          Your exact results depend on your current setup, but we provide detailed before/after metrics with every optimization project.
        </>
      ),
    },
    {
      question: 'Do I need to change hosting providers?',
      answer:
        'Not necessarily. Our Website Optimization and Core Web Vitals Management services work with your existing hosting. However, for maximum performance gains, our Self-Hosted Management service provides the best results by giving you full server control with WooCommerce-specific optimizations.',
    },
    {
      question: 'What makes WooThatsFast different from generic WordPress hosts?',
      answer:
        'We specialize exclusively in WooCommerce. Our team understands complex product configurations, custom checkout flows, and e-commerce performance challenges that generic hosts miss. We optimize specifically for WooCommerce database queries, cart functionality, and checkout performance—not just general WordPress speed.',
    },
    {
      question: 'Will my existing plugins still work?',
      answer:
        'Yes, our optimizations are designed to work with your existing plugins and themes. We include plugin compatibility testing in our Advanced Support plans and can help resolve any conflicts. We also provide access to our curated collection of performance-tested WooCommerce plugins.',
    },
  ],
  'Services & Pricing': [
    {
      question: 'What\'s included in the $325/month Core Web Vitals Management?',
      answer:
        'This service includes initial comprehensive optimization, real-time performance monitoring, monthly optimization adjustments, detailed performance reports, Google algorithm update adaptations, and performance degradation alerts. We guarantee compliance with all Core Web Vitals thresholds.',
    },
    {
      question: 'How does the Unlimited Development service work?',
      answer:
        'For $4,000/month, you get unlimited WooCommerce development requests with no hourly billing. Submit requests through our ticket system, and our team processes them in order. Small tasks (under 2 hours) are completed in 24-48 hours, while larger projects take 1-2 weeks. All work is tested before deployment.',
    },
    {
      question: 'Can I combine multiple services?',
      answer: (
        <>
          Absolutely! Many clients combine services for comprehensive WooCommerce management. 
          For example, Self-Hosted Management + Advanced Support, or Website Optimization + Core Web Vitals Management. 
          Contact us for custom package pricing when combining multiple services. See our{' '}
          <a href="/contact" className="text-primary underline">
            contact page
          </a>{' '}
          for package deals.
        </>
      ),
    },
    {
      question: 'Do you offer one-time projects?',
      answer:
        'Yes, our Website Optimization service is available as a one-time project. We also offer one-time WooCommerce migrations and performance audits. However, ongoing services like Core Web Vitals Management and Advanced Support require monthly subscriptions to maintain optimal performance.',
    },
  ],
  'Technical Questions': [
    {
      question: 'What WooCommerce versions do you support?',
      answer:
        'We support all current versions of WooCommerce (5.0+) and WordPress. Our team stays current with the latest WooCommerce updates and can help with version upgrades as part of our Advanced Support plans. We also work with WooCommerce multisite installations.',
    },
    {
      question: 'Do you work with headless WooCommerce setups?',
      answer:
        'Yes, we have extensive experience with headless WooCommerce implementations using REST API and GraphQL. We can optimize both traditional WooCommerce themes and modern headless setups with React, Vue, or other frontend frameworks.',
    },
    {
      question: 'What about WooCommerce extensions and custom development?',
      answer:
        'Our team regularly works with popular extensions like WooCommerce Subscriptions, Bookings, Memberships, and custom payment gateways. We also handle complex custom development including custom product types, checkout modifications, and third-party integrations with ERPs and fulfillment systems.',
    },
    {
      question: 'How do you handle WooCommerce security?',
      answer:
        'Security is built into all our services. We implement WooCommerce-specific security hardening, regular security updates, malware scanning, and secure payment processing compliance. Our Self-Hosted Management includes comprehensive security monitoring and incident response.',
    },
  ],
  'Getting Started': [
    {
      question: 'How do I get started with WooThatsFast?',
      answer: (
        <>
          Start with our free performance analysis. We'll audit your current WooCommerce site and provide 
          a detailed report with improvement opportunities and service recommendations. 
          Contact us through our{' '}
          <a href="/contact" className="text-primary underline">
            contact form
          </a>{' '}
          or schedule a consultation call to discuss your specific needs.
        </>
      ),
    },
    {
      question: 'How long does it take to see results?',
      answer:
        'Timeline varies by service. Website Optimization projects typically take 2-4 weeks with immediate performance improvements. Self-Hosted Management setup takes 1-2 weeks for complete migration and optimization. Core Web Vitals improvements are often visible within the first week of optimization work.',
    },
    {
      question: 'What information do you need to get started?',
      answer:
        'We need access to your WooCommerce admin, current hosting details, and information about your business goals. For hosting migrations, we handle the technical transfer process. We also like to understand your traffic patterns, product catalog size, and any custom functionality you rely on.',
    },
    {
      question: 'Do you provide training for my team?',
      answer:
        'Yes, all our services include training components. Website Optimization includes a team walkthrough of improvements. Advanced Support plans include monthly strategy calls. We ensure your team understands how to maintain optimal performance and when to contact us for additional help.',
    },
  ],
};

export function FAQSection() {
  const [activeTab, setActiveTab] = useState<Category>(categories[0]);

  return (
    <section className="overflow-hidden">
      <div className="container divide-y">
        <div className="hidden border-x border-b-0 p-7.5 md:block" />

        <div className="bordered-div-padding border-x">
          <h1 className="font-weight-display text-2xl leading-snug tracking-tighter md:text-3xl lg:text-5xl">
            FAQs
          </h1>
          <div className="mt-6 block md:hidden">
            <Select
              value={activeTab}
              onValueChange={(value) => setActiveTab(value as Category)}
            >
              <SelectTrigger className="w-full">
                <SelectValue>{activeTab}</SelectValue>
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="bordered-div-padding relative hidden border-x md:block">
          <div className="absolute left-full h-[150%] w-[50vw] -translate-y-[90%] overflow-hidden border-y">
            <Meteors
              number={1000}
              angle={65}
              maxDuration={20}
              minDuration={5}
              className="opacity-10 [&>div]:opacity-10"
            />
          </div>
          <Tabs
            value={activeTab}
            onValueChange={(value) => setActiveTab(value as Category)}
            className=""
          >
            <TabsList className="flex gap-3">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category}>
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <div className="border-x">
          <Accordion type="single" collapsible>
            {faqs[activeTab].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="bordered-div-padding font-weight-display flex w-full items-center justify-between !pb-4 text-base hover:no-underline md:!pb-6 md:text-xl [&>svg]:hidden [&[data-state=open]_svg]:rotate-180">
                  <span>{faq.question}</span>
                  <div className="bg-card flex size-8 items-center justify-center rounded-sm border">
                    <ChevronDown className="size-5 shrink-0 tracking-tight transition-transform duration-200" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground bordered-div-padding max-w-2xl !pt-0 leading-relaxed tracking-tight">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="hidden border-x p-20 md:block" />
      </div>
    </section>
  );
}

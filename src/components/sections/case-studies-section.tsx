'use client';

import { ArrowUpRight, CheckCircle, Zap, TrendingUp, Clock } from 'lucide-react';

import { PlusSigns } from '@/components/icons/plus-signs';
import { Diamonds } from '@/components/icons/diamonds';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const caseStudies = [
  {
    company: 'TexasMetalWorks',
    industry: 'Manufacturing & Industrial',
    description: 'Large-scale industrial manufacturing company selling custom metal fabrication and welding equipment through WooCommerce. Complex product configurations with heavy imagery were crushing site performance.',
    testimonial: 'WooThatsFast completely transformed our online presence. We went from losing customers due to slow loading to having one of the fastest metalworking sites in Texas. The 8-second load times that were killing our business are now under 1 second. Our sales increased 161% in the first year, and customer satisfaction is through the roof. This investment paid for itself within the first month.',
    author: 'Kirk P',
    role: 'Owner',
    metrics: [
      { label: 'Frontend Load Time', before: '3-5 seconds', after: '<1 second' },
      { label: 'Admin Dashboard', before: '8-12 seconds', after: '1-2 seconds' },
      { label: 'Product Pages', before: '5+ seconds', after: '<1 second' },
      { label: 'Checkout Performance', before: 'Standard speed', after: '181% faster' },
      { label: 'Plugin Count', before: '100% baseline', after: '28% reduction' },
      { label: 'Database Size', before: '200+ legacy tables', after: 'Clean structure' },
    ],
    optimizations: [
      'Database optimization removing 200+ legacy tables and custom indexing for complex product queries',
      'Image optimization reducing file sizes to 0.5MB with WebP conversion and lazy loading implementation',
      'Redis caching with WooCommerce-specific object caching for product configurations',
      'Plugin cleanup reducing bloat by 28% and optimizing remaining integrations',
      'Checkout optimization improving performance by 181% for faster conversions',
      'Email campaign setup with abandon cart recovery increasing performance by 48%',
      'Advertising implementation and optimization increasing sales by 161% in first year',
    ],
    results: [
      { metric: '89%', label: 'Load Time Improvement' },
      { metric: '161%', label: 'Sales Increase (Year 1)' },
      { metric: '181%', label: 'Checkout Performance' },
      { metric: '48%', label: 'Cart Recovery Boost' },
    ]
  },
  {
    company: 'WeldProjects.com',
    industry: 'Welding & Equipment',
    description: 'Specialized welding equipment and supplies retailer with an extensive product catalog. Slow admin performance was hampering daily operations, and poor frontend speed was causing cart abandonment.',
    testimonial: 'Our daily workflow is so much smoother now. What used to take 20 minutes to update inventory now takes 5 minutes. Customer feedback about site speed has been overwhelmingly positive, and we\'ve seen a noticeable decrease in cart abandonment.',
    author: 'John P',
    role: 'Owner',
    metrics: [
      { label: 'Frontend Load Time', before: '4-5 seconds', after: '<1 second' },
      { label: 'Admin Dashboard', before: '10-12 seconds', after: '1-2 seconds' },
      { label: 'Category Pages', before: '3-4 seconds', after: '<1 second' },
      { label: 'Plugin Requests', before: '5-8 seconds', after: 'Sub-2 seconds' },
    ],
    optimizations: [
      'Cart optimization with streamlined AJAX updates and checkout process',
      'Mobile performance optimization for on-site welders browsing',
      'Advanced product search and filtering optimization for large catalog',
      'Admin efficiency improvements for order management and inventory',
      'CDN integration for international welding supply customers',
    ],
    results: [
      { metric: '85%', label: 'Load Time Improvement' },
      { metric: '75%', label: 'Admin Speed Boost' },
      { metric: '40%', label: 'Cart Abandonment Reduction' },
    ]
  }
];

export function CaseStudiesSection() {
  return (
    <section className="container">
      <div className="border-x">
        <div className="hidden p-7.5 md:block" />

        {/* Hero Section */}
        <div className="bordered-div-padding border-b">
          <div className="text-center space-y-6 md:space-y-8 lg:space-y-10">
            <Badge variant="outline" className="mx-auto">
              <CheckCircle className="size-4 mr-2" />
              Real Results
            </Badge>
            
            <h1 className="font-weight-display text-2xl leading-snug tracking-tighter md:text-3xl lg:text-5xl">
              WooCommerce Performance
              <span className="block text-secondary">Success Stories</span>
            </h1>
            
            <p className="text-muted-foreground mx-auto max-w-[700px] text-sm leading-relaxed md:text-lg lg:text-xl">
              Real WooCommerce stores, real performance improvements. See how we transformed 
              slow, frustrating sites into lightning-fast customer experiences.
            </p>
          </div>
        </div>

        {/* Results Overview */}
        <div className="bordered-div-padding border-b">
          <div className="text-center space-y-6 md:space-y-8 lg:space-y-10">
            <h2 className="font-weight-display text-xl leading-snug tracking-tighter md:text-2xl lg:text-3xl">
              Proven Results
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed md:text-base lg:text-lg">
              Dramatic performance improvements across the board
            </p>
          </div>

          <div className="mt-6 md:mt-8 lg:mt-10 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            <div className="text-center space-y-2">
              <div className="text-2xl font-weight-display tracking-tighter md:text-3xl lg:text-4xl text-secondary">2</div>
              <h3 className="font-medium text-sm md:text-base">Success Stories</h3>
              <p className="text-muted-foreground text-xs md:text-sm">WooCommerce transformations</p>
            </div>
            
            <div className="text-center space-y-2">
              <div className="text-2xl font-weight-display tracking-tighter md:text-3xl lg:text-4xl text-secondary">&lt;1s</div>
              <h3 className="font-medium text-sm md:text-base">Frontend Load Times</h3>
              <p className="text-muted-foreground text-xs md:text-sm">From 3-5 seconds to sub-second</p>
            </div>
            
            <div className="text-center space-y-2">
              <div className="text-2xl font-weight-display tracking-tighter md:text-3xl lg:text-4xl text-secondary">85%</div>
              <h3 className="font-medium text-sm md:text-base">Admin Speed Improvement</h3>
              <p className="text-muted-foreground text-xs md:text-sm">From 8-12s to 1-2s pages</p>
            </div>

            <div className="text-center space-y-2">
              <div className="text-2xl font-weight-display tracking-tighter md:text-3xl lg:text-4xl text-secondary">100%</div>
              <h3 className="font-medium text-sm md:text-base">Client Satisfaction</h3>
              <p className="text-muted-foreground text-xs md:text-sm">Dramatic business impact</p>
            </div>
          </div>
        </div>

        {/* Case Studies */}
        {caseStudies.map((study, index) => (
          <div key={study.company} className="grid grid-cols-1 md:grid-cols-2">
            {/* Metrics Column */}
            <div className={cn(
              'bordered-div-padding relative flex flex-col gap-6 md:gap-8 lg:gap-10',
              index % 2 === 1 && 'md:order-2'
            )}>
              {index === 0 && (
                <PlusSigns className="absolute top-0 right-full -mt-0.25 hidden !h-[calc(100%+2px)] border-y md:block" />
              )}
              {index === 1 && (
                <Diamonds className="absolute top-0 left-full -mt-0.25 hidden !h-[calc(100%+2px)] border-y md:block" />
              )}

              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  {study.industry}
                </Badge>
                
                <h2 className="font-weight-display text-xl leading-snug tracking-tighter md:text-2xl lg:text-3xl">
                  {study.company}
                </h2>
                
                <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
                  {study.description}
                </p>
              </div>

              {/* Performance Metrics */}
              <div className="space-y-3">
                {study.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className="flex items-center justify-between py-2 border-b border-border">
                    <span className="font-medium text-sm md:text-base">{metric.label}</span>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-muted-foreground line-through">{metric.before}</span>
                      <ArrowUpRight className="size-4 text-secondary" />
                      <span className="text-secondary font-medium">{metric.after}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Results */}
              <div className="grid grid-cols-3 gap-4">
                {study.results.map((result, resultIndex) => (
                  <div key={resultIndex} className="text-center">
                    <div className="text-lg font-weight-display tracking-tighter text-secondary md:text-xl lg:text-2xl">
                      {result.metric}
                    </div>
                    <div className="text-muted-foreground text-xs md:text-sm">
                      {result.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Optimizations & Testimonial Column */}
            <div className={cn(
              'bordered-div-padding flex flex-col gap-6 border-t md:border-t-0 md:gap-8 lg:gap-10',
              index % 2 === 0 && 'md:border-l',
              index % 2 === 1 && 'md:border-r md:order-1'
            )}>
              <div className="space-y-4">
                <h3 className="font-weight-display text-lg leading-snug tracking-tighter md:text-xl">
                  Optimization Highlights
                </h3>
                
                <ul className="space-y-3">
                  {study.optimizations.map((optimization, optimizationIndex) => (
                    <li key={optimizationIndex} className="flex items-start gap-3">
                      <CheckCircle className="size-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm leading-relaxed md:text-base">
                        {optimization}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Testimonial */}
              <blockquote className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed md:text-base italic">
                  "{study.testimonial}"
                </p>
                <footer className="flex items-center gap-3">
                  <div>
                    <cite className="font-medium not-italic text-sm md:text-base">
                      {study.author}
                    </cite>
                    <div className="text-muted-foreground text-xs md:text-sm">
                      {study.role}, {study.company}
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        ))}

        {/* Common Issues Section */}
        <div className="bordered-div-padding border-t">
          <div className="space-y-6 md:space-y-8 lg:space-y-10">
            <div className="text-center space-y-4">
              <h2 className="font-weight-display text-xl leading-snug tracking-tighter md:text-2xl lg:text-3xl">
                Common WooCommerce Performance Issues We Solve
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed md:text-base lg:text-lg">
                Challenges both stores faced before optimization
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Before Issues */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-red-500/10 p-3 rounded-lg">
                    <Clock className="size-6 text-red-600" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-weight-display text-lg leading-snug tracking-tighter text-red-600">
                      Before: Slow Admin Performance
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
                      Both stores suffered from 8-12 second admin load times, making daily operations frustrating and time-consuming.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-red-500/10 p-3 rounded-lg">
                    <TrendingUp className="size-6 text-red-600 rotate-180" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-weight-display text-lg leading-snug tracking-tighter text-red-600">
                      Before: Poor Frontend Speed
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
                      3-5 second load times were causing cart abandonment and poor user experience for customers.
                    </p>
                  </div>
                </div>
              </div>

              {/* After Solutions */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <Zap className="size-6 text-secondary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-weight-display text-lg leading-snug tracking-tighter text-secondary">
                      After: Lightning Admin Speed
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
                      Sub-2 second admin performance enables efficient daily operations and inventory management.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <TrendingUp className="size-6 text-secondary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-weight-display text-lg leading-snug tracking-tighter text-secondary">
                      After: Sub-Second Load Times
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
                      Frontend performance improvements create exceptional user experiences and reduce cart abandonment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bordered-div-padding border-t text-center">
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4">
              <h2 className="font-weight-display text-xl leading-snug tracking-tighter md:text-2xl lg:text-3xl">
                Ready for Similar Results?
              </h2>
              <p className="text-muted-foreground mx-auto max-w-[600px] text-sm leading-relaxed md:text-base lg:text-lg">
                Get the same dramatic performance improvements for your WooCommerce store. 
                Start with our free performance analysis.
              </p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg">
                <a href="/contact">
                  Get Your Free Analysis
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/services/optimization">
                  View Optimization Service
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
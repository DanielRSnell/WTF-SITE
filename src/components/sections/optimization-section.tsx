'use client';

import { CheckCircle, ArrowRight, Zap, TrendingUp, Database, Image, Code, Shield } from 'lucide-react';

import { PlusSigns } from '@/components/icons/plus-signs';
import { Diamonds } from '@/components/icons/diamonds';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const optimizationAreas = [
  {
    title: 'Database Optimization',
    description: 'Clean up years of accumulated bloat and optimize queries for lightning-fast performance.',
    icon: <Database className="size-6" />,
    improvements: [
      'Remove spam, revisions, and unused data',
      'Optimize database tables and indexes',
      'Clean up options table and transients',
      'Database size reduction of 50-70%',
    ],
  },
  {
    title: 'Image Optimization',
    description: 'Reduce image file sizes by up to 70% while maintaining visual quality.',
    icon: <Image className="size-6" />,
    improvements: [
      'WebP and AVIF format conversion',
      'Lazy loading implementation',
      'Responsive image generation',
      'CDN-ready optimization',
    ],
  },
  {
    title: 'Code Optimization',
    description: 'Streamline your WooCommerce code for maximum performance and efficiency.',
    icon: <Code className="size-6" />,
    improvements: [
      'CSS and JavaScript minification',
      'Critical CSS inlining',
      'Code splitting and lazy loading',
      'Plugin cleanup and optimization',
    ],
  },
  {
    title: 'Security Hardening',
    description: 'Comprehensive security improvements to protect your store and customers.',
    icon: <Shield className="size-6" />,
    improvements: [
      'Security plugin configuration',
      'File permission hardening',
      'Login security improvements',
      'Malware scanning and removal',
    ],
  },
];

const performanceMetrics = [
  {
    metric: '3x',
    label: 'Faster Load Times',
    description: 'Average improvement in page loading speed',
  },
  {
    metric: '70%',
    label: 'Size Reduction',
    description: 'Average reduction in total page weight',
  },
  {
    metric: '90+',
    label: 'PageSpeed Score',
    description: 'Target Google PageSpeed Insights score',
  },
  {
    metric: '85%',
    label: 'Admin Speed Boost',
    description: 'Improvement in WordPress admin performance',
  },
];

const optimizationProcess = [
  {
    step: '1',
    title: 'Performance Audit',
    description: 'Comprehensive analysis of your current WooCommerce performance, identifying bottlenecks and optimization opportunities.',
    tasks: [
      'Core Web Vitals measurement',
      'Database performance analysis',
      'Plugin and theme auditing',
      'Image optimization assessment',
    ],
  },
  {
    step: '2',
    title: 'Optimization Implementation',
    description: 'Execute comprehensive optimizations across all performance areas with zero downtime.',
    tasks: [
      'Database cleanup and indexing',
      'Image compression and format conversion',
      'Code minification and caching setup',
      'Plugin optimization and removal',
    ],
  },
  {
    step: '3',
    title: 'Testing & Monitoring',
    description: 'Thorough testing and performance validation with ongoing monitoring setup.',
    tasks: [
      'Performance testing and validation',
      'Core Web Vitals verification',
      'Mobile performance optimization',
      'Monitoring and reporting setup',
    ],
  },
];

const beforeAfterComparison = [
  {
    category: 'Page Load Speed',
    before: '4-8 seconds',
    after: '1-2 seconds',
    improvement: '75% faster',
  },
  {
    category: 'Database Queries',
    before: '200+ queries',
    after: '50-80 queries',
    improvement: '60% reduction',
  },
  {
    category: 'Page Weight',
    before: '3-8 MB',
    after: '800KB-2MB',
    improvement: '70% lighter',
  },
  {
    category: 'Admin Dashboard',
    before: '8-15 seconds',
    after: '2-4 seconds',
    improvement: '75% faster',
  },
];

const pricingOptions = [
  {
    name: 'Basic Optimization',
    price: '$1,500',
    description: 'Essential performance improvements',
    features: [
      'Database cleanup and optimization',
      'Basic image optimization',
      'Plugin audit and cleanup',
      'Basic caching setup',
      'Performance report',
    ],
    popular: false,
  },
  {
    name: 'Complete Optimization',
    price: '$2,500',
    description: 'Comprehensive performance overhaul',
    features: [
      'Everything in Basic',
      'Advanced image optimization',
      'Code minification and optimization',
      'Advanced caching implementation',
      'Core Web Vitals optimization',
      '30-day support',
    ],
    popular: true,
  },
  {
    name: 'Enterprise Optimization',
    price: '$4,500',
    description: 'Maximum performance with ongoing support',
    features: [
      'Everything in Complete',
      'Custom code optimization',
      'Advanced security hardening',
      'Performance monitoring setup',
      '90-day support',
      'Monthly performance reports',
    ],
    popular: false,
  },
];

export function OptimizationSection() {
  return (
    <section className="container">
      <div className="border-x">
        <div className="hidden p-7.5 md:block" />

        {/* Hero Section */}
        <div className="bordered-div-padding border-b">
          <div className="text-center space-y-6 md:space-y-8 lg:space-y-10">
            <Badge variant="outline" className="mx-auto">
              <TrendingUp className="size-4 mr-2" />
              Performance Guaranteed
            </Badge>
            
            <h1 className="font-weight-display text-2xl leading-snug tracking-tighter md:text-3xl lg:text-5xl">
              WooCommerce Website
              <span className="block text-secondary">Optimization</span>
            </h1>
            
            <p className="text-muted-foreground mx-auto max-w-[700px] text-sm leading-relaxed md:text-lg lg:text-xl">
              Comprehensive performance optimization that transforms slow WooCommerce stores into 
              lightning-fast customer experiences. Guaranteed improvements or your money back.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" asChild>
                <a href="/contact">
                  Get Performance Analysis
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/case-studies">
                  View Results
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bordered-div-padding border-b">
          <div className="space-y-6 md:space-y-8 lg:space-y-10">
            <div className="text-center space-y-4">
              <h2 className="font-weight-display text-xl leading-snug tracking-tighter md:text-2xl lg:text-3xl">
                Proven Performance Results
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed md:text-base lg:text-lg">
                Real improvements from our optimization process
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
              {performanceMetrics.map((metric, index) => (
                <div key={index} className="text-center space-y-2">
                  <div className="text-2xl font-weight-display tracking-tighter md:text-3xl lg:text-4xl text-secondary">
                    {metric.metric}
                  </div>
                  <h3 className="font-medium text-sm md:text-base">
                    {metric.label}
                  </h3>
                  <p className="text-muted-foreground text-xs md:text-sm">
                    {metric.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Optimization Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-b">
          {optimizationAreas.map((area, index) => (
            <div 
              key={area.title} 
              className={cn(
                'bordered-div-padding relative flex flex-col gap-6 md:gap-8 lg:gap-10',
                index < 2 && 'border-b md:border-b-0',
                index === 0 && 'md:border-r',
                index === 1 && 'relative',
                index === 2 && 'md:border-r md:border-t',
                index === 3 && 'border-t md:border-t'
              )}
            >
              {index === 1 && (
                <Diamonds className="absolute top-0 left-full -mt-0.25 hidden !h-[calc(100%+2px)] border-y md:block" />
              )}
              {index === 2 && (
                <PlusSigns className="absolute top-0 right-full -mt-0.25 hidden !h-[calc(100%+2px)] border-y md:block" />
              )}
              
              <div className="space-y-4">
                <div className="bg-secondary/10 size-12 rounded-lg flex items-center justify-center">
                  {area.icon}
                </div>
                
                <h3 className="font-weight-display text-lg leading-snug tracking-tighter md:text-xl">
                  {area.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
                  {area.description}
                </p>
              </div>

              <ul className="space-y-3">
                {area.improvements.map((improvement, improvementIndex) => (
                  <li key={improvementIndex} className="flex items-center gap-3">
                    <CheckCircle className="size-4 text-secondary flex-shrink-0" />
                    <span className="text-sm md:text-base">
                      {improvement}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Before & After Comparison */}
        <div className="bordered-div-padding border-b">
          <div className="space-y-6 md:space-y-8 lg:space-y-10">
            <div className="text-center space-y-4">
              <h2 className="font-weight-display text-xl leading-snug tracking-tighter md:text-2xl lg:text-3xl">
                Before & After Comparison
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed md:text-base lg:text-lg">
                Typical improvements from our optimization service
              </p>
            </div>

            <div className="space-y-4">
              {beforeAfterComparison.map((comparison, index) => (
                <div key={index} className="flex items-center justify-between py-3 border-b border-border">
                  <span className="font-medium text-sm md:text-base">
                    {comparison.category}
                  </span>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-muted-foreground line-through">
                      {comparison.before}
                    </span>
                    <ArrowRight className="size-4 text-secondary" />
                    <span className="text-secondary font-medium">
                      {comparison.after}
                    </span>
                    <Badge variant="secondary" className="ml-2 text-xs">
                      {comparison.improvement}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Optimization Process */}
        <div className="bordered-div-padding border-b">
          <div className="space-y-6 md:space-y-8 lg:space-y-10">
            <div className="text-center space-y-4">
              <h2 className="font-weight-display text-xl leading-snug tracking-tighter md:text-2xl lg:text-3xl">
                Our Optimization Process
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed md:text-base lg:text-lg">
                Systematic approach to WooCommerce performance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {optimizationProcess.map((step, index) => (
                <div key={step.step} className="space-y-4">
                  <div className="bg-secondary/10 size-16 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-xl font-weight-display tracking-tighter">
                      {step.step}
                    </span>
                  </div>
                  
                  <div className="text-center space-y-2">
                    <h3 className="font-weight-display text-lg leading-snug tracking-tighter md:text-xl">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
                      {step.description}
                    </p>
                  </div>

                  <ul className="space-y-2">
                    {step.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="size-3 text-secondary flex-shrink-0" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="bordered-div-padding border-b">
          <div className="space-y-6 md:space-y-8 lg:space-y-10">
            <div className="text-center space-y-4">
              <h2 className="font-weight-display text-xl leading-snug tracking-tighter md:text-2xl lg:text-3xl">
                Optimization Pricing
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed md:text-base lg:text-lg">
                Choose the optimization level that fits your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {pricingOptions.map((option, index) => (
                <div 
                  key={option.name}
                  className={cn(
                    'relative border rounded-lg p-6 space-y-6',
                    option.popular ? 'border-secondary' : 'border-border'
                  )}
                >
                  {option.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      Most Popular
                    </Badge>
                  )}
                  
                  <div className="text-center space-y-2">
                    <h3 className="font-weight-display text-lg leading-snug tracking-tighter">
                      {option.name}
                    </h3>
                    <div className="text-2xl font-weight-display tracking-tighter md:text-3xl">
                      {option.price}
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {option.description}
                    </p>
                  </div>

                  <ul className="space-y-3">
                    {option.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="size-4 text-secondary flex-shrink-0" />
                        <span className="text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className="w-full" 
                    variant={option.popular ? "default" : "outline"}
                    asChild
                  >
                    <a href="/contact">
                      Get Started
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bordered-div-padding text-center">
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4">
              <h2 className="font-weight-display text-xl leading-snug tracking-tighter md:text-2xl lg:text-3xl">
                Ready to Optimize Your Store?
              </h2>
              <p className="text-muted-foreground mx-auto max-w-[600px] text-sm leading-relaxed md:text-base lg:text-lg">
                Get a free performance analysis and detailed optimization plan for your WooCommerce store. 
                See exactly how we can improve your site speed and customer experience.
              </p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" asChild>
                <a href="/contact">
                  Get Free Analysis
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/case-studies">
                  View Success Stories
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
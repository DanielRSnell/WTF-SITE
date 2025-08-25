'use client';

import { CheckCircle, ArrowRight, Zap, TrendingUp, BarChart3, Activity, Target, Shield, Timer, Gauge, Sparkles, LineChart } from 'lucide-react';

import { PlusSigns } from '@/components/icons/plus-signs';
import { Diamonds } from '@/components/icons/diamonds';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const coreWebVitals = [
  {
    metric: 'LCP',
    name: 'Largest Contentful Paint',
    target: '< 2.5s',
    description: 'Main content loads instantly for optimal user experience',
    icon: <Zap className="size-8" />,
    color: 'text-green-600',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/20',
    details: 'Critical for first impressions and user retention',
  },
  {
    metric: 'FID',
    name: 'First Input Delay',
    target: '< 100ms',
    description: 'Site responds to interactions in under 100 milliseconds',
    icon: <Target className="size-8" />,
    color: 'text-blue-600',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20',
    details: 'Essential for interactive user experience',
  },
  {
    metric: 'CLS',
    name: 'Cumulative Layout Shift',
    target: '< 0.1',
    description: 'Visual stability with minimal unexpected layout shifts',
    icon: <BarChart3 className="size-8" />,
    color: 'text-purple-600',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20',
    details: 'Prevents frustrating user interface jumps',
  },
];

const additionalMetrics = [
  {
    name: 'First Contentful Paint',
    target: '< 1.8s',
    description: 'First content appears quickly',
    icon: <Activity className="size-6" />,
  },
  {
    name: 'Time to Interactive',
    target: '< 3.8s',
    description: 'Page becomes fully interactive',
    icon: <Timer className="size-6" />,
  },
  {
    name: 'Speed Index',
    target: '< 3.4s',
    description: 'Visual progress of page loading',
    icon: <Gauge className="size-6" />,
  },
  {
    name: 'Total Blocking Time',
    target: '< 200ms',
    description: 'Main thread responsiveness',
    icon: <Shield className="size-6" />,
  },
];

const monitoringProcess = [
  {
    step: '1',
    title: 'Comprehensive Baseline Analysis',
    description: 'Deep dive assessment of your current Core Web Vitals performance with detailed bottleneck identification and optimization roadmap creation.',
    icon: <LineChart className="size-6" />,
    highlights: [
      'Real User Monitoring (RUM) setup',
      'Lab testing from 12 global locations',
      'Mobile and desktop performance audit',
      'Third-party script impact analysis',
    ],
  },
  {
    step: '2',
    title: 'Performance Optimization Implementation',
    description: 'Strategic implementation of advanced optimization techniques specifically targeting Core Web Vitals improvements.',
    icon: <Sparkles className="size-6" />,
    highlights: [
      'Critical resource prioritization',
      'Advanced image optimization (WebP, AVIF)',
      'JavaScript bundle optimization',
      'Server-side rendering enhancements',
    ],
  },
  {
    step: '3',
    title: 'Continuous Monitoring & Adjustment',
    description: 'Round-the-clock performance monitoring with proactive optimizations to maintain peak performance scores.',
    icon: <Activity className="size-6" />,
    highlights: [
      '24/7 performance monitoring',
      'Automated alert systems',
      'Monthly optimization reviews',
      'Google algorithm adaptation',
    ],
  },
];

const businessImpact = [
  {
    title: 'Search Ranking Boost',
    description: 'Core Web Vitals are official Google ranking factors affecting organic visibility',
    metric: '↑23%',
    label: 'Average ranking improvement',
    icon: <TrendingUp className="size-6" />,
    bgColor: 'bg-green-500/10',
    textColor: 'text-green-600',
  },
  {
    title: 'Conversion Rate Increase',
    description: 'Faster sites convert significantly better across all device types',
    metric: '↑32%',
    label: 'Average conversion boost',
    icon: <Target className="size-6" />,
    bgColor: 'bg-blue-500/10',
    textColor: 'text-blue-600',
  },
  {
    title: 'Revenue Growth',
    description: 'Performance improvements directly correlate with increased sales',
    metric: '↑28%',
    label: 'Average revenue increase',
    icon: <BarChart3 className="size-6" />,
    bgColor: 'bg-purple-500/10',
    textColor: 'text-purple-600',
  },
  {
    title: 'User Experience Score',
    description: 'Better performance leads to improved user satisfaction and retention',
    metric: '↑41%',
    label: 'Customer satisfaction boost',
    icon: <Sparkles className="size-6" />,
    bgColor: 'bg-orange-500/10',
    textColor: 'text-orange-600',
  },
];

const pricingFeatures = [
  'Comprehensive Core Web Vitals optimization',
  'Real User Monitoring (RUM) implementation',
  'Synthetic testing from 12 global locations',
  'Monthly performance optimization reviews',
  'Detailed monthly performance reports',
  'Google algorithm update adaptations',
  'Performance degradation alerts',
  'Priority technical support',
  'Mobile and desktop optimization',
  'Third-party script management',
];

export function CoreWebVitalsSection() {
  return (
    <section className="container">
      <div className="border-x">
        <div className="hidden p-7.5 md:block" />

        {/* Hero Section */}
        <div className="bordered-div-padding border-b">
          <div className="text-center space-y-6 md:space-y-8 lg:space-y-10">
            <Badge variant="outline" className="mx-auto">
              <Gauge className="size-4 mr-2" />
              Performance Guaranteed
            </Badge>
            
            <h1 className="font-weight-display text-2xl leading-snug tracking-tighter md:text-3xl lg:text-5xl">
              Core Web Vitals
              <span className="block text-secondary">Management</span>
            </h1>
            
            <p className="text-muted-foreground mx-auto max-w-[700px] text-sm leading-relaxed md:text-lg lg:text-xl">
              Guaranteed Google-grade performance scores with continuous monitoring and optimization. 
              Your WooCommerce store will consistently exceed Core Web Vitals thresholds.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" asChild>
                <a href="/contact">
                  Start Performance Analysis
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/case-studies">
                  View Performance Results
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Core Web Vitals Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {coreWebVitals.map((vital, index) => (
            <div 
              key={vital.metric} 
              className={cn(
                'bordered-div-padding relative flex flex-col gap-6 md:gap-8 lg:gap-10',
                index < 2 && 'border-b md:border-b-0',
                index === 0 && 'md:border-r',
                index === 1 && 'md:border-r relative',
                index === 2 && 'border-b-0'
              )}
            >
              {index === 1 && (
                <Diamonds className="absolute top-0 left-full -mt-0.25 hidden !h-[calc(100%+2px)] border-y md:block" />
              )}
              {index === 0 && (
                <PlusSigns className="absolute top-0 right-full -mt-0.25 hidden !h-[calc(100%+2px)] border-y md:block" />
              )}
              
              <div className="space-y-6">
                <div className={cn('p-4 rounded-xl border-2', vital.bgColor, vital.borderColor)}>
                  <div className="flex items-center justify-between mb-4">
                    <div className={cn('p-3 rounded-lg', vital.bgColor)}>
                      {vital.icon}
                    </div>
                    <div className="text-right">
                      <div className={cn('text-xs uppercase tracking-wider font-medium', vital.color)}>
                        {vital.metric}
                      </div>
                      <div className={cn('text-2xl font-weight-display tracking-tighter md:text-3xl', vital.color)}>
                        {vital.target}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="font-weight-display text-lg leading-snug tracking-tighter md:text-xl mb-2">
                    {vital.name}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    {vital.description}
                  </p>
                  
                  <p className="text-xs text-muted-foreground italic">
                    {vital.details}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Metrics */}
        <div className="bordered-div-padding border-t">
          <div className="space-y-6 md:space-y-8 lg:space-y-10">
            <div className="text-center space-y-4">
              <h2 className="font-weight-display text-xl leading-snug tracking-tighter md:text-2xl lg:text-3xl">
                Additional Performance Metrics
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed md:text-base lg:text-lg">
                Comprehensive performance optimization beyond Core Web Vitals
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {additionalMetrics.map((metric, index) => (
                <div key={index} className="text-center space-y-3 p-4 border rounded-lg bg-muted/5">
                  <div className="bg-secondary/10 size-12 rounded-lg flex items-center justify-center mx-auto">
                    {metric.icon}
                  </div>
                  <div className="space-y-1">
                    <div className="text-lg font-weight-display tracking-tighter text-secondary">
                      {metric.target}
                    </div>
                    <h3 className="font-medium text-sm">
                      {metric.name}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {metric.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Business Impact */}
        <div className="bordered-div-padding border-t">
          <div className="space-y-6 md:space-y-8 lg:space-y-10">
            <div className="text-center space-y-4">
              <h2 className="font-weight-display text-xl leading-snug tracking-tighter md:text-2xl lg:text-3xl">
                Business Impact of Core Web Vitals
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed md:text-base lg:text-lg">
                Performance improvements that drive real business results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {businessImpact.map((impact, index) => (
                <div key={index} className="flex items-start gap-4 p-6 border rounded-lg">
                  <div className={cn('p-3 rounded-lg flex-shrink-0', impact.bgColor)}>
                    {impact.icon}
                  </div>
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-weight-display text-lg leading-snug tracking-tighter">
                        {impact.title}
                      </h3>
                      <div className="text-right">
                        <div className={cn('text-xl font-weight-display tracking-tighter', impact.textColor)}>
                          {impact.metric}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {impact.label}
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {impact.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Monitoring Process */}
        <div className="bordered-div-padding border-t">
          <div className="space-y-6 md:space-y-8 lg:space-y-10">
            <div className="text-center space-y-4">
              <h2 className="font-weight-display text-xl leading-snug tracking-tighter md:text-2xl lg:text-3xl">
                Our Monitoring Process
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed md:text-base lg:text-lg">
                Comprehensive approach to Core Web Vitals optimization
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {monitoringProcess.map((step, index) => (
                <div key={step.step} className="space-y-6">
                  <div className="bg-secondary/10 size-16 rounded-full flex items-center justify-center mx-auto">
                    {step.icon}
                  </div>
                  
                  <div className="text-center space-y-2">
                    <div className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                      Step {step.step}
                    </div>
                    <h3 className="font-weight-display text-lg leading-snug tracking-tighter md:text-xl">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
                      {step.description}
                    </p>
                  </div>

                  <ul className="space-y-2">
                    {step.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="size-3 text-secondary flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="bordered-div-padding border-t">
          <div className="space-y-6 md:space-y-8 lg:space-y-10">
            <div className="text-center space-y-4">
              <h2 className="font-weight-display text-xl leading-snug tracking-tighter md:text-2xl lg:text-3xl">
                Core Web Vitals Management
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed md:text-base lg:text-lg">
                Comprehensive performance management with guaranteed results
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="relative border-2 border-secondary rounded-lg p-8 space-y-6 bg-gradient-to-br from-secondary/5 to-secondary/10">
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  Most Comprehensive
                </Badge>
                
                <div className="text-center space-y-2">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-4xl font-weight-display tracking-tighter md:text-5xl">$325</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Complete Core Web Vitals management and optimization
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {pricingFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="size-4 text-secondary flex-shrink-0" />
                      <span className="text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <Button className="w-full" size="lg" asChild>
                  <a href="/contact">
                    Start Performance Monitoring
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bordered-div-padding border-t text-center">
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4">
              <h2 className="font-weight-display text-xl leading-snug tracking-tighter md:text-2xl lg:text-3xl">
                Ready to Guarantee Your Performance?
              </h2>
              <p className="text-muted-foreground mx-auto max-w-[600px] text-sm leading-relaxed md:text-base lg:text-lg">
                Stop losing sales to slow page speeds. Get guaranteed Core Web Vitals compliance 
                with continuous monitoring and optimization.
              </p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" asChild>
                <a href="/contact">
                  Get Free Performance Analysis
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/case-studies">
                  View Performance Results
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
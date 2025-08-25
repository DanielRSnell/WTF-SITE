'use client';

import { 
  CheckCircle, 
  ArrowRight, 
  Zap, 
  Shield, 
  Database, 
  Server, 
  AlertTriangle,
  TrendingUp,
  Clock,
  FileX,
  Settings,
  BarChart3,
  Code
} from 'lucide-react';

import { PlusSigns } from '@/components/icons/plus-signs';
import { Diamonds } from '@/components/icons/diamonds';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const bloatProblems = [
  {
    title: 'Plugin Accumulation',
    description: 'Years of adding plugins without cleanup leads to conflicts, security risks, and performance degradation.',
    icon: <AlertTriangle className="size-6" />,
    impact: 'Can slow sites by 40-60%'
  },
  {
    title: 'Database Bloat',
    description: 'Unused tables, revisions, and orphaned data accumulate over time, slowing queries exponentially.',
    icon: <Database className="size-6" />,
    impact: 'Query times increase 3-10x'
  },
  {
    title: 'Theme & Asset Bloat',
    description: 'Multiple theme files, unused CSS/JS, and unoptimized images create massive frontend payload.',
    icon: <Code className="size-6" />,
    impact: 'Frontend loads exceed 5MB+'
  },
];

const performanceKPIs = [
  {
    metric: 'Autostart Size',
    target: '< 1MB',
    importance: 'Critical for Core Web Vitals and mobile performance',
    description: 'The total size of CSS, JS, and critical resources loaded before user interaction',
    icon: <Zap className="size-5" />,
  },
  {
    metric: 'Admin Query Load',
    target: '< 50 queries/page',
    importance: 'Prevents admin dashboard timeouts and improves workflow',
    description: 'Database queries executed on each admin page load',
    icon: <Settings className="size-5" />,
  },
  {
    metric: 'Frontend Payload',
    target: '< 2MB',
    importance: 'Essential for fast loading and good user experience',
    description: 'Total size of all resources needed to render the homepage',
    icon: <BarChart3 className="size-5" />,
  },
  {
    metric: 'Database Size',
    target: '< 100MB',
    importance: 'Ensures fast backups, updates, and server migrations',
    description: 'Total database size after cleanup and optimization',
    icon: <Database className="size-5" />,
  },
  {
    metric: 'Plugin Count',
    target: '< 15 active',
    importance: 'Reduces conflicts and security vulnerabilities',
    description: 'Number of active plugins after consolidation and cleanup',
    icon: <Shield className="size-5" />,
  },
  {
    metric: 'Load Time',
    target: '< 2 seconds',
    importance: 'Direct impact on conversions and search rankings',
    description: 'Time to fully load and render the homepage',
    icon: <Clock className="size-5" />,
  },
];

const migrationProcess = [
  {
    step: '1',
    title: 'Deep Site Analysis',
    description: 'Comprehensive audit of plugins, themes, database, and performance bottlenecks',
    details: [
      'Plugin compatibility and usage analysis',
      'Database bloat assessment and cleanup plan',
      'Performance baseline and Core Web Vitals audit',
      'Security vulnerability scan'
    ]
  },
  {
    step: '2',
    title: 'Strategic Cleanup',
    description: 'Remove years of accumulated bloat while preserving essential functionality',
    details: [
      'Remove unused plugins and themes',
      'Database cleanup and optimization',
      'Image optimization and format conversion',
      'Code consolidation and minification'
    ]
  },
  {
    step: '3',
    title: 'Optimized Migration',
    description: 'Zero-downtime migration to clean, optimized infrastructure',
    details: [
      'Staged migration with testing environment',
      'DNS management and SSL setup',
      'Performance validation and monitoring',
      'Go-live with immediate support'
    ]
  },
];

const cleanupServices = [
  {
    title: 'Plugin Audit & Cleanup',
    description: 'Remove unused plugins, consolidate functionality, and resolve conflicts',
    icon: <FileX className="size-6" />,
    benefits: [
      'Reduce security vulnerabilities',
      'Eliminate plugin conflicts',
      'Improve admin performance',
      'Lower maintenance overhead'
    ]
  },
  {
    title: 'Database Optimization',
    description: 'Clean unused tables, optimize queries, and reduce database size',
    icon: <Database className="size-6" />,
    benefits: [
      'Faster backup and restore times',
      'Improved query performance',
      'Reduced hosting costs',
      'Better scalability'
    ]
  },
  {
    title: 'Frontend Asset Optimization',
    description: 'Optimize images, minify CSS/JS, and implement modern loading strategies',
    icon: <Code className="size-6" />,
    benefits: [
      'Faster page load times',
      'Better Core Web Vitals scores',
      'Improved mobile performance',
      'Higher search rankings'
    ]
  },
];

const pricingOptions = [
  {
    name: 'Included with Hosting',
    price: 'Included',
    description: 'Complete migration included with Self-Hosted Management',
    features: [
      'Full cleanup and optimization migration',
      'Database cleanup and optimization',
      'Plugin audit and consolidation',
      'Performance optimization',
      'Ongoing maintenance included'
    ],
    highlight: 'Best Value',
    cta: 'Get Hosting + Migration',
    href: '/services/hosting'
  },
  {
    name: 'Included with Unlimited',
    price: 'Included',
    description: 'Migration included with Unlimited Development package',
    features: [
      'Full cleanup and optimization migration',
      'Ongoing development support',
      'Continuous performance monitoring',
      'Plugin management and updates',
      'All future migrations included'
    ],
    highlight: 'Most Popular',
    cta: 'Get Unlimited + Migration',
    href: '/services/development'
  },
  {
    name: 'Standalone Migration',
    price: '$2,500',
    description: 'One-time optimized migration service',
    features: [
      'Complete cleanup and optimization',
      'Database and plugin audit',
      'Performance optimization',
      'Zero downtime migration',
      '30-day post-migration support'
    ],
    highlight: null,
    cta: 'Get Migration Quote',
    href: '/contact'
  },
];

export function MigrationsSection() {
  return (
    <section className="container">
      <div className="border-x">
        <div className="hidden p-7.5 md:block" />

        {/* Hero Section */}
        <div className="bordered-div-padding border-b">
          <div className="text-center space-y-6 md:space-y-8 lg:space-y-10">
            <Badge variant="outline" className="mx-auto">
              <FileX className="size-4 mr-2" />
              Cleanup & Optimize
            </Badge>
            
            <h1 className="font-weight-display text-2xl leading-snug tracking-tighter md:text-3xl lg:text-5xl">
              Clean WooCommerce
              <span className="block text-secondary">Migrations</span>
            </h1>
            
            <p className="text-muted-foreground mx-auto max-w-[700px] text-sm leading-relaxed md:text-lg lg:text-xl">
              Remove years of accumulated bloat during migration. Database cleanup, plugin optimization, 
              and performance improvements that transform your store's speed and efficiency.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" asChild>
                <a href="/contact">
                  Get Migration Analysis
                  <ArrowRight className="size-4 ml-2" />
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

        {/* The Growing Store Problem */}
        <div className="bordered-div-padding border-b">
          <div className="space-y-6 md:space-y-8 lg:space-y-10">
            <div className="text-center space-y-4">
              <h2 className="font-weight-display text-xl leading-snug tracking-tighter md:text-2xl lg:text-3xl">
                The Growing Store Problem
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed md:text-base lg:text-lg max-w-[800px] mx-auto">
                Over time, successful WooCommerce stores accumulate digital "debt" that silently damages performance, 
                security, and user experience. Every plugin, theme change, and update leaves traces behind.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {bloatProblems.map((problem, index) => (
                <div key={index} className="text-center space-y-4 p-6 border rounded-lg">
                  <div className="bg-red-500/10 size-16 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-red-500">
                      {problem.icon}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-weight-display text-lg leading-snug tracking-tighter md:text-xl">
                      {problem.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
                      {problem.description}
                    </p>
                    <Badge variant="destructive" className="text-xs">
                      {problem.impact}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance KPIs */}
        <div className="bordered-div-padding border-b">
          <div className="space-y-6 md:space-y-8 lg:space-y-10">
            <div className="text-center space-y-4">
              <h2 className="font-weight-display text-xl leading-snug tracking-tighter md:text-2xl lg:text-3xl">
                Our Performance Targets
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed md:text-base lg:text-lg max-w-[700px] mx-auto">
                We optimize your migration to achieve specific performance targets that directly impact 
                your store's success, user experience, and search rankings.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {performanceKPIs.map((kpi, index) => (
                <div key={index} className="border rounded-lg p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-secondary/10 p-2 rounded-lg flex-shrink-0">
                      {kpi.icon}
                    </div>
                    <div className="space-y-2 flex-grow">
                      <div className="flex items-center justify-between">
                        <h3 className="font-weight-display text-sm md:text-base">
                          {kpi.metric}
                        </h3>
                        <Badge variant="secondary" className="text-xs font-mono">
                          {kpi.target}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-xs leading-relaxed">
                        {kpi.description}
                      </p>
                      <div className="pt-1">
                        <p className="text-xs font-medium text-secondary">
                          Why it matters: {kpi.importance}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Migration Process */}
        <div className="bordered-div-padding border-b">
          <div className="space-y-6 md:space-y-8 lg:space-y-10">
            <div className="text-center space-y-4">
              <h2 className="font-weight-display text-xl leading-snug tracking-tighter md:text-2xl lg:text-3xl">
                Our Cleanup Migration Process
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed md:text-base lg:text-lg">
                A strategic approach to cleaning and optimizing during migration
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {migrationProcess.map((step, index) => (
                <div key={step.step} className="space-y-6">
                  <div className="text-center space-y-4">
                    <div className="bg-secondary/10 size-16 rounded-full flex items-center justify-center mx-auto">
                      <span className="font-weight-display text-lg">
                        {step.step}
                      </span>
                    </div>
                    <div className="space-y-2">
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
                  </div>
                  
                  <ul className="space-y-2 text-left">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="size-3 text-secondary mt-1 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cleanup Services */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {cleanupServices.map((service, index) => (
            <div 
              key={index}
              className={cn(
                'bordered-div-padding relative flex flex-col gap-6 md:gap-8 lg:gap-10',
                index === 0 && 'border-b md:border-b-0 md:border-r',
                index === 1 && 'border-b md:border-b-0 md:border-r relative',
                index === 2 && 'relative'
              )}
            >
              {index === 1 && (
                <PlusSigns className="absolute top-0 right-full -mt-0.25 hidden !h-[calc(100%+2px)] border-y md:block" />
              )}
              {index === 2 && (
                <Diamonds className="absolute top-0 left-full -mt-0.25 hidden !h-[calc(100%+2px)] border-y md:block" />
              )}
              
              <div className="space-y-4">
                <div className="bg-secondary/10 p-3 rounded-lg w-fit">
                  {service.icon}
                </div>
                <h3 className="font-weight-display text-lg leading-snug tracking-tighter md:text-xl">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
                  {service.description}
                </p>
              </div>

              <ul className="space-y-3">
                {service.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-start gap-3">
                    <TrendingUp className="size-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-sm md:text-base">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Pricing Options */}
        <div className="bordered-div-padding border-t">
          <div className="space-y-6 md:space-y-8 lg:space-y-10">
            <div className="text-center space-y-4">
              <h2 className="font-weight-display text-xl leading-snug tracking-tighter md:text-2xl lg:text-3xl">
                Migration Options
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed md:text-base lg:text-lg">
                Choose the option that fits your needs and budget
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {pricingOptions.map((option, index) => (
                <div 
                  key={index}
                  className={cn(
                    'relative border rounded-lg p-6 space-y-6',
                    option.highlight === 'Most Popular' ? 'border-secondary ring-1 ring-secondary/20' : 'border-border'
                  )}
                >
                  {option.highlight && (
                    <Badge 
                      className={cn(
                        "absolute -top-3 left-1/2 transform -translate-x-1/2",
                        option.highlight === 'Best Value' ? 'bg-green-500' : ''
                      )}
                    >
                      {option.highlight}
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
                      <li key={featureIndex} className="flex items-start gap-2">
                        <CheckCircle className="size-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button asChild className="w-full">
                    <a href={option.href}>
                      {option.cta}
                      <ArrowRight className="size-4 ml-2" />
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bordered-div-padding border-t text-center">
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4">
              <h2 className="font-weight-display text-xl leading-snug tracking-tighter md:text-2xl lg:text-3xl">
                Transform Your Store's Performance
              </h2>
              <p className="text-muted-foreground mx-auto max-w-[600px] text-sm leading-relaxed md:text-base lg:text-lg">
                Don't let years of digital bloat slow down your success. Get a free analysis 
                of your store's optimization potential and migration strategy.
              </p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" asChild>
                <a href="/contact">
                  Get Free Store Analysis
                  <BarChart3 className="size-4 ml-2" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/case-studies">
                  View Migration Results
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
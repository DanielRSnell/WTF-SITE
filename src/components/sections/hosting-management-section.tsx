'use client';

import { CheckCircle, ArrowRight, Zap, TrendingUp, Server, Shield, Database, Monitor, Clock, Users, Gauge, Activity, BarChart3, Sparkles, Lock, Globe, HardDrive } from 'lucide-react';

import { PlusSigns } from '@/components/icons/plus-signs';
import { Diamonds } from '@/components/icons/diamonds';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const performanceMetrics = [
  {
    metric: '3x',
    label: 'Faster Performance',
    description: 'vs managed WooCommerce hosting',
    icon: <Zap className="size-8" />,
    color: 'text-green-600',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/20',
  },
  {
    metric: '100%',
    label: 'Server Ownership',
    description: 'Complete control and access',
    icon: <Lock className="size-8" />,
    color: 'text-blue-600',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20',
  },
  {
    metric: '99.9%',
    label: 'Uptime Guarantee',
    description: 'Enterprise-level reliability',
    icon: <Activity className="size-8" />,
    color: 'text-purple-600',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20',
  },
];

const infrastructureFeatures = [
  {
    title: 'WooCommerce-Optimized Stack',
    description: 'Every component specifically configured for peak WooCommerce performance',
    icon: <Server className="size-6" />,
    bgColor: 'bg-blue-500/10',
    textColor: 'text-blue-600',
    features: [
      'NGINX with WooCommerce-specific rules',
      'PHP-FPM optimized for e-commerce traffic',
      'MariaDB with e-commerce indexing',
      'Redis object caching for products/sessions',
      'Elasticsearch for advanced search (optional)'
    ]
  },
  {
    title: 'Advanced Security Architecture',
    description: 'Multi-layer security protecting your store and customer data',
    icon: <Shield className="size-6" />,
    bgColor: 'bg-red-500/10',
    textColor: 'text-red-600',
    features: [
      'Web Application Firewall (WAF)',
      'DDoS protection and rate limiting',
      'SSL/TLS certificate automation',
      'Regular security audits and patches',
      'Isolated staging environments'
    ]
  },
  {
    title: 'Performance Monitoring Suite',
    description: 'Real-time insights into your store\'s performance and health',
    icon: <Monitor className="size-6" />,
    bgColor: 'bg-green-500/10',
    textColor: 'text-green-600',
    features: [
      '24/7 server health monitoring',
      'Core Web Vitals tracking',
      'Database performance analytics',
      'Traffic pattern analysis',
      'Proactive issue detection'
    ]
  },
  {
    title: 'Automated Backup Systems',
    description: 'Comprehensive backup strategy with instant recovery options',
    icon: <HardDrive className="size-6" />,
    bgColor: 'bg-purple-500/10',
    textColor: 'text-purple-600',
    features: [
      'Hourly database backups',
      'Daily full server snapshots',
      'Off-site backup replication',
      'One-click restore functionality',
      'Point-in-time recovery options'
    ]
  }
];

const managementServices = [
  {
    category: 'Server Administration',
    description: 'Complete server lifecycle management',
    icon: <Server className="size-6" />,
    services: [
      'Initial server setup and configuration',
      'Operating system maintenance and updates',
      'Software stack optimization',
      'Resource scaling and load balancing',
      'Performance tuning and optimization'
    ]
  },
  {
    category: 'WooCommerce Expertise',
    description: 'Specialized e-commerce optimization',
    icon: <BarChart3 className="size-6" />,
    services: [
      'WooCommerce-specific server tuning',
      'Database optimization for product catalogs',
      'Checkout flow performance optimization',
      'Third-party integration support',
      'Custom development server requirements'
    ]
  },
  {
    category: 'Security Management',
    description: 'Proactive security monitoring and response',
    icon: <Shield className="size-6" />,
    services: [
      'Security patch management',
      'Vulnerability assessments',
      'Intrusion detection systems',
      'Security incident response',
      'Compliance monitoring (PCI DSS)'
    ]
  },
  {
    category: '24/7 Expert Support',
    description: 'Always-available WooCommerce specialists',
    icon: <Users className="size-6" />,
    services: [
      'Real WooCommerce developers (not generic support)',
      'Emergency response within 15 minutes',
      'Proactive issue prevention',
      'Performance optimization recommendations',
      'Business growth planning consultations'
    ]
  }
];

const comparisonPoints = [
  {
    feature: 'Server Access',
    managed: 'Restricted SSH, limited control',
    selfHosted: 'Full root access, complete control',
    advantage: 'selfHosted'
  },
  {
    feature: 'Performance',
    managed: 'Generic optimization, shared resources',
    selfHosted: 'WooCommerce-specific tuning, dedicated resources',
    advantage: 'selfHosted'
  },
  {
    feature: 'Plugin Restrictions',
    managed: 'Forbidden plugins, functionality limits',
    selfHosted: 'Install anything, no restrictions',
    advantage: 'selfHosted'
  },
  {
    feature: 'Pricing Transparency',
    managed: 'Hidden markups, surprise costs',
    selfHosted: 'Transparent pricing, predictable costs',
    advantage: 'selfHosted'
  },
  {
    feature: 'Support Quality',
    managed: 'Generic hosting support',
    selfHosted: 'WooCommerce development experts',
    advantage: 'selfHosted'
  },
  {
    feature: 'Scalability',
    managed: 'Limited by hosting tiers',
    selfHosted: 'Unlimited scaling options',
    advantage: 'selfHosted'
  }
];

const hostingPlan = {
  name: 'Self-Hosted Management',
  description: 'Complete WooCommerce server management',
  setupPrice: '$2,000',
  monthlyPrice: '$100',
  features: [
    'Complete server setup and optimization',
    'WooCommerce-tuned performance stack',
    'NGINX with WooCommerce-specific rules',
    'Redis object caching implementation',
    '24/7 monitoring and alerts',
    'Automated backups with quick recovery',
    'SSL certificate management',
    'Security hardening and updates',
    'Performance monitoring and reports',
    'Database optimization for e-commerce',
    'CDN integration and configuration',
    'Expert WooCommerce support team'
  ]
};

export function HostingManagementSection() {
  return (
    <section className="container">
      <div className="border-x">
        <div className="hidden p-7.5 md:block" />

        {/* Hero Section */}
        <div className="bordered-div-padding border-b">
          <div className="text-center space-y-6 md:space-y-8 lg:space-y-10">
            <Badge variant="outline" className="mx-auto">
              <Server className="size-4 mr-2" />
              Most Popular Service
            </Badge>
            
            <h1 className="font-weight-display text-2xl leading-snug tracking-tighter md:text-3xl lg:text-5xl">
              Self-Hosted WooCommerce
              <span className="block text-secondary">Management</span>
            </h1>
            
            <p className="text-muted-foreground mx-auto max-w-[700px] text-sm leading-relaxed md:text-lg lg:text-xl">
              Get the speed, control, and expert support your WooCommerce store deserves—without 
              managed hosting markups. Complete server ownership with WooCommerce-specific optimization.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" asChild>
                <a href="/contact">
                  Get Custom Quote
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#comparison">
                  Compare Options
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {performanceMetrics.map((metric, index) => (
            <div 
              key={index}
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
              
              <div className="text-center space-y-4">
                <div className={cn('p-4 rounded-xl border-2 mx-auto w-full max-w-xs', metric.bgColor, metric.borderColor)}>
                  <div className="flex flex-col items-center gap-3">
                    <div className={cn('p-3 rounded-lg', metric.bgColor)}>
                      {metric.icon}
                    </div>
                    <div className="text-center">
                      <div className={cn('text-3xl font-weight-display tracking-tighter md:text-4xl', metric.color)}>
                        {metric.metric}
                      </div>
                      <h3 className="font-weight-display text-lg leading-snug tracking-tighter mt-2">
                        {metric.label}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {metric.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Infrastructure Features */}
        <div className="bordered-div-padding border-t">
          <div className="space-y-6 md:space-y-8 lg:space-y-10">
            <div className="text-center space-y-4">
              <h2 className="font-weight-display text-xl leading-snug tracking-tighter md:text-2xl lg:text-3xl">
                Enterprise-Grade Infrastructure
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed md:text-base lg:text-lg">
                Purpose-built for WooCommerce performance and security
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {infrastructureFeatures.map((feature, index) => (
                <div key={index} className="p-6 border rounded-xl space-y-4">
                  <div className="flex items-start gap-4">
                    <div className={cn('p-3 rounded-lg flex-shrink-0', feature.bgColor)}>
                      {feature.icon}
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-weight-display text-lg leading-snug tracking-tighter">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="size-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Management Services */}
        <div className="bordered-div-padding border-t">
          <div className="space-y-6 md:space-y-8 lg:space-y-10">
            <div className="text-center space-y-4">
              <h2 className="font-weight-display text-xl leading-snug tracking-tighter md:text-2xl lg:text-3xl">
                Complete Management Services
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed md:text-base lg:text-lg">
                Expert WooCommerce developers managing your infrastructure
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {managementServices.map((service, index) => (
                <div key={index} className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-secondary/10 p-2 rounded-lg">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="font-weight-display text-lg leading-snug tracking-tighter">
                        {service.category}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 ml-11">
                    {service.services.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="size-3 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Managed vs Self-Hosted Comparison */}
        <div className="bordered-div-padding border-t" id="comparison">
          <div className="space-y-6 md:space-y-8 lg:space-y-10">
            <div className="text-center space-y-4">
              <h2 className="font-weight-display text-xl leading-snug tracking-tighter md:text-2xl lg:text-3xl">
                Managed Hosting vs Self-Hosted Management
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed md:text-base lg:text-lg">
                Why server ownership matters for serious WooCommerce businesses
              </p>
            </div>

            <div className="space-y-4">
              {comparisonPoints.map((point, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 border rounded-lg">
                  <div className="font-medium text-sm md:text-base">
                    {point.feature}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <span className="text-red-600 font-medium">Managed: </span>
                    {point.managed}
                  </div>
                  <div className="text-sm">
                    <span className="text-secondary font-medium">Self-Hosted: </span>
                    <span className="text-secondary">{point.selfHosted}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hosting Management Pricing */}
        <div className="bordered-div-padding border-t">
          <div className="space-y-6 md:space-y-8 lg:space-y-10">
            <div className="text-center space-y-4">
              <h2 className="font-weight-display text-xl leading-snug tracking-tighter md:text-2xl lg:text-3xl">
                Hosting Management Plans
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed md:text-base lg:text-lg">
                Choose standalone hosting or get it FREE with development
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Main Hosting Plan - 3/4 width */}
              <div className="lg:col-span-3">
                <div className="border rounded-xl p-8 space-y-6 h-full">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <h3 className="font-weight-display text-xl leading-snug tracking-tighter">
                        {hostingPlan.name}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {hostingPlan.description}
                      </p>
                    </div>
                    
                    {/* Pricing moved to top right and larger */}
                    <div className="text-right flex items-center gap-3">
                      <div className="text-center">
                        <div className="text-3xl font-weight-display tracking-tighter md:text-4xl">
                          {hostingPlan.setupPrice}
                        </div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wide">
                          Setup & Migration
                        </div>
                      </div>
                      <div className="text-muted-foreground text-3xl">+</div>
                      <div className="text-center">
                        <div className="text-3xl font-weight-display tracking-tighter md:text-4xl">
                          {hostingPlan.monthlyPrice}
                        </div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wide">
                          Per Month
                        </div>
                      </div>
                    </div>
                  </div>

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {hostingPlan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="size-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Button aligned to the left */}
                  <div className="flex justify-start">
                    <Button size="lg" className="gap-2" asChild>
                      <a href="/contact">
                        Get Started
                        <ArrowRight className="size-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Promotional Card - 1/4 width */}
              <div className="lg:col-span-1">
                <div className="p-6 bg-gradient-to-br from-secondary/10 via-secondary/5 to-transparent border-2 border-secondary/20 rounded-xl h-full flex flex-col">
                  <div className="space-y-4 flex-1">
                    <Badge className="w-fit">
                      <Sparkles className="size-3 mr-2" />
                      Better Value
                    </Badge>
                    
                    <h3 className="font-weight-display text-lg leading-snug tracking-tighter">
                      Included FREE
                    </h3>
                    
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">
                        Get hosting management at no additional cost with our
                      </p>
                      <div className="text-base font-medium">
                        Unlimited Development
                      </div>
                      <div className="text-sm text-muted-foreground">
                        $4,000/month
                      </div>
                    </div>
                    
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="size-3 text-secondary flex-shrink-0" />
                        <span>All hosting features</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="size-3 text-secondary flex-shrink-0" />
                        <span>Unlimited development</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="size-3 text-secondary flex-shrink-0" />
                        <span>No setup fees</span>
                      </li>
                    </ul>
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-full mt-4" asChild>
                    <a href="/services/development">
                      Learn More
                    </a>
                  </Button>
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
                Ready to Own Your WooCommerce Infrastructure?
              </h2>
              <p className="text-muted-foreground mx-auto max-w-[600px] text-sm leading-relaxed md:text-base lg:text-lg">
                Get the performance, control, and expert WooCommerce support your business deserves. 
                No managed hosting restrictions, no hidden markups—just superior performance.
              </p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" asChild>
                <a href="/contact">
                  Get Your Custom Quote
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
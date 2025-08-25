'use client';

import { CheckCircle, ArrowRight, Zap, TrendingUp, Users, Clock, Shield, Sparkles, Database, Server, Code, Target, BarChart3, MessageSquare, Calendar, ClipboardList, Rocket } from 'lucide-react';

import { PlusSigns } from '@/components/icons/plus-signs';
import { Diamonds } from '@/components/icons/diamonds';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const allIncludedServices = [
  {
    title: 'Complete Website Optimization',
    description: 'Full performance optimization including Core Web Vitals, database cleanup, and image optimization',
    icon: <Zap className="size-6" />,
    bgColor: 'bg-green-500/10',
    textColor: 'text-green-600',
    items: [
      'Database optimization and cleanup',
      'Image compression and WebP conversion', 
      'Core Web Vitals optimization',
      'Caching implementation',
      'Speed improvements'
    ]
  },
  {
    title: 'Advanced Migrations',
    description: 'Zero-downtime migrations between hosts, platforms, or complete infrastructure overhauls',
    icon: <Server className="size-6" />,
    bgColor: 'bg-blue-500/10',
    textColor: 'text-blue-600',
    items: [
      'Host-to-host migrations',
      'Platform migrations (Shopify to WooCommerce)',
      'Database migrations and cleanup',
      'DNS management',
      'SSL and security setup'
    ]
  },
  {
    title: 'Hosting Management',
    description: 'Complete server management, monitoring, and maintenance for optimal performance',
    icon: <Database className="size-6" />,
    bgColor: 'bg-purple-500/10',
    textColor: 'text-purple-600',
    items: [
      'Server setup and configuration',
      'Performance monitoring',
      'Security hardening',
      'Backup management',
      'Update management'
    ]
  },
  {
    title: 'Custom Development',
    description: 'Any WooCommerce feature, integration, or customization your business needs',
    icon: <Code className="size-6" />,
    bgColor: 'bg-orange-500/10',
    textColor: 'text-orange-600',
    items: [
      'Custom functionality development',
      'Third-party integrations',
      'Plugin development',
      'Theme customizations',
      'API development'
    ]
  }
];

const processSteps = [
  {
    step: '1',
    title: 'Submit Request via ClickUp',
    description: 'Use our organized project management system to submit any request - from simple tweaks to complex migrations.',
    icon: <ClipboardList className="size-6" />,
    details: [
      'Detailed request forms for different service types',
      'Attach wireframes, mockups, or documentation',
      'Automatic priority assignment based on urgency',
      'Direct communication with your dedicated PM'
    ]
  },
  {
    step: '2',
    title: 'Project Manager Planning',
    description: 'Your dedicated PM reviews, estimates, and creates a detailed implementation plan with transparent timeline.',
    icon: <Users className="size-6" />,
    details: [
      'Dedicated PM learns your business and preferences',
      'Detailed project breakdown and timeline',
      'Resource allocation and team assignment',
      'Clear communication via Slack and ClickUp updates'
    ]
  },
  {
    step: '3',
    title: 'Expert Team Execution',
    description: 'Our specialized team executes your project with daily updates and transparent progress tracking.',
    icon: <Rocket className="size-6" />,
    details: [
      'Daily progress updates in ClickUp',
      'Direct Slack channel for real-time communication',
      'Staging environment for testing and review',
      'Quality assurance before deployment'
    ]
  }
];

const faqs = [
  {
    question: 'How many tasks can I submit per month?',
    answer: 'Unlimited! There\'s no cap on the number of requests you can submit. Our team works through your queue in order of priority, ensuring everything gets done efficiently.'
  },
  {
    question: 'How long does it typically take to complete tasks?',
    answer: 'Turnaround times depend on complexity: Simple tweaks (24-48 hours), Medium features (3-5 business days), Complex projects like migrations (1-2 weeks), Large custom developments (2-4 weeks). Your PM provides accurate estimates for each request.'
  },
  {
    question: 'How are tasks planned and prioritized?',
    answer: 'Your dedicated Project Manager reviews all requests and creates detailed implementation plans. You can mark items as urgent, and we\'ll adjust priorities accordingly. Everything is tracked transparently in ClickUp with clear timelines.'
  },
  {
    question: 'What communication tools do you use?',
    answer: 'We provide transparent tracking via ClickUp for project management, dedicated Slack channels for real-time communication, and email updates for major milestones. You choose your preferred communication method.'
  },
  {
    question: 'Is there really a dedicated Project Manager?',
    answer: 'Yes! Every client gets a dedicated PM who learns your business, manages your project queue, coordinates with our development team, and ensures clear communication throughout every project.'
  },
  {
    question: 'What if I need a complex migration or optimization?',
    answer: 'All our premium services are included! Whether you need a complete site migration, database optimization, Core Web Vitals improvements, or hosting management - it\'s all covered under your monthly plan.'
  },
  {
    question: 'Can I pause my subscription?',
    answer: 'Absolutely! You can pause your subscription at any time and resume when you\'re ready. This is perfect for seasonal businesses or when you have fewer development needs.'
  },
  {
    question: 'How do you ensure quality and security?',
    answer: 'All work goes through our staging environment first, comprehensive testing including security reviews, code review by senior developers, and your approval before anything goes live on your production site.'
  }
];

const pricingFeatures = [
  'Unlimited development requests',
  'Complete website optimizations included',
  'Advanced migrations (host, platform, infrastructure)',
  'Full hosting management and monitoring', 
  'Core Web Vitals optimization',
  'Database cleanup and optimization',
  'Custom feature development',
  'Third-party integrations',
  'Dedicated Project Manager',
  'ClickUp project management',
  'Slack communication channel',
  'Staging environment for testing',
  'Security reviews and testing',
  'Priority support and bug fixes',
  'No hourly billing ever'
];

const testimonialMetrics = [
  {
    metric: '$4,000',
    label: 'Monthly Investment',
    description: 'Replace $20,000+ of freelancer costs'
  },
  {
    metric: '15-30+',
    label: 'Tasks Per Month',
    description: 'Unlimited requests, consistent delivery'
  },
  {
    metric: '24-48hr',
    label: 'Simple Task Turnaround',
    description: 'No waiting for quotes or scheduling'
  },
  {
    metric: '100%',
    label: 'All Services Included',
    description: 'Optimization, migrations, hosting, development'
  }
];

export function UnlimitedDevelopmentSection() {
  return (
    <section className="container">
      <div className="border-x">
        <div className="hidden p-7.5 md:block" />

        {/* Hero Section */}
        <div className="bordered-div-padding border-b">
          <div className="text-center space-y-6 md:space-y-8 lg:space-y-10">
            <Badge variant="outline" className="mx-auto">
              <Sparkles className="size-4 mr-2" />
              No Hourly Billing Ever
            </Badge>
            
            <h1 className="font-weight-display text-2xl leading-snug tracking-tighter md:text-3xl lg:text-5xl">
              Unlimited WooCommerce
              <span className="block text-secondary">Development</span>
            </h1>
            
            <p className="text-muted-foreground mx-auto max-w-[700px] text-sm leading-relaxed md:text-lg lg:text-xl">
              Complete WooCommerce service including unlimited development, optimization, 
              migrations, hosting management - all with a dedicated team and transparent project management.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" asChild>
                <a href="/contact">
                  Start Unlimited Plan
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#all-services-included">
                  See Everything Included
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Value Proposition Metrics */}
        <div className="bordered-div-padding border-b">
          <div className="space-y-6 md:space-y-8 lg:space-y-10">
            <div className="text-center space-y-4">
              <h2 className="font-weight-display text-xl leading-snug tracking-tighter md:text-2xl lg:text-3xl">
                Replace Your Entire Development Team
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed md:text-base lg:text-lg">
                One monthly fee covers everything your WooCommerce store needs
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
              {testimonialMetrics.map((metric, index) => (
                <div key={index} className="text-center space-y-2 p-4 border rounded-lg bg-gradient-to-br from-secondary/5 to-secondary/10">
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

        {/* ALL SERVICES INCLUDED - Main Feature */}
        <div className="bordered-div-padding border-b" id="all-services-included">
          <div className="space-y-6 md:space-y-8 lg:space-y-10">
            <div className="text-center space-y-4">
              <Badge variant="secondary" className="text-lg px-6 py-2">
                <CheckCircle className="size-5 mr-2" />
                ALL SERVICES INCLUDED
              </Badge>
              <h2 className="font-weight-display text-xl leading-snug tracking-tighter md:text-2xl lg:text-3xl">
                Every Service We Offer is Included
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed md:text-base lg:text-lg">
                No upsells, no additional fees. One price includes optimization, migrations, hosting, and unlimited development.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {allIncludedServices.map((service, index) => (
                <div key={index} className="p-6 border-2 border-secondary/20 rounded-xl bg-gradient-to-br from-secondary/5 to-secondary/10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={cn('p-3 rounded-lg', service.bgColor)}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-weight-display text-lg leading-snug tracking-tighter mb-2">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="size-4 text-secondary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="text-center p-6 bg-secondary/5 rounded-xl border-2 border-secondary/20">
              <h3 className="font-weight-display text-xl mb-2 text-secondary">
                Plus ANY Custom Development You Need
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl mx-auto">
                Custom features, integrations, bug fixes, performance improvements, design implementations - 
                if it's WooCommerce related, it's included in your unlimited plan.
              </p>
            </div>
          </div>
        </div>

        {/* Process with PM and Communication */}
        <div className="bordered-div-padding border-b">
          <div className="space-y-6 md:space-y-8 lg:space-y-10">
            <div className="text-center space-y-4">
              <h2 className="font-weight-display text-xl leading-snug tracking-tighter md:text-2xl lg:text-3xl">
                Transparent Process & Communication
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed md:text-base lg:text-lg">
                Dedicated Project Manager, ClickUp tracking, and Slack communication
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {processSteps.map((step, index) => (
                <div key={step.step} className="relative space-y-6">
                  <div className="bg-secondary/10 size-16 rounded-full flex items-center justify-center">
                    {step.icon}
                  </div>
                  
                  <div className="text-left space-y-2">
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

                  <ul className="space-y-2 text-left">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="size-3 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Premium Pricing Section */}
        <div className="bordered-div-padding border-b">
          <div className="space-y-6 md:space-y-8 lg:space-y-10">
            <div className="text-center space-y-4">
              <h2 className="font-weight-display text-xl leading-snug tracking-tighter md:text-2xl lg:text-3xl">
                One Price, Everything Included
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed md:text-base lg:text-lg">
                No hourly billing, no project quotes, no surprise fees
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="relative border-2 border-secondary rounded-xl p-8 space-y-6 bg-gradient-to-br from-secondary/10 via-secondary/5 to-transparent">
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 text-base px-4 py-1">
                  <Sparkles className="size-4 mr-1" />
                  Complete WooCommerce Solution
                </Badge>
                
                <div className="text-center space-y-2">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-5xl font-weight-display tracking-tighter md:text-6xl">$4,000</span>
                    <span className="text-muted-foreground text-xl">/month</span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Replaces $15,000-$25,000+ of traditional development costs
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

                <div className="pt-4 border-t border-secondary/20">
                  <Button className="w-full" size="lg" asChild>
                    <a href="/contact">
                      Start Unlimited Development Today
                    </a>
                  </Button>
                  <p className="text-center text-xs text-muted-foreground mt-2">
                    Pause or cancel anytime. No long-term contracts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comprehensive FAQ Section */}
        <div className="bordered-div-padding border-b">
          <div className="space-y-6 md:space-y-8 lg:space-y-10">
            <div className="text-center space-y-4">
              <h2 className="font-weight-display text-xl leading-snug tracking-tighter md:text-2xl lg:text-3xl">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed md:text-base lg:text-lg">
                Everything you need to know about our unlimited development process
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {faqs.map((faq, index) => (
                <div key={index} className="p-6 border rounded-lg space-y-3">
                  <h3 className="font-weight-display text-lg leading-snug tracking-tighter">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Communication Tools Highlight */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="bordered-div-padding relative flex flex-col gap-6 md:gap-8 lg:gap-10">
            <PlusSigns className="absolute top-0 right-full -mt-0.25 hidden !h-[calc(100%+2px)] border-y md:block" />
            
            <div className="space-y-4">
              <div className="bg-blue-500/10 size-12 rounded-lg flex items-center justify-center">
                <ClipboardList className="size-6 text-blue-600" />
              </div>
              
              <h3 className="font-weight-display text-lg leading-snug tracking-tighter md:text-xl">
                ClickUp Project Management
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
                Complete transparency with project tracking, timelines, and progress updates for every request.
              </p>
            </div>

            <ul className="space-y-3">
              {[
                'Visual project timelines',
                'Task priority management',
                'File sharing and comments',
                'Progress tracking',
                'Deadline notifications'
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="size-4 text-secondary flex-shrink-0" />
                  <span className="text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bordered-div-padding border-l border-t md:border-t-0 relative flex flex-col gap-6 md:gap-8 lg:gap-10">
            <Diamonds className="absolute top-0 left-full -mt-0.25 hidden !h-[calc(100%+2px)] border-y md:block" />
            
            <div className="space-y-4">
              <div className="bg-green-500/10 size-12 rounded-lg flex items-center justify-center">
                <MessageSquare className="size-6 text-green-600" />
              </div>
              
              <h3 className="font-weight-display text-lg leading-snug tracking-tighter md:text-xl">
                Slack Communication
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
                Direct communication channel with your team and PM for real-time updates and quick questions.
              </p>
            </div>

            <ul className="space-y-3">
              {[
                'Dedicated team channel',
                'Real-time progress updates',
                'Quick question responses',
                'File sharing',
                'Daily status updates'
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="size-4 text-secondary flex-shrink-0" />
                  <span className="text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bordered-div-padding border-l border-t md:border-t-0 flex flex-col gap-6 md:gap-8 lg:gap-10">
            <div className="space-y-4">
              <div className="bg-purple-500/10 size-12 rounded-lg flex items-center justify-center">
                <Users className="size-6 text-purple-600" />
              </div>
              
              <h3 className="font-weight-display text-lg leading-snug tracking-tighter md:text-xl">
                Dedicated Project Manager
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
                Your personal PM coordinates everything, learns your business, and ensures smooth project delivery.
              </p>
            </div>

            <ul className="space-y-3">
              {[
                'Single point of contact',
                'Project planning and coordination',
                'Team resource management',
                'Timeline management',
                'Quality assurance oversight'
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="size-4 text-secondary flex-shrink-0" />
                  <span className="text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bordered-div-padding border-t text-center">
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4">
              <h2 className="font-weight-display text-xl leading-snug tracking-tighter md:text-2xl lg:text-3xl">
                Ready for Unlimited WooCommerce Development?
              </h2>
              <p className="text-muted-foreground mx-auto max-w-[600px] text-sm leading-relaxed md:text-base lg:text-lg">
                Stop worrying about hourly rates and project quotes. Get unlimited development, optimization, 
                migrations, and hosting management with transparent communication and dedicated support.
              </p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" asChild>
                <a href="/contact">
                  Start Your Unlimited Plan
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/case-studies">
                  View Development Examples
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
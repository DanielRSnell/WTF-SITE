'use client';

import { 
  RefreshCw, 
  ArrowRight, 
  Zap, 
  Shield, 
  TrendingUp, 
  CheckCircle, 
  AlertTriangle,
  Clock,
  Target,
  BarChart3,
  Code,
  Layers,
  Database,
  FileX,
  Gauge,
  Blocks
} from 'lucide-react';

import { PlusSigns } from '@/components/icons/plus-signs';
import { Diamonds } from '@/components/icons/diamonds';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const legacyProblems = [
  {
    title: 'Page Builder Bloat',
    description: 'Elementor, Divi, and other builders create massive CSS/JS overhead that slows your site to a crawl.',
    icon: <Layers className="size-6" />,
    impact: 'Sites often load 3-5MB+ of unnecessary code',
    color: 'red'
  },
  {
    title: 'Legacy Dependencies',
    description: 'Old themes and plugins create security vulnerabilities and compatibility issues.',
    icon: <Shield className="size-6" />,
    impact: 'Increased security risk and update conflicts',
    color: 'orange'
  },
  {
    title: 'Poor Core Web Vitals',
    description: 'Heavy page builders destroy Google rankings with terrible performance scores.',
    icon: <Gauge className="size-6" />,
    impact: 'Rankings suffer from poor user experience',
    color: 'red'
  },
];

const modernBenefits = [
  {
    title: 'Native Gutenberg Performance',
    description: 'Clean, semantic HTML with minimal CSS/JS footprint for lightning-fast loading.',
    icon: <Zap className="size-6" />,
    improvement: '70-80% faster loading times'
  },
  {
    title: 'Future-Proof Architecture',
    description: 'Built on WordPress core technology that evolves with the platform.',
    icon: <TrendingUp className="size-6" />,
    improvement: 'No vendor lock-in or compatibility issues'
  },
  {
    title: 'SEO & Accessibility Ready',
    description: 'Semantic markup and proper structure that search engines and users love.',
    icon: <Target className="size-6" />,
    improvement: 'Better rankings and user experience'
  },
  {
    title: 'Easy Maintenance',
    description: 'Simple, clean codebase that any developer can understand and maintain.',
    icon: <Code className="size-6" />,
    improvement: 'Reduced maintenance costs'
  },
];

const rebuildProcess = [
  {
    step: '1',
    title: 'Content & Design Analysis',
    description: 'Comprehensive audit of existing content, layout patterns, and functionality',
    details: [
      'Content inventory and mapping',
      'Design system extraction',
      'Functionality requirements analysis',
      'Performance baseline measurement'
    ]
  },
  {
    step: '2',
    title: 'Modern Architecture Design',
    description: 'Create optimized structure using Gutenberg blocks and modern best practices',
    details: [
      'Custom block development',
      'Performance-first CSS architecture',
      'Semantic HTML structure',
      'Mobile-responsive design system'
    ]
  },
  {
    step: '3',
    title: 'Content Migration & Testing',
    description: 'Migrate content to new structure with comprehensive testing and optimization',
    details: [
      'Automated content migration',
      'Cross-browser testing',
      'Performance validation',
      'SEO preservation and enhancement'
    ]
  },
];

const pageBuilderConversions = [
  {
    title: 'Elementor to Gutenberg',
    description: 'Transform heavy Elementor layouts into clean, fast Gutenberg blocks',
    icon: <Layers className="size-8" />,
    href: '/rebuilds/elementor-to-gutenberg',
    stats: [
      '70% reduction in page size',
      '3x faster loading speed',
      '90% less JavaScript'
    ]
  },
  {
    title: 'Bricks to Gutenberg',
    description: 'Convert Bricks Builder complexity to native WordPress simplicity',
    icon: <Blocks className="size-8" />,
    href: '/rebuilds/bricks-to-gutenberg',
    stats: [
      '60% smaller CSS files',
      '2x better Core Web Vitals',
      'Zero builder dependencies'
    ]
  },
  {
    title: 'Divi to Gutenberg',
    description: 'Modernize Divi layouts with performance-optimized Gutenberg blocks',
    icon: <Code className="size-8" />,
    href: '/rebuilds/divi-to-gutenberg',
    stats: [
      '80% less CSS overhead',
      '4x faster admin editing',
      'Native WordPress experience'
    ]
  },
];

const redesignServices = [
  {
    title: 'Figma to Gutenberg',
    description: 'Convert existing Figma designs into pixel-perfect Gutenberg blocks',
    icon: <Code className="size-6" />,
    features: [
      'Pixel-perfect design implementation',
      'Custom Gutenberg blocks',
      'Responsive breakpoint matching',
      'Interactive element recreation',
      'Design system integration'
    ]
  },
  {
    title: 'Complete Redesign + Build',
    description: 'Full UX/UI redesign in Figma followed by Gutenberg implementation',
    icon: <Target className="size-6" />,
    features: [
      'Complete UX/UI design in Figma',
      'User experience optimization',
      'Modern design system creation',
      'Performance-first development',
      'Brand consistency implementation'
    ]
  },
  {
    title: 'Design System Creation',
    description: 'Establish comprehensive design systems for scalable growth',
    icon: <Layers className="size-6" />,
    features: [
      'Component library design',
      'Typography and color systems',
      'Spacing and grid systems',
      'Reusable block templates',
      'Brand guideline documentation'
    ]
  },
];

const pricingOptions = [
  {
    name: 'Included with Unlimited',
    price: 'Included',
    description: 'Complete rebuilds included with Unlimited Development package',
    features: [
      'All page rebuilds included',
      'Custom block development',
      'Performance optimization',
      'Ongoing maintenance',
      'Priority support',
      'Unlimited revisions'
    ],
    highlight: 'Best Value',
    cta: 'Get Unlimited Development',
    href: '/services/development'
  },
  {
    name: 'Per-Page Rebuilds',
    price: '$400-600',
    description: 'Individual page conversion pricing',
    features: [
      'Single page conversion',
      'Performance optimization',
      'Mobile-responsive design',
      'SEO preservation',
      '30-day support',
      'Custom block creation'
    ],
    highlight: null,
    cta: 'Get Page Quote',
    href: '/contact?service=rebuild-page'
  },
  {
    name: 'Full Site Package',
    price: 'Custom Quote',
    description: 'Complete site rebuild with bulk pricing',
    features: [
      'Bulk page conversion rates',
      'Complete site architecture',
      'Custom functionality',
      'Performance monitoring',
      'Team training included',
      '90-day support'
    ],
    highlight: null,
    cta: 'Get Site Quote',
    href: '/contact?service=rebuild-site'
  },
];

export function RebuildsSection() {
  return (
    <section className="container">
      <div className="border-x">
        <div className="hidden p-7.5 md:block" />

        {/* Hero Section */}
        <div className="bordered-div-padding border-b">
          <div className="text-center space-y-6 md:space-y-8 lg:space-y-10">
            <Badge variant="outline" className="mx-auto">
              <RefreshCw className="size-4 mr-2" />
              Performance Rebuilds
            </Badge>
            
            <h1 className="font-weight-display text-2xl leading-snug tracking-tighter md:text-3xl lg:text-5xl">
              Transform Legacy Sites into
              <span className="block text-secondary">High-Performance Builds</span>
            </h1>
            
            <p className="text-muted-foreground mx-auto max-w-[800px] text-sm leading-relaxed md:text-lg lg:text-xl">
              Replace bloated page builders with clean, fast Gutenberg architecture. 
              Get <span className="font-semibold text-secondary">70-80% faster loading speeds</span>, better SEO rankings, and future-proof maintainability.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" asChild>
                <a href="/contact?service=rebuild">
                  Get Rebuild Analysis
                  <ArrowRight className="size-4 ml-2" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#conversion-options">
                  View Conversion Options
                </a>
              </Button>
            </div>

            {/* Performance Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
              {[
                { metric: '70-80%', label: 'Faster Loading' },
                { metric: '90%', label: 'Less JavaScript' },
                { metric: '4x', label: 'Better Admin Speed' },
                { metric: '100%', label: 'Future-Proof' }
              ].map((item, index) => (
                <div key={index} className="p-4 border rounded-lg hover:border-secondary/50 transition-colors">
                  <div className="text-xl font-weight-display text-secondary mb-1">
                    {item.metric}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* The Legacy Problem */}
        <div className="bordered-div-padding border-b">
          <div className="space-y-6 md:space-y-8 lg:space-y-10">
            <div className="text-center space-y-4">
              <Badge variant="outline" className="mx-auto">
                <AlertTriangle className="size-4 mr-2" />
                Performance Crisis
              </Badge>
              
              <h2 className="font-weight-display text-xl leading-snug tracking-tighter md:text-2xl lg:text-3xl">
                Why Legacy Sites Are
                <span className="block text-secondary">Holding You Back</span>
              </h2>
              
              <p className="text-muted-foreground text-sm leading-relaxed md:text-base lg:text-lg max-w-[800px] mx-auto">
                Page builders were convenient, but they've created a performance crisis. 
                Your competitors with modern builds are leaving you behind in speed, SEO, and user experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {legacyProblems.map((problem, index) => (
                <div key={index} className="text-center space-y-4 p-6 border rounded-lg hover:border-secondary/50 transition-colors">
                  <div className={cn(
                    "size-16 rounded-full flex items-center justify-center mx-auto",
                    problem.color === 'red' ? 'bg-red-500/10' : 'bg-orange-500/10'
                  )}>
                    <span className={cn(
                      problem.color === 'red' ? 'text-red-500' : 'text-orange-500'
                    )}>
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

        {/* Modern Benefits */}
        <div className="bordered-div-padding border-b">
          <div className="space-y-6 md:space-y-8 lg:space-y-10">
            <div className="text-center space-y-4">
              <Badge variant="outline" className="mx-auto">
                <Zap className="size-4 mr-2" />
                Modern Architecture
              </Badge>
              
              <h2 className="font-weight-display text-xl leading-snug tracking-tighter md:text-2xl lg:text-3xl">
                The Modern Gutenberg
                <span className="block text-secondary">Advantage</span>
              </h2>
              
              <p className="text-muted-foreground text-sm leading-relaxed md:text-base lg:text-lg max-w-[700px] mx-auto">
                Clean, semantic architecture that leverages WordPress core capabilities for 
                maximum performance, maintainability, and future compatibility.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {modernBenefits.map((benefit, index) => (
                <div key={index} className="border rounded-lg p-6 space-y-4 hover:border-secondary/50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/10 p-3 rounded-lg flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div className="space-y-2 flex-grow">
                      <h3 className="font-weight-display text-lg leading-snug tracking-tighter">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
                        {benefit.description}
                      </p>
                      <Badge variant="secondary" className="text-xs">
                        {benefit.improvement}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Rebuild Process */}
        <div className="bordered-div-padding border-b">
          <div className="space-y-6 md:space-y-8 lg:space-y-10">
            <div className="text-center space-y-4">
              <h2 className="font-weight-display text-xl leading-snug tracking-tighter md:text-2xl lg:text-3xl">
                Our Rebuild Process
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed md:text-base lg:text-lg">
                Strategic approach to transforming legacy sites without losing functionality
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {rebuildProcess.map((step, index) => (
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

        {/* Page Builder Conversions */}
        <div id="conversion-options" className="bordered-div-padding border-b">
          <div className="space-y-6 md:space-y-8 lg:space-y-10">
            <div className="text-center space-y-4">
              <Badge variant="outline" className="mx-auto">
                <RefreshCw className="size-4 mr-2" />
                Conversion Specialists
              </Badge>
              
              <h2 className="font-weight-display text-xl leading-snug tracking-tighter md:text-2xl lg:text-3xl">
                Page Builder Conversion
                <span className="block text-secondary">Options</span>
              </h2>
              
              <p className="text-muted-foreground text-sm leading-relaxed md:text-base lg:text-lg">
                Specialized conversion processes for popular page builders
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {pageBuilderConversions.map((conversion, index) => (
                <div key={index} className="border rounded-lg p-6 space-y-6 hover:border-secondary/50 transition-colors hover:shadow-lg">
                  <div className="text-center space-y-4">
                    <div className="bg-secondary/10 p-4 rounded-lg w-fit mx-auto">
                      {conversion.icon}
                    </div>
                    <h3 className="font-weight-display text-lg leading-snug tracking-tighter md:text-xl">
                      {conversion.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {conversion.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {conversion.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="flex items-center gap-2">
                        <TrendingUp className="size-4 text-secondary flex-shrink-0" />
                        <span className="text-sm">{stat}</span>
                      </div>
                    ))}
                  </div>

                  <Button asChild className="w-full">
                    <a href={conversion.href}>
                      Learn More
                      <ArrowRight className="size-4 ml-2" />
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Redesign Services */}
        <div className="bordered-div-padding border-b">
          <div className="space-y-6 md:space-y-8 lg:space-y-10">
            <div className="text-center space-y-4">
              <Badge variant="outline" className="mx-auto">
                <Target className="size-4 mr-2" />
                Design + Development
              </Badge>
              
              <h2 className="font-weight-display text-xl leading-snug tracking-tighter md:text-2xl lg:text-3xl">
                Figma Redesign & Development
              </h2>
              
              <p className="text-muted-foreground text-sm leading-relaxed md:text-base lg:text-lg max-w-[700px] mx-auto">
                Complete UX/UI redesign in Figma followed by pixel-perfect Gutenberg implementation. 
                Transform outdated designs into modern, conversion-optimized experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3">
              {redesignServices.map((service, index) => (
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
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="size-4 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-sm md:text-base">
                          {feature}
                        </span>
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
              <Badge variant="outline" className="mx-auto">
                <Target className="size-4 mr-2" />
                Transparent Pricing
              </Badge>
              
              <h2 className="font-weight-display text-xl leading-snug tracking-tighter md:text-2xl lg:text-3xl">
                Rebuild Investment
              </h2>
              
              <p className="text-muted-foreground text-sm leading-relaxed md:text-base lg:text-lg">
                Transform your site with transparent, value-driven pricing
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {pricingOptions.map((option, index) => (
                <div 
                  key={index}
                  className={cn(
                    'relative border rounded-lg p-6 space-y-6',
                    option.highlight === 'Best Value' ? 'border-secondary ring-1 ring-secondary/20' : 'border-border'
                  )}
                >
                  {option.highlight && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
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
                Ready to Modernize Your Site?
              </h2>
              <p className="text-muted-foreground mx-auto max-w-[600px] text-sm leading-relaxed md:text-base lg:text-lg">
                Stop losing customers to slow page builders. Get a free analysis of your site's 
                rebuild potential and see how much faster your store could be.
              </p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" asChild>
                <a href="/contact?service=rebuild">
                  Get Free Site Analysis
                  <BarChart3 className="size-4 ml-2" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/case-studies">
                  View Rebuild Results
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
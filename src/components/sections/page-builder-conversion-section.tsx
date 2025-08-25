'use client';

import { 
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
  Blocks,
  RefreshCw
} from 'lucide-react';

import { PlusSigns } from '@/components/icons/plus-signs';
import { Diamonds } from '@/components/icons/diamonds';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface PageBuilderConversionSectionProps {
  builderName: string;
  builderIcon: React.ReactNode;
  builderColor: 'red' | 'blue' | 'purple' | 'pink' | 'green' | 'orange';
  problems: Array<{
    title: string;
    description: string;
    impact: string;
  }>;
  benefits: Array<{
    metric: string;
    improvement: string;
    description: string;
  }>;
  processSteps: Array<{
    title: string;
    description: string;
    details: string[];
  }>;
  beforeAfter: {
    before: {
      pageSize: string;
      loadTime: string;
      coreWebVitals: string;
      maintenanceTime: string;
    };
    after: {
      pageSize: string;
      loadTime: string;
      coreWebVitals: string;
      maintenanceTime: string;
    };
  };
}

export function PageBuilderConversionSection({
  builderName,
  builderIcon,
  builderColor,
  problems,
  benefits,
  processSteps,
  beforeAfter
}: PageBuilderConversionSectionProps) {
  return (
    <section className="container">
      <div className="border-x">
        <div className="hidden p-7.5 md:block" />

        {/* Hero Section */}
        <div className="bordered-div-padding border-b">
          <div className="text-center space-y-6 md:space-y-8 lg:space-y-10">
            <div className="flex items-center justify-center gap-3">
              <div className={cn(
                "p-3 rounded-lg",
                builderColor === 'red' && 'bg-red-500/10',
                builderColor === 'blue' && 'bg-blue-500/10',
                builderColor === 'purple' && 'bg-purple-500/10',
                builderColor === 'pink' && 'bg-pink-500/10',
                builderColor === 'green' && 'bg-green-500/10',
                builderColor === 'orange' && 'bg-orange-500/10'
              )}>
                <span className={cn(
                  builderColor === 'red' && 'text-red-500',
                  builderColor === 'blue' && 'text-blue-500',
                  builderColor === 'purple' && 'text-purple-500',
                  builderColor === 'pink' && 'text-pink-500',
                  builderColor === 'green' && 'text-green-500',
                  builderColor === 'orange' && 'text-orange-500'
                )}>
                  {builderIcon}
                </span>
              </div>
              <ArrowRight className="size-8 text-muted-foreground" />
              <div className="bg-secondary/10 p-3 rounded-lg">
                <Code className="size-8 text-secondary" />
              </div>
            </div>
            
            <h1 className="font-weight-display text-2xl leading-snug tracking-tighter md:text-3xl lg:text-5xl">
              Convert {builderName} to
              <span className="block text-secondary">High-Performance Gutenberg</span>
            </h1>
            
            <p className="text-muted-foreground mx-auto max-w-[800px] text-sm leading-relaxed md:text-lg lg:text-xl">
              Transform your heavy {builderName} site into a lightning-fast Gutenberg build. 
              Eliminate page builder bloat and achieve 70%+ faster loading speeds with modern WordPress architecture.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" asChild>
                <a href="/contact?service=conversion">
                  Get Conversion Quote
                  <ArrowRight className="size-4 ml-2" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#before-after">
                  See Performance Gains
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Problems with Current Builder */}
        <div className="bordered-div-padding border-b">
          <div className="space-y-6 md:space-y-8 lg:space-y-10">
            <div className="text-center space-y-4">
              <h2 className="font-weight-display text-xl leading-snug tracking-tighter md:text-2xl lg:text-3xl">
                Why {builderName} is Slowing You Down
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed md:text-base lg:text-lg max-w-[800px] mx-auto">
                While {builderName} offers visual convenience, it comes at a massive performance cost 
                that hurts your SEO rankings, user experience, and conversion rates.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {problems.map((problem, index) => (
                <div key={index} className="text-center space-y-4 p-6 border rounded-lg">
                  <div className="bg-red-500/10 size-16 rounded-full flex items-center justify-center mx-auto">
                    <AlertTriangle className="size-6 text-red-500" />
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

        {/* Before/After Comparison */}
        <div id="before-after" className="bordered-div-padding border-b">
          <div className="space-y-6 md:space-y-8 lg:space-y-10">
            <div className="text-center space-y-4">
              <h2 className="font-weight-display text-xl leading-snug tracking-tighter md:text-2xl lg:text-3xl">
                Dramatic Performance Improvements
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed md:text-base lg:text-lg">
                Real-world performance gains from {builderName} to Gutenberg conversion
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Before */}
              <div className="space-y-6">
                <div className="text-center">
                  <div className={cn(
                    "p-4 rounded-lg w-fit mx-auto mb-4",
                    builderColor === 'red' && 'bg-red-500/10',
                    builderColor === 'blue' && 'bg-blue-500/10',
                    builderColor === 'purple' && 'bg-purple-500/10',
                    builderColor === 'pink' && 'bg-pink-500/10',
                    builderColor === 'green' && 'bg-green-500/10',
                    builderColor === 'orange' && 'bg-orange-500/10'
                  )}>
                    <span className={cn(
                      builderColor === 'red' && 'text-red-500',
                      builderColor === 'blue' && 'text-blue-500',
                      builderColor === 'purple' && 'text-purple-500',
                      builderColor === 'pink' && 'text-pink-500',
                      builderColor === 'green' && 'text-green-500',
                      builderColor === 'orange' && 'text-orange-500'
                    )}>
                      {builderIcon}
                    </span>
                  </div>
                  <h3 className="font-weight-display text-xl">Before: {builderName}</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 border rounded-lg">
                    <span className="text-sm font-medium">Page Size</span>
                    <Badge variant="destructive">{beforeAfter.before.pageSize}</Badge>
                  </div>
                  <div className="flex justify-between items-center p-4 border rounded-lg">
                    <span className="text-sm font-medium">Load Time</span>
                    <Badge variant="destructive">{beforeAfter.before.loadTime}</Badge>
                  </div>
                  <div className="flex justify-between items-center p-4 border rounded-lg">
                    <span className="text-sm font-medium">Core Web Vitals</span>
                    <Badge variant="destructive">{beforeAfter.before.coreWebVitals}</Badge>
                  </div>
                  <div className="flex justify-between items-center p-4 border rounded-lg">
                    <span className="text-sm font-medium">Maintenance Time</span>
                    <Badge variant="destructive">{beforeAfter.before.maintenanceTime}</Badge>
                  </div>
                </div>
              </div>

              {/* After */}
              <div className="space-y-6">
                <div className="text-center">
                  <div className="bg-secondary/10 p-4 rounded-lg w-fit mx-auto mb-4">
                    <Code className="size-8 text-secondary" />
                  </div>
                  <h3 className="font-weight-display text-xl">After: Gutenberg</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 border rounded-lg">
                    <span className="text-sm font-medium">Page Size</span>
                    <Badge variant="secondary">{beforeAfter.after.pageSize}</Badge>
                  </div>
                  <div className="flex justify-between items-center p-4 border rounded-lg">
                    <span className="text-sm font-medium">Load Time</span>
                    <Badge variant="secondary">{beforeAfter.after.loadTime}</Badge>
                  </div>
                  <div className="flex justify-between items-center p-4 border rounded-lg">
                    <span className="text-sm font-medium">Core Web Vitals</span>
                    <Badge variant="secondary">{beforeAfter.after.coreWebVitals}</Badge>
                  </div>
                  <div className="flex justify-between items-center p-4 border rounded-lg">
                    <span className="text-sm font-medium">Maintenance Time</span>
                    <Badge variant="secondary">{beforeAfter.after.maintenanceTime}</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="bordered-div-padding border-b">
          <div className="space-y-6 md:space-y-8 lg:space-y-10">
            <div className="text-center space-y-4">
              <h2 className="font-weight-display text-xl leading-snug tracking-tighter md:text-2xl lg:text-3xl">
                Why Gutenberg Wins
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed md:text-base lg:text-lg">
                Measurable improvements that impact your bottom line
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center space-y-4 p-6 border rounded-lg">
                  <div className="bg-secondary/10 size-16 rounded-full flex items-center justify-center mx-auto">
                    <TrendingUp className="size-6 text-secondary" />
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-weight-display text-secondary">
                      {benefit.metric}
                    </div>
                    <h3 className="font-weight-display text-lg leading-snug tracking-tighter">
                      {benefit.improvement}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Conversion Process */}
        <div className="bordered-div-padding border-b">
          <div className="space-y-6 md:space-y-8 lg:space-y-10">
            <div className="text-center space-y-4">
              <h2 className="font-weight-display text-xl leading-snug tracking-tighter md:text-2xl lg:text-3xl">
                Our {builderName} Conversion Process
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed md:text-base lg:text-lg">
                Proven methodology for seamless conversion without losing design or functionality
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="space-y-6">
                  <div className="text-center space-y-4">
                    <div className="bg-secondary/10 size-16 rounded-full flex items-center justify-center mx-auto">
                      <span className="font-weight-display text-lg">
                        {index + 1}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                        Step {index + 1}
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

        {/* Pricing Options */}
        <div className="bordered-div-padding border-b">
          <div className="space-y-6 md:space-y-8 lg:space-y-10">
            <div className="text-center space-y-4">
              <h2 className="font-weight-display text-xl leading-snug tracking-tighter md:text-2xl lg:text-3xl">
                {builderName} Conversion Options
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed md:text-base lg:text-lg">
                Choose the option that fits your needs and budget
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Unlimited Development Option */}
              <div className="relative border-green-500 ring-1 ring-green-500/20 border rounded-lg p-6 space-y-6">
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500">
                  Best Value
                </Badge>
                
                <div className="text-center space-y-2">
                  <h3 className="font-weight-display text-lg leading-snug tracking-tighter">
                    Included with Unlimited
                  </h3>
                  <div className="text-2xl font-weight-display tracking-tighter md:text-3xl">
                    Included
                  </div>
                  <p className="text-muted-foreground text-sm">
                    All {builderName} conversions included with Unlimited Development
                  </p>
                </div>

                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">All page conversions included</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Ongoing development support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Performance monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Priority support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">All future rebuilds included</span>
                  </li>
                </ul>

                <Button asChild className="w-full" size="lg">
                  <a href="/services/development">
                    Get Unlimited Development
                    <ArrowRight className="size-4 ml-2" />
                  </a>
                </Button>
              </div>

              {/* Per-Page Option */}
              <div className="border rounded-lg p-6 space-y-6">
                <div className="text-center space-y-2">
                  <h3 className="font-weight-display text-lg leading-snug tracking-tighter">
                    Per-Page Conversion
                  </h3>
                  <div className="text-2xl font-weight-display tracking-tighter md:text-3xl">
                    $400-600
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Individual page conversion pricing
                  </p>
                </div>

                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Complete {builderName} removal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Custom Gutenberg blocks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Performance optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Mobile-responsive design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">30-day support</span>
                  </li>
                </ul>

                <Button asChild className="w-full" size="lg" variant="outline">
                  <a href="/contact?service=conversion">
                    Get Page Quote
                    <ArrowRight className="size-4 ml-2" />
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
                Ready to Ditch {builderName}?
              </h2>
              <p className="text-muted-foreground mx-auto max-w-[600px] text-sm leading-relaxed md:text-base lg:text-lg">
                Stop sacrificing performance for convenience. Get a free analysis of your {builderName} site 
                and see exactly how much faster it could be with modern Gutenberg architecture.
              </p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" asChild>
                <a href="/contact?service=conversion">
                  Get Free Conversion Analysis
                  <BarChart3 className="size-4 ml-2" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/case-studies">
                  View Conversion Results
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
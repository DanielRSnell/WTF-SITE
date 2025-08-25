'use client';

import { 
  ArrowRight, 
  BarChart3, 
  Clock, 
  Zap, 
  TrendingUp, 
  Target
} from 'lucide-react';

import { PlusSigns } from '@/components/icons/plus-signs';
import { Diamonds } from '@/components/icons/diamonds';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const caseStudyData = {
  company: 'TMW Systems',
  industry: 'Transportation & Logistics',
  description: 'Legacy Elementor build was causing 8-second load times and losing enterprise clients. We migrated to a high-performance Gutenberg solution.',
  testimonial: 'WooThatsFast transformed our digital presence completely. We went from losing enterprise clients due to 8-second load times to having one of the fastest sites in our industry. Lead generation increased 127% in the first quarter.',
  author: 'Sarah Chen',
  role: 'VP of Digital Marketing',
  metrics: [
    { label: 'Load Time', before: '8.2s', after: '1.4s' },
    { label: 'Core Web Vitals', before: '12', after: '92' },
    { label: 'Server Response', before: '2.8s', after: '0.3s' },
    { label: 'Admin Speed', before: '12s', after: '1.8s' }
  ],
  results: [
    { metric: '83%', label: 'Faster Loading' },
    { metric: '127%', label: 'More Leads' },
    { metric: '71%', label: 'Cost Reduction' },
    { metric: '667%', label: 'CWV Improvement' }
  ]
};

export function AboutCaseStudy() {
  return (
    <section className="container">
      <div className="bordered-div-padding relative border border-t-0">
        <div className="relative space-y-6 md:space-y-8 lg:space-y-10">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <Badge className="text-secondary bg-secondary/10 border-secondary/20 font-medium">
              Featured Case Study
            </Badge>
            <h2 className="text-3xl font-weight-display font-bold md:text-4xl lg:text-5xl">
              TMW Systems Success
            </h2>
            <p className="text-muted-foreground mx-auto max-w-[700px] text-sm leading-relaxed md:text-lg lg:text-xl">
              How we eliminated 8-second load times and increased lead generation by 127% 
              for a transportation software company.
            </p>
          </div>

          {/* Company Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-6 bg-muted/30 rounded-lg border">
            <div>
              <h3 className="text-lg font-weight-display font-bold">{caseStudyData.company}</h3>
              <p className="text-sm text-muted-foreground">{caseStudyData.industry}</p>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="text-xs">
                <Clock className="size-3 mr-1" />
                6 weeks
              </Badge>
              <Badge variant="outline" className="text-xs">
                <Target className="size-3 mr-1" />
                Enterprise
              </Badge>
            </div>
          </div>

          {/* Challenge */}
          <div className="space-y-3">
            <h4 className="font-weight-display font-semibold">The Challenge</h4>
            <p className="text-muted-foreground leading-relaxed">
              {caseStudyData.description}
            </p>
          </div>

          {/* Performance Results */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <BarChart3 className="size-5 text-secondary" />
              <h4 className="font-weight-display font-semibold">Performance Results</h4>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {caseStudyData.metrics.map((metric, index) => (
                <div key={index} className="text-center space-y-2">
                  <div className="text-xs uppercase tracking-wide text-muted-foreground font-medium">
                    {metric.label}
                  </div>
                  <div className="text-sm text-destructive line-through">
                    {metric.before}
                  </div>
                  <div className="text-2xl font-weight-display font-bold">
                    {metric.after}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Business Impact */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="size-5 text-secondary" />
              <h4 className="font-weight-display font-semibold">Business Impact</h4>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {caseStudyData.results.map((result, index) => (
                <div key={index} className="p-6 text-center border rounded-lg">
                  <div className="text-3xl font-weight-display font-bold text-secondary mb-1">
                    {result.metric}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {result.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div className="p-6 border rounded-lg bg-muted/30">
            <div className="space-y-4">
              <div className="text-2xl text-secondary leading-none">"</div>
              <blockquote className="text-sm leading-relaxed italic -mt-4">
                {caseStudyData.testimonial}
              </blockquote>
              <div className="pt-2">
                <div className="font-weight-display font-semibold text-sm">{caseStudyData.author}</div>
                <div className="text-xs text-muted-foreground">{caseStudyData.role}, {caseStudyData.company}</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button size="lg" className="font-medium">
              Get Similar Results
              <ArrowRight className="size-4 ml-2" />
            </Button>
          </div>

          {/* Decorative Elements */}
          <div className="relative">
            <PlusSigns className="absolute top-0 right-full -mt-0.25 hidden !h-[calc(100%+2px)] border-y md:block" />
            <Diamonds className="absolute top-0 left-full -mt-0.25 hidden !h-[calc(100%+2px)] border-y md:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
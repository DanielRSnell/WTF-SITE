'use client';

import { 
  ArrowRight, 
  Layers,
  Code,
  TrendingUp, 
  CheckCircle, 
  AlertTriangle,
  BarChart3
} from 'lucide-react';

import { PageBuilderConversionSection } from './page-builder-conversion-section';

export function ElementorConversionSection() {
  const elementorData = {
    builderName: 'Elementor',
    builderIcon: <Layers className="size-8" />,
    builderColor: 'pink' as const,
    problems: [
      {
        title: 'Massive CSS/JS Bloat',
        description: 'Elementor loads 800KB+ of CSS/JS on every page, regardless of what elements are actually used.',
        impact: 'Pages often exceed 3-4MB total size'
      },
      {
        title: 'Poor Core Web Vitals',
        description: 'Heavy DOM manipulation and excessive CSS cause terrible Cumulative Layout Shift and loading scores.',
        impact: 'Google rankings suffer significantly'
      },
      {
        title: 'Vendor Lock-in Issues',
        description: 'Content is stored in proprietary format making it difficult to switch themes or builders later.',
        impact: 'Expensive to maintain and migrate'
      }
    ],
    benefits: [
      {
        metric: '70%',
        improvement: 'Smaller Page Size',
        description: 'Dramatic reduction in CSS/JS payload with clean semantic HTML'
      },
      {
        metric: '3x',
        improvement: 'Faster Loading',
        description: 'Native WordPress blocks load instantly without heavy dependencies'
      },
      {
        metric: '90%',
        improvement: 'Less JavaScript',
        description: 'Minimal JS footprint compared to Elementor\'s heavy framework'
      }
    ],
    processSteps: [
      {
        title: 'Elementor Analysis',
        description: 'Comprehensive audit of existing Elementor layouts and custom elements',
        details: [
          'Widget inventory and usage analysis',
          'Custom CSS/JS identification',
          'Template structure mapping',
          'Performance baseline measurement'
        ]
      },
      {
        title: 'Custom Block Development',
        description: 'Create equivalent Gutenberg blocks that match your design exactly',
        details: [
          'Custom block development for complex elements',
          'ACF integration for dynamic content',
          'Mobile-responsive CSS optimization',
          'Performance-focused architecture'
        ]
      },
      {
        title: 'Content Migration',
        description: 'Automated conversion with manual fine-tuning for perfect results',
        details: [
          'Automated content structure conversion',
          'Manual design refinement',
          'Cross-browser testing',
          'SEO preservation and enhancement'
        ]
      }
    ],
    beforeAfter: {
      before: {
        pageSize: '4.2MB',
        loadTime: '6.8s',
        coreWebVitals: 'Poor (25)',
        maintenanceTime: '4h/month'
      },
      after: {
        pageSize: '1.2MB',
        loadTime: '2.1s',
        coreWebVitals: 'Good (85)',
        maintenanceTime: '30min/month'
      }
    }
  };

  return <PageBuilderConversionSection {...elementorData} />;
}
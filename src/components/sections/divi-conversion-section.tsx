'use client';

import { 
  Code,
} from 'lucide-react';

import { PageBuilderConversionSection } from './page-builder-conversion-section';

export function DiviConversionSection() {
  const diviData = {
    builderName: 'Divi',
    builderIcon: <Code className="size-8" />,
    builderColor: 'purple' as const,
    problems: [
      {
        title: 'Extreme CSS Bloat',
        description: 'Divi generates enormous CSS files with thousands of unused selectors and inline styles.',
        impact: 'CSS files commonly exceed 1MB+'
      },
      {
        title: 'Slow Admin Experience',
        description: 'Divi Builder is notoriously slow to load and edit, especially on larger sites.',
        impact: 'Content editing takes 4x longer'
      },
      {
        title: 'Mobile Performance Issues',
        description: 'Heavy JavaScript and CSS cause severe performance problems on mobile devices.',
        impact: 'Poor mobile user experience'
      }
    ],
    benefits: [
      {
        metric: '80%',
        improvement: 'Less CSS Overhead',
        description: 'Dramatic reduction in stylesheet size with clean, semantic styles'
      },
      {
        metric: '4x',
        improvement: 'Faster Admin Editing',
        description: 'Native Gutenberg editor loads instantly compared to Divi Builder'
      },
      {
        metric: '95%',
        improvement: 'Better Mobile Performance',
        description: 'Optimized for mobile-first experience with minimal JavaScript'
      }
    ],
    processSteps: [
      {
        title: 'Divi Content Extraction',
        description: 'Carefully extract and analyze all Divi modules and custom styling',
        details: [
          'Module inventory and functionality mapping',
          'Custom CSS and animation extraction',
          'Global styling and theme options analysis',
          'Content structure documentation'
        ]
      },
      {
        title: 'Gutenberg Block Development',
        description: 'Create optimized blocks that replicate Divi functionality without bloat',
        details: [
          'Lightweight block alternatives to Divi modules',
          'Animation implementation with modern CSS',
          'Responsive design optimization',
          'Performance-focused JavaScript usage'
        ]
      },
      {
        title: 'Migration & Optimization',
        description: 'Complete migration with performance testing and refinement',
        details: [
          'Content migration and layout recreation',
          'Performance optimization and testing',
          'Mobile responsiveness validation',
          'Editor training and documentation'
        ]
      }
    ],
    beforeAfter: {
      before: {
        pageSize: '5.1MB',
        loadTime: '7.8s',
        coreWebVitals: 'Poor (18)',
        maintenanceTime: '5h/month'
      },
      after: {
        pageSize: '1.1MB',
        loadTime: '1.9s',
        coreWebVitals: 'Good (88)',
        maintenanceTime: '25min/month'
      }
    }
  };

  return <PageBuilderConversionSection {...diviData} />;
}
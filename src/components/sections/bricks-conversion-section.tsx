'use client';

import { 
  Blocks,
} from 'lucide-react';

import { PageBuilderConversionSection } from './page-builder-conversion-section';

export function BricksConversionSection() {
  const bricksData = {
    builderName: 'Bricks',
    builderIcon: <Blocks className="size-8" />,
    builderColor: 'blue' as const,
    problems: [
      {
        title: 'Complex CSS Framework',
        description: 'Bricks generates overly complex CSS with redundant selectors and unnecessary specificity.',
        impact: 'CSS files often exceed 500KB'
      },
      {
        title: 'JavaScript Dependencies',
        description: 'Heavy reliance on JavaScript for basic layout functionality that should be CSS-only.',
        impact: 'Poor performance on mobile devices'
      },
      {
        title: 'Update Dependency Risk',
        description: 'Sites break when Bricks updates, requiring constant monitoring and maintenance.',
        impact: 'High ongoing maintenance costs'
      }
    ],
    benefits: [
      {
        metric: '60%',
        improvement: 'Smaller CSS Files',
        description: 'Clean, semantic CSS without framework overhead'
      },
      {
        metric: '2x',
        improvement: 'Better Core Web Vitals',
        description: 'Improved loading performance and user experience scores'
      },
      {
        metric: '100%',
        improvement: 'Native WordPress',
        description: 'No third-party dependencies or update risks'
      }
    ],
    processSteps: [
      {
        title: 'Bricks Structure Analysis',
        description: 'Deep dive into Bricks templates and custom styling approach',
        details: [
          'Template hierarchy analysis',
          'Custom CSS extraction',
          'Dynamic content mapping',
          'Performance bottleneck identification'
        ]
      },
      {
        title: 'Native Block Creation',
        description: 'Develop equivalent functionality using core WordPress capabilities',
        details: [
          'Custom Gutenberg blocks for complex layouts',
          'Theme.json configuration optimization',
          'CSS custom properties implementation',
          'Responsive design improvements'
        ]
      },
      {
        title: 'Performance Optimization',
        description: 'Fine-tune the new build for maximum speed and efficiency',
        details: [
          'Critical CSS optimization',
          'JavaScript elimination where possible',
          'Image and asset optimization',
          'Core Web Vitals validation'
        ]
      }
    ],
    beforeAfter: {
      before: {
        pageSize: '3.8MB',
        loadTime: '5.2s',
        coreWebVitals: 'Needs Work (45)',
        maintenanceTime: '3h/month'
      },
      after: {
        pageSize: '1.5MB',
        loadTime: '2.8s',
        coreWebVitals: 'Good (82)',
        maintenanceTime: '20min/month'
      }
    }
  };

  return <PageBuilderConversionSection {...bricksData} />;
}
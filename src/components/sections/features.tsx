import { Server, Zap, ShieldCheck, Code } from 'lucide-react';

import { PlusSigns } from '@/components/icons/plus-signs';
import { cn } from '@/lib/utils';
import { AnimatedDashboard } from '@/components/ui/animated-dashboard';
import { ServerControlPanel } from '@/components/ui/server-control-panel';
const features = [
  {
    icon: Zap,
    title: (
      <>
        Lightning
        <br />
        Fast Performance
      </>
    ),
    description: '3x faster than typical WooCommerce hosting.',
    subDescription:
      'Optimized Redis caching, NGINX configurations, and database tuning specifically for WooCommerce. Your customers get sub-2-second page loads.',
    className: '!pb-0',
    hasAnimatedDashboard: true,
  },
  {
    icon: Server,
    title: 'Full Server Ownership',
    description: 'Your servers, your data, your control.',
    subDescription:
      'No managed hosting restrictions or markups. Complete root access with expert WooCommerce developers handling the technical complexity.',
    className: '!pb-0',
    hasServerControlPanel: true,
  },
  {
    icon: ShieldCheck,
    title: 'WooCommerce Expertise',
    description: 'Real WooCommerce developers, not generic support.',
    subDescription:
      'Our team understands complex product configurations, custom checkout flows, and WooCommerce business logic. Get expert help when you need it.',
  },
  {
    icon: Code,
    title: 'Unlimited Development',
    description: 'Flat-rate development with no hourly billing.',
    subDescription:
      'Submit unlimited WooCommerce development requests. Custom features, integrations, and optimizations included at a predictable monthly rate.',
  },
];

export function Features() {
  return (
    <section className="container">
      <div className="grid grid-cols-1 border border-t-0 md:grid-cols-2">
        {features.map((feature, index) => (
          <div
            key={index}
            className={cn(
              'bordered-div-padding relative space-y-8',
              index == 0 && 'border-b md:border-e',
              index == 1 && 'border-b md:border-b-0',
              index == 3 && 'border-t md:border-s',
              feature.className,
            )}
          >
            {index === 0 && (
              // Height is 100% + 2px to account for parent border not being included in the calculation
              <PlusSigns className="absolute inset-0 -mt-0.25 hidden !h-[calc(100%+2px)] -translate-x-full border-y md:block" />
            )}
            <div className="space-y-4 md:space-y-6">
              <div className="space-y-4">
                <h2 className="text-muted-foreground flex items-center gap-2 text-sm leading-snug font-medium md:text-base">
                  <feature.icon className="size-5" />
                  {feature.title}
                </h2>
                <h3 className="text-foreground font-weight-display leading-snug md:text-xl">
                  {feature.description}
                </h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
                {feature.subDescription}
              </p>
            </div>

            {feature.hasAnimatedDashboard && (
              <div className="mask-b-from-30% mask-b-to-95%">
                <AnimatedDashboard />
              </div>
            )}

            {feature.hasServerControlPanel && (
              <div className="mask-b-from-30% mask-b-to-95%">
                <ServerControlPanel />
              </div>
            )}

            {feature.images && (
              <div className="flex flex-col gap-4 mask-b-from-30% mask-b-to-95%">
                {feature.images.map((image, index) => (
                  <img
                    key={index}
                    src={image.src}
                    alt={''}
                    width={image.width}
                    height={image.height}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

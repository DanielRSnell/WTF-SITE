'use client';

import { ArrowRight, Zap, Shield, Users } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { MovingBorder } from '@/components/ui/moving-border';
import { cn } from '@/lib/utils';

export function Hero() {
  return (
    <section className="">
      <div className="container">
        <div className="bordered-div-padding relative flex flex-col items-center gap-8 border-x text-center md:gap-10 lg:gap-16 lg:!py-25">
          {/* Main Heading */}
          <div className="max-w-4xl space-y-6 md:space-y-8 lg:space-y-12">
            {/* Performance Badge */}
            <a
              href="#"
              className="relative inline-flex items-center overflow-hidden rounded-sm p-[1px]"
            >
              <MovingBorder duration={4000}>
                <div
                  className={cn(
                    'h-18 w-25 bg-[radial-gradient(#00A656_40%,transparent_60%)] opacity-[0.8]',
                  )}
                />
              </MovingBorder>
              <Button
                variant="outline"
                size="sm"
                className="relative border-none"
              >
                <Zap className="mr-1 size-4" />
                3x Faster than Typical WooCommerce Hosting
                <ArrowRight className="ml-1" />
              </Button>
            </a>
            <h1 className="font-weight-display text-2xl leading-snug tracking-tighter md:text-3xl lg:text-5xl">
              WooCommerce Hosting & Optimization{' '}
              <span className="block">That Actually Understands Your Business</span>
            </h1>
            <p className="text-muted-foreground mx-auto max-w-[700px] text-sm leading-relaxed md:text-lg lg:text-xl">
              Get the speed, control, and expert support your WooCommerce store deserves—without the managed hosting markup. 
              Full server ownership with WooCommerce-specific optimization.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <Button asChild>
              <a href="/contact">Get Performance Analysis</a>
            </Button>
            <Button asChild variant="outline">
              <a href="#services">
                <Shield className="size-4 mr-2" />
                View Plans & Pricing
              </a>
            </Button>
          </div>
          <div
            className={cn(
              'pointer-events-none absolute top-0 left-full hidden h-[calc(100%+1px)] w-screen overflow-hidden border-b text-start select-none lg:block',
            )}
            aria-hidden="true"
            role="presentation"
          >
            <p className="p-4 whitespace-pre opacity-20">{`# WooCommerce Performance Optimization
location ~* \\.(gif|jpg|jpeg|png|css|js|ico|webp)$ {
  expires 1y;
  add_header Cache-Control "public, immutable";
}

# WooCommerce Cart & Checkout Optimization  
location ~* /cart|/checkout {
  expires -1;
  add_header Cache-Control "no-cache, no-store";
}

# Redis Object Cache for WooCommerce
wp_cache_set('wc_products_' . $id, $data, 'woocommerce');`}</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="bordered-div-padding border">
          {/* Performance Metrics Dashboard */}
          <div className="space-y-8">
            {/* Before/After Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Before - Slow Performance */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm font-medium text-red-600 dark:text-red-400">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  Before: Slow WooCommerce
                </div>
                <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-4 space-y-3">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-2xl font-weight-display font-bold text-red-600 dark:text-red-400">8.2s</div>
                      <div className="text-muted-foreground">Load Time</div>
                    </div>
                    <div>
                      <div className="text-2xl font-weight-display font-bold text-red-600 dark:text-red-400">15</div>
                      <div className="text-muted-foreground">Core Web Vitals</div>
                    </div>
                  </div>
                  <div className="w-full bg-muted/50 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full" style={{ width: '15%' }}></div>
                  </div>
                  <div className="text-xs text-muted-foreground">Poor Performance - Losing Customers</div>
                </div>
              </div>

              {/* After - Fast Performance */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm font-medium text-green-600 dark:text-green-400">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  After: WooThatsFast Optimized
                </div>
                <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4 space-y-3">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-2xl font-weight-display font-bold text-green-600 dark:text-green-400">1.2s</div>
                      <div className="text-muted-foreground">Load Time</div>
                    </div>
                    <div>
                      <div className="text-2xl font-weight-display font-bold text-green-600 dark:text-green-400">94</div>
                      <div className="text-muted-foreground">Core Web Vitals</div>
                    </div>
                  </div>
                  <div className="w-full bg-muted/50 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '94%' }}></div>
                  </div>
                  <div className="text-xs text-muted-foreground">Excellent Performance - Happy Customers</div>
                </div>
              </div>
            </div>

            {/* Key Metrics Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="text-center p-4 border rounded-lg">
                <div className="text-3xl font-weight-display font-bold text-secondary">83%</div>
                <div className="text-sm text-muted-foreground">Faster Loading</div>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="text-3xl font-weight-display font-bold text-secondary">127%</div>
                <div className="text-sm text-muted-foreground">More Conversions</div>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="text-3xl font-weight-display font-bold text-secondary">$158K</div>
                <div className="text-sm text-muted-foreground">Revenue Increase</div>
              </div>
            </div>

            {/* WooCommerce Features */}
            <div className="bg-muted/30 rounded-lg p-6">
              <h3 className="text-lg font-weight-display font-semibold mb-4 text-center">WooCommerce-Specific Optimizations</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <Zap className="size-4 text-secondary" />
                  <span>Database Optimization</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="size-4 text-secondary" />
                  <span>Redis Caching</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="size-4 text-secondary" />
                  <span>Admin Speed Boost</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <ArrowRight className="size-4 text-secondary" />
                  <span>Checkout Optimization</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

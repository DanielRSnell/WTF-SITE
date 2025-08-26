'use client';

import { ArrowRight, Zap, Shield, Users } from 'lucide-react';
import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { MovingBorder } from '@/components/ui/moving-border';
import { cn } from '@/lib/utils';
import { Timeline11 } from '@/components/timeline11';

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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Before - Slow Performance */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-base font-semibold text-red-600 dark:text-red-400">
                  <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse shadow-lg shadow-red-500/30"></div>
                  Before: Slow WooCommerce
                </div>
                <div className="bg-gradient-to-br from-red-50 via-red-50/80 to-red-100/60 dark:from-red-950/30 dark:via-red-950/20 dark:to-red-900/20 border border-red-200/60 dark:border-red-800/40 rounded-xl p-6 space-y-4 backdrop-blur-sm shadow-lg shadow-red-500/5">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <motion.div 
                        className="text-4xl font-weight-display font-bold text-red-600 dark:text-red-400 tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                      >
                        8.2s
                      </motion.div>
                      <div className="text-sm font-medium text-red-700/70 dark:text-red-300/70">Load Time</div>
                    </div>
                    <div className="space-y-2">
                      <motion.div 
                        className="text-4xl font-weight-display font-bold text-red-600 dark:text-red-400 tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                      >
                        15
                      </motion.div>
                      <div className="text-sm font-medium text-red-700/70 dark:text-red-300/70">Core Web Vitals</div>
                    </div>
                  </div>
                  <div className="w-full bg-red-200/30 dark:bg-red-900/30 rounded-full h-3 overflow-hidden">
                    <motion.div 
                      className="bg-gradient-to-r from-red-500 to-red-600 h-3 rounded-full shadow-inner"
                      initial={{ width: '0%' }}
                      whileInView={{ width: '15%' }}
                      transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <div className="text-sm font-medium text-red-700/80 dark:text-red-300/80">Poor Performance - Losing Customers</div>
                </div>
              </div>

              {/* After - Fast Performance */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-base font-semibold text-green-600 dark:text-green-400">
                  <div className="w-4 h-4 bg-green-500 rounded-full shadow-lg shadow-green-500/30"></div>
                  After: WooThatsFast Optimized
                </div>
                <div className="bg-gradient-to-br from-green-50 via-green-50/80 to-green-100/60 dark:from-green-950/30 dark:via-green-950/20 dark:to-green-900/20 border border-green-200/60 dark:border-green-800/40 rounded-xl p-6 space-y-4 backdrop-blur-sm shadow-lg shadow-green-500/5">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <motion.div 
                        className="text-4xl font-weight-display font-bold text-green-600 dark:text-green-400 tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        viewport={{ once: true }}
                      >
                        1.2s
                      </motion.div>
                      <div className="text-sm font-medium text-green-700/70 dark:text-green-300/70">Load Time</div>
                    </div>
                    <div className="space-y-2">
                      <motion.div 
                        className="text-4xl font-weight-display font-bold text-green-600 dark:text-green-400 tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        viewport={{ once: true }}
                      >
                        94
                      </motion.div>
                      <div className="text-sm font-medium text-green-700/70 dark:text-green-300/70">Core Web Vitals</div>
                    </div>
                  </div>
                  <div className="w-full bg-green-200/30 dark:bg-green-900/30 rounded-full h-3 overflow-hidden">
                    <motion.div 
                      className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full shadow-inner"
                      initial={{ width: '0%' }}
                      whileInView={{ width: '94%' }}
                      transition={{ duration: 2, delay: 0.8, ease: "easeOut" }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <div className="text-sm font-medium text-green-700/80 dark:text-green-300/80">Excellent Performance - Happy Customers</div>
                </div>
              </div>
            </div>

            {/* Key Metrics Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center p-8 border border-secondary/30 rounded-2xl bg-gradient-to-br from-secondary/20 via-secondary/10 to-secondary/25 backdrop-blur-md shadow-xl">
                <div className="text-5xl font-weight-display font-bold text-secondary mb-3">83%</div>
                <div className="text-base font-medium text-muted-foreground">Faster Loading</div>
              </div>
              <div className="text-center p-8 border border-secondary/30 rounded-2xl bg-gradient-to-br from-secondary/20 via-secondary/10 to-secondary/25 backdrop-blur-md shadow-xl">
                <div className="text-5xl font-weight-display font-bold text-secondary mb-3">127%</div>
                <div className="text-base font-medium text-muted-foreground">More Conversions</div>
              </div>
              <div className="text-center p-8 border border-secondary/30 rounded-2xl bg-gradient-to-br from-secondary/20 via-secondary/10 to-secondary/25 backdrop-blur-md shadow-xl">
                <div className="text-5xl font-weight-display font-bold text-secondary mb-3">$158K</div>
                <div className="text-base font-medium text-muted-foreground">Revenue Increase</div>
              </div>
            </div>

            {/* Optimization Timeline */}
            <Timeline11 />
          </div>
        </div>
      </div>
    </section>
  );
}

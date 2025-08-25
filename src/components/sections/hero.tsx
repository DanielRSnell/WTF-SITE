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
        <div className="bordered-div-padding flex items-center justify-center border">
          <img
            src="/images/landing/hero.webp"
            alt="Hero Image"
            width={1320}
            height={743}
            className="rounded-lg mask-b-from-50% mask-b-to-90%"
          />
        </div>
      </div>
    </section>
  );
}

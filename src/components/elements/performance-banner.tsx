'use client';

import { useState } from 'react';
import { X, Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function PerformanceBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-secondary/10 via-secondary/5 to-secondary/10 border-b border-secondary/20">
      <div className="container max-w-[120rem] px-4">
        <div className="flex items-center justify-between py-3 px-6 lg:px-0">
          <div className="flex items-center gap-3 flex-1">
            <div className="flex items-center gap-2">
              <Zap className="size-4 text-secondary animate-pulse" />
              <span className="text-sm font-medium">
                <span className="hidden sm:inline">Is your WooCommerce store losing money every second? </span>
                <span className="font-semibold text-secondary">Transform your performance →</span>
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Button 
              size="sm" 
              variant="secondary" 
              asChild
              className="hidden sm:inline-flex"
            >
              <a href="/performance-optimization">
                See the Journey
                <ArrowRight className="size-3 ml-1" />
              </a>
            </Button>
            
            <Button 
              size="sm" 
              variant="secondary" 
              asChild
              className="sm:hidden"
            >
              <a href="/performance-optimization">
                Fix Now
              </a>
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="p-1 h-auto hover:bg-secondary/10"
              onClick={() => setIsVisible(false)}
            >
              <X className="size-4" />
              <span className="sr-only">Close banner</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
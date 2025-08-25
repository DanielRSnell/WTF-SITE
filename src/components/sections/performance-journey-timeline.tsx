'use client';

import { 
  AlertTriangle,
  TrendingDown,
  Clock,
  Users,
  Zap,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Star,
  DollarSign,
  Target
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function PerformanceJourneyTimeline() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container text-center space-y-12">
          <Badge className="bg-red-50 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-300 dark:border-red-800">
            <AlertTriangle className="size-3 mr-1" />
            Performance Crisis
          </Badge>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-weight-display font-bold tracking-tight max-w-4xl mx-auto w-full">
            Your WooCommerce Store Is
            <span className="text-red-600 dark:text-red-400"> Losing Money </span>
            Every Second
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto leading-relaxed">
            You've built a successful WooCommerce business, but slow loading times are costing you customers, 
            rankings, and revenue. Here's how we fix it permanently.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
            <div className="text-center space-y-2">
              <div className="text-3xl font-weight-display font-bold text-red-600 dark:text-red-400">68%</div>
              <div className="text-sm text-muted-foreground">of customers abandon slow sites</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-weight-display font-bold text-red-600 dark:text-red-400">$2.6B</div>
              <div className="text-sm text-muted-foreground">lost annually to slow sites</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-weight-display font-bold text-red-600 dark:text-red-400">-7%</div>
              <div className="text-sm text-muted-foreground">conversions for each second of delay</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-8 mb-20">
            <h2 className="text-3xl md:text-4xl font-weight-display font-bold">
              The Hidden Costs of Poor Performance
            </h2>
            <p className="text-lg text-muted-foreground max-w-[600px] mx-auto">
              Your successful WooCommerce store faces these critical challenges every day
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 bg-background/20 dark:bg-background/20 backdrop-blur-sm border border-white/10 dark:border-white/10 rounded-xl space-y-6">
              <div className="p-3 bg-red-100/20 dark:bg-red-950/20 backdrop-blur-sm rounded-lg w-fit">
                <TrendingDown className="size-6 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="font-weight-display font-bold">Lost Revenue</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Every slow page costs you sales. Amazon loses $1.6B annually for every second of delay.
              </p>
              <div className="text-2xl font-weight-display font-bold text-red-600 dark:text-red-400">
                -$158K/year
              </div>
            </div>

            <div className="p-8 bg-background/20 dark:bg-background/20 backdrop-blur-sm border border-white/10 dark:border-white/10 rounded-xl space-y-6">
              <div className="p-3 bg-orange-100/20 dark:bg-orange-950/20 backdrop-blur-sm rounded-lg w-fit">
                <BarChart3 className="size-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="font-weight-display font-bold">SEO Rankings</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Google prioritizes fast sites. Slow Core Web Vitals = lost organic traffic.
              </p>
              <div className="text-2xl font-weight-display font-bold text-orange-600 dark:text-orange-400">
                -47 positions
              </div>
            </div>

            <div className="p-8 bg-background/20 dark:bg-background/20 backdrop-blur-sm border border-white/10 dark:border-white/10 rounded-xl space-y-6">
              <div className="p-3 bg-blue-100/20 dark:bg-blue-950/20 backdrop-blur-sm rounded-lg w-fit">
                <Clock className="size-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-weight-display font-bold">Team Productivity</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Slow admin panels waste hours daily. Your team deserves better tools.
              </p>
              <div className="text-2xl font-weight-display font-bold text-blue-600 dark:text-blue-400">
                -15 hours/week
              </div>
            </div>

            <div className="p-8 bg-background/20 dark:bg-background/20 backdrop-blur-sm border border-white/10 dark:border-white/10 rounded-xl space-y-6">
              <div className="p-3 bg-purple-100/20 dark:bg-purple-950/20 backdrop-blur-sm rounded-lg w-fit">
                <Users className="size-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-weight-display font-bold">Customer Experience</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Frustrated customers become lost customers. Speed equals satisfaction.
              </p>
              <div className="text-2xl font-weight-display font-bold text-purple-600 dark:text-purple-400">
                68% abandon
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Journey */}
      <section className="py-28">
        <div className="container">
          <div className="text-center space-y-8 mb-16">
            <Badge className="bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800">
              <CheckCircle className="size-3 mr-1" />
              Proven Solution
            </Badge>
            <h2 className="text-3xl md:text-5xl font-weight-display font-bold">
              The Complete Performance Transformation
            </h2>
            <p className="text-lg text-muted-foreground max-w-[600px] mx-auto">
              Our 4-step process transforms slow WooCommerce stores into lightning-fast, 
              revenue-generating machines
            </p>
          </div>

          {/* Steps Container */}
          <div className="flex flex-col gap-g-lg">
            
            {/* Step 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-center gap-3">
                  <Badge className="bg-red-50 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-300">
                    Step 1
                  </Badge>
                  <div className="h-px bg-border flex-1" />
                </div>
                
                <h3 className="text-3xl font-weight-display font-bold">
                  We Diagnose the <span className="text-red-600 dark:text-red-400">Performance Crisis</span>
                </h3>
                
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">The Problem:</strong> Your WooCommerce store loads in 8+ seconds. 
                    Customers are abandoning carts, Google is punishing your rankings, and your team wastes hours 
                    daily fighting slow admin pages.
                  </p>
                  
                  <div className="p-6 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="text-center sm:text-left">
                        <div className="text-2xl font-weight-display font-bold text-red-600 dark:text-red-400 mb-1">
                          8.2s
                        </div>
                        <div className="text-sm text-muted-foreground">Average load time</div>
                      </div>
                      <div className="text-center sm:text-left">
                        <div className="text-2xl font-weight-display font-bold text-red-600 dark:text-red-400 mb-1">
                          15/100
                        </div>
                        <div className="text-sm text-muted-foreground">Core Web Vitals score</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 rounded-2xl">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="size-5 text-red-600 dark:text-red-400" />
                    <span className="font-semibold text-foreground">Performance Crisis Detected</span>
                  </div>
                  <div className="space-y-3">
                    <div className="text-sm text-foreground/70">Current Performance Score</div>
                    <div className="w-full bg-muted/50 rounded-full h-3">
                      <div className="bg-red-500 h-3 rounded-full" style={{ width: '15%' }}></div>
                    </div>
                    <div className="text-xs text-foreground/60">15/100 - Critical Issues</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1 p-8 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20 rounded-2xl">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Zap className="size-5 text-yellow-600 dark:text-yellow-400" />
                    <span className="font-semibold text-foreground">Frontend Optimization in Progress</span>
                  </div>
                  <div className="space-y-3">
                    <div className="text-sm text-foreground/70">Optimization Progress</div>
                    <div className="w-full bg-muted/50 rounded-full h-3">
                      <div className="bg-yellow-500 h-3 rounded-full animate-pulse" style={{ width: '65%' }}></div>
                    </div>
                    <div className="text-xs text-foreground/60">Image compression, code minification, caching...</div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2 space-y-8">
                <div className="flex items-center gap-3">
                  <Badge className="bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-950 dark:text-yellow-300">
                    Step 2
                  </Badge>
                  <div className="h-px bg-border flex-1" />
                </div>
                
                <h3 className="text-3xl font-weight-display font-bold">
                  We <span className="text-yellow-600 dark:text-yellow-400">Optimize</span> Your Frontend
                </h3>
                
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">The Solution:</strong> We implement advanced optimization 
                    techniques including image compression, code minification, caching layers, and CDN integration 
                    to dramatically reduce load times.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg space-y-2">
                      <CheckCircle className="size-5 text-green-600 dark:text-green-400" />
                      <div className="font-semibold text-sm">Image Optimization</div>
                      <div className="text-xs text-muted-foreground">WebP conversion, lazy loading</div>
                    </div>
                    <div className="p-4 border rounded-lg space-y-2">
                      <CheckCircle className="size-5 text-green-600 dark:text-green-400" />
                      <div className="font-semibold text-sm">Code Minification</div>
                      <div className="text-xs text-muted-foreground">CSS/JS compression</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-center gap-3">
                  <Badge className="bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300">
                    Step 3
                  </Badge>
                  <div className="h-px bg-border flex-1" />
                </div>
                
                <h3 className="text-3xl font-weight-display font-bold">
                  We <span className="text-green-600 dark:text-green-400">Master</span> Core Web Vitals
                </h3>
                
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">The Result:</strong> Your store now passes Google's Core Web Vitals 
                    with excellent scores, boosting search rankings and customer satisfaction.
                  </p>
                  
                  <div className="p-6 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-xl">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-xl font-weight-display font-bold text-green-600 dark:text-green-400 mb-1">
                          1.2s
                        </div>
                        <div className="text-xs text-muted-foreground">LCP</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-weight-display font-bold text-green-600 dark:text-green-400 mb-1">
                          65ms
                        </div>
                        <div className="text-xs text-muted-foreground">FID</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-weight-display font-bold text-green-600 dark:text-green-400 mb-1">
                          0.08
                        </div>
                        <div className="text-xs text-muted-foreground">CLS</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-2xl">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <BarChart3 className="size-5 text-green-600 dark:text-green-400" />
                    <span className="font-semibold text-foreground">Core Web Vitals: Excellent</span>
                  </div>
                  <div className="space-y-3">
                    <div className="text-sm text-foreground/70">Performance Score</div>
                    <div className="w-full bg-muted/50 rounded-full h-3">
                      <div className="bg-green-500 h-3 rounded-full" style={{ width: '92%' }}></div>
                    </div>
                    <div className="text-xs text-foreground/60">92/100 - Excellent Performance</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1 p-8 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-2xl">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Users className="size-5 text-blue-600 dark:text-blue-400" />
                    <span className="font-semibold text-foreground">Admin Optimized</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-foreground/80">Dashboard Load</span>
                      <span className="font-bold text-blue-600 dark:text-blue-400">1.2s</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-foreground/80">Product Pages</span>
                      <span className="font-bold text-blue-600 dark:text-blue-400">0.8s</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-foreground/80">Order Processing</span>
                      <span className="font-bold text-blue-600 dark:text-blue-400">0.5s</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2 space-y-8">
                <div className="flex items-center gap-3">
                  <Badge className="bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300">
                    Step 4
                  </Badge>
                  <div className="h-px bg-border flex-1" />
                </div>
                
                <h3 className="text-3xl font-weight-display font-bold">
                  We <span className="text-blue-600 dark:text-blue-400">Supercharge</span> Your Admin
                </h3>
                
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">The Bonus:</strong> Your team now enjoys a lightning-fast 
                    WordPress admin experience, saving hours daily and boosting productivity across your organization.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg space-y-2">
                      <Clock className="size-5 text-blue-600 dark:text-blue-400" />
                      <div className="font-semibold text-sm">5x Faster</div>
                      <div className="text-xs text-muted-foreground">Admin performance</div>
                    </div>
                    <div className="p-4 border rounded-lg space-y-2">
                      <Target className="size-5 text-blue-600 dark:text-blue-400" />
                      <div className="font-semibold text-sm">15h/week</div>
                      <div className="text-xs text-muted-foreground">Time saved</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-28 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-8 mb-20">
            <Badge className="bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800">
              <Star className="size-3 mr-1" />
              Transformation Complete
            </Badge>
            <h2 className="text-3xl md:text-5xl font-weight-display font-bold">
              Your Store Is Now a 
              <span className="block text-green-600 dark:text-green-400">Revenue Machine</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <div className="text-center p-8 bg-background/20 dark:bg-background/20 backdrop-blur-sm border border-white/10 dark:border-white/10 rounded-xl">
              <div className="text-4xl font-weight-display font-bold text-green-600 dark:text-green-400 mb-2">
                83%
              </div>
              <div className="text-muted-foreground">Faster loading times</div>
            </div>
            <div className="text-center p-8 bg-background/20 dark:bg-background/20 backdrop-blur-sm border border-white/10 dark:border-white/10 rounded-xl">
              <div className="text-4xl font-weight-display font-bold text-blue-600 dark:text-blue-400 mb-2">
                127%
              </div>
              <div className="text-muted-foreground">More conversions</div>
            </div>
            <div className="text-center p-8 bg-background/20 dark:bg-background/20 backdrop-blur-sm border border-white/10 dark:border-white/10 rounded-xl">
              <div className="text-4xl font-weight-display font-bold text-purple-600 dark:text-purple-400 mb-2">
                +47
              </div>
              <div className="text-muted-foreground">Search ranking boost</div>
            </div>
            <div className="text-center p-8 bg-background/20 dark:bg-background/20 backdrop-blur-sm border border-white/10 dark:border-white/10 rounded-xl">
              <div className="text-4xl font-weight-display font-bold text-orange-600 dark:text-orange-400 mb-2">
                $158K
              </div>
              <div className="text-muted-foreground">Annual revenue increase</div>
            </div>
          </div>

          <div className="text-center space-y-8">
            <h3 className="text-2xl font-weight-display font-bold">
              Ready to Transform Your WooCommerce Store?
            </h3>
            <p className="text-lg text-muted-foreground max-w-[600px] mx-auto">
              Join 500+ successful store owners who've transformed their performance and revenue with our proven optimization process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4 h-auto font-semibold">
                Get Your Performance Audit
                <ArrowRight className="size-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto font-semibold">
                View Success Stories
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Free performance audit • No long-term contracts • Results guaranteed
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
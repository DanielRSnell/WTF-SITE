'use client';

import { motion } from 'framer-motion';
import { 
  BarChart3, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Database,
  Server,
  Zap,
  Globe
} from 'lucide-react';

export function PerformanceAnalysisInterface() {
  return (
    <div className="w-full space-y-2.5">
      {/* Analysis Header */}
      <motion.div 
        className="bg-gradient-to-br from-background/80 via-background/60 to-background/40 backdrop-blur-md rounded-lg border border-border/20 shadow-xl p-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-secondary" />
            <h3 className="text-base font-semibold text-foreground">WooCommerce Performance Audit</h3>
          </div>
          <motion.div
            className="flex items-center gap-2 px-2 py-1 bg-orange-500/10 text-orange-500 rounded-full text-xs font-medium backdrop-blur-sm"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Clock className="w-3 h-3" />
            Analyzing...
          </motion.div>
        </div>

        <div className="text-xs text-muted-foreground">
          yourstore.com • Scan initiated 2m ago
        </div>
      </motion.div>

      {/* Critical Issues Found */}
      <motion.div 
        className="bg-gradient-to-br from-background/80 via-background/60 to-background/40 backdrop-blur-md rounded-lg border border-border/20 shadow-xl p-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-2 mb-3">
          <AlertTriangle className="w-4 h-4 text-red-500" />
          <span className="text-sm font-medium text-foreground">Critical Performance Issues</span>
          <span className="ml-auto px-2 py-0.5 bg-red-500/10 text-red-500 rounded-full text-xs">3 Found</span>
        </div>

        <div className="space-y-1.5">
          {[
            { issue: 'Slow database queries', impact: 'High', delay: 0.3 },
            { issue: 'No object caching enabled', impact: 'High', delay: 0.4 },
            { issue: 'Unoptimized images (2.3MB)', impact: 'Medium', delay: 0.5 },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-between p-1.5 bg-red-500/5 border border-red-500/10 rounded-md"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: item.delay }}
              viewport={{ once: true }}
            >
              <span className="text-xs text-foreground">{item.issue}</span>
              <span className={`text-xs px-1.5 py-0.5 rounded ${
                item.impact === 'High' ? 'bg-red-500/20 text-red-500' : 'bg-orange-500/20 text-orange-500'
              }`}>
                {item.impact}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Current Performance Metrics */}
      <motion.div 
        className="bg-gradient-to-br from-background/80 via-background/60 to-background/40 backdrop-blur-md rounded-lg border border-border/20 shadow-xl p-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp className="w-4 h-4 text-secondary" />
          <span className="text-sm font-medium text-foreground">Current Metrics</span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {[
            { label: 'Load Time', value: '6.8s', target: '< 2s', color: 'red', delay: 0.5 },
            { label: 'Core Web Vitals', value: '32/100', target: '> 90', color: 'red', delay: 0.6 },
            { label: 'Cart Abandonment', value: '68%', target: '< 30%', color: 'orange', delay: 0.7 },
            { label: 'Mobile Score', value: '41/100', target: '> 90', color: 'red', delay: 0.8 },
          ].map((metric, index) => (
            <motion.div
              key={index}
              className="p-2 bg-gradient-to-br from-secondary/5 via-secondary/2 to-secondary/10 backdrop-blur-sm rounded border border-border/10"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: metric.delay }}
              viewport={{ once: true }}
            >
              <div className="text-xs text-muted-foreground mb-1">{metric.label}</div>
              <div className={`text-sm font-bold ${
                metric.color === 'red' ? 'text-red-500' : 'text-orange-500'
              }`}>
                {metric.value}
              </div>
              <div className="text-xs text-green-600">Target: {metric.target}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Optimization Recommendations */}
      <motion.div 
        className="bg-gradient-to-br from-background/80 via-background/60 to-background/40 backdrop-blur-md rounded-lg border border-border/20 shadow-xl p-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-2 mb-2">
          <CheckCircle className="w-4 h-4 text-green-500" />
          <span className="text-sm font-medium text-foreground">Optimization Plan</span>
          <span className="ml-auto px-2 py-0.5 bg-green-500/10 text-green-500 rounded-full text-xs">Ready to Implement</span>
        </div>

        <div className="space-y-1.5">
          {[
            { step: '1. Enable Redis object caching', impact: '+340% faster', icon: Database, delay: 0.7 },
            { step: '2. Optimize database queries', impact: '+180% faster', icon: Server, delay: 0.8 },
            { step: '3. CDN & WooCommerce tuning', impact: '+125% faster', icon: Zap, delay: 0.9 },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-3 p-1.5 bg-green-500/5 border border-green-500/10 rounded-md"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: item.delay }}
              viewport={{ once: true }}
            >
              <item.icon className="w-4 h-4 text-secondary shrink-0" />
              <div className="flex-1">
                <div className="text-xs text-foreground">{item.step}</div>
                <div className="text-xs text-green-600 font-medium">{item.impact}</div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Compact Results Summary */}
        <motion.div 
          className="mt-3 pt-2 border-t border-border/20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          viewport={{ once: true }}
        >
          <div className="text-xs text-muted-foreground mb-1">Projected Results</div>
          <div className="text-sm font-bold text-secondary">1.2s Load Time • 83% Improvement</div>
        </motion.div>
      </motion.div>

    </div>
  );
}
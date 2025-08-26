'use client';

import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Users, ShoppingCart } from 'lucide-react';

export function AnimatedDashboard() {
  return (
    <div className="w-full max-w-2xl mx-auto bg-gradient-to-br from-background/80 via-background/60 to-background/40 backdrop-blur-md rounded-lg border border-border/20 shadow-xl overflow-hidden">
      {/* Dashboard Header */}
      <motion.div 
        className="bg-gradient-to-r from-secondary/10 via-secondary/5 to-secondary/10 backdrop-blur-sm px-6 py-4 border-b border-border/20"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-foreground">WooCommerce Dashboard</h3>
            <p className="text-sm text-muted-foreground">Performance Overview</p>
          </div>
          <motion.div
            className="flex items-center gap-2 px-3 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium backdrop-blur-sm"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <TrendingUp className="w-4 h-4" />
            +237% Speed
          </motion.div>
        </div>
      </motion.div>

      {/* Metrics Cards */}
      <div className="p-6 space-y-6">
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: 'Page Load Time', value: '1.2s', change: '-85%', icon: BarChart3, color: 'green' },
            { label: 'Active Users', value: '2,847', change: '+127%', icon: Users, color: 'blue' },
            { label: 'Orders/Hour', value: '94', change: '+340%', icon: ShoppingCart, color: 'purple' },
            { label: 'Conversion Rate', value: '8.3%', change: '+158%', icon: TrendingUp, color: 'orange' },
          ].map((metric, index) => (
            <motion.div
              key={metric.label}
              className="bg-gradient-to-br from-background/40 via-background/20 to-background/60 backdrop-blur-sm rounded-lg p-4 border border-border/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-2">
                <metric.icon className="w-5 h-5 text-secondary" />
                <span className="text-xs font-medium px-2 py-1 bg-secondary/10 text-secondary rounded-full">
                  {metric.change}
                </span>
              </div>
              <div className="text-2xl font-bold text-foreground">{metric.value}</div>
              <div className="text-sm text-muted-foreground">{metric.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Performance Graph */}
        <motion.div
          className="bg-gradient-to-br from-background/40 via-background/20 to-background/60 backdrop-blur-sm rounded-lg p-4 border border-border/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-medium text-foreground">Load Time Optimization</h4>
            <div className="flex items-center gap-4 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-muted-foreground">Before</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-muted-foreground">After</span>
              </div>
            </div>
          </div>
          <div className="relative h-32 flex items-end justify-between gap-2">
            {/* Before bars (high values) */}
            {[8.2, 7.8, 9.1, 8.5, 7.9, 8.3].map((value, index) => (
              <motion.div
                key={`before-${index}`}
                className="bg-red-500/30 rounded-t-sm flex-1 relative"
                initial={{ height: 0 }}
                whileInView={{ height: `${(value / 10) * 100}%` }}
                transition={{ duration: 0.8, delay: 0.9 + index * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-muted-foreground">
                  {value}s
                </div>
              </motion.div>
            ))}
            {/* Divider */}
            <div className="w-px bg-border/50 h-full mx-2"></div>
            {/* After bars (low values) */}
            {[1.2, 1.1, 1.3, 1.0, 1.2, 1.1].map((value, index) => (
              <motion.div
                key={`after-${index}`}
                className="bg-green-500/30 rounded-t-sm flex-1 relative"
                initial={{ height: 0 }}
                whileInView={{ height: `${(value / 10) * 100}%` }}
                transition={{ duration: 0.8, delay: 1.2 + index * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-muted-foreground">
                  {value}s
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Status Indicators */}
        <motion.div
          className="flex items-center justify-between pt-2 border-t border-border/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-muted-foreground">Redis Cache: Active</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-muted-foreground">Database: Optimized</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-muted-foreground">CDN: Enabled</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
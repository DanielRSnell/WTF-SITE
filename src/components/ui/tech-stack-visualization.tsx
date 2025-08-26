'use client';

import { motion } from 'framer-motion';
import { 
  Database, 
  Globe, 
  FileText, 
  Code, 
  ShoppingCart,
  Zap,
  Activity
} from 'lucide-react';

const stackItems = [
  { name: 'WooCommerce', icon: ShoppingCart, description: 'E-commerce', color: 'purple', activity: 'Processing Orders' },
  { name: 'Gutenberg', icon: FileText, description: 'Block Editor', color: 'blue', activity: 'Rendering Pages' },
  { name: 'PHP 8.3', icon: Code, description: 'Runtime', color: 'indigo', activity: 'Executing Code' },
  { name: 'NGINX', icon: Globe, description: 'Web Server', color: 'green', activity: 'Serving Requests' },
  { name: 'Redis', icon: Zap, description: 'Object Caching', color: 'red', activity: 'Caching Data' },
  { name: 'MySQL', icon: Database, description: 'Database', color: 'orange', activity: 'Storing Records' },
];

const TrafficDot = ({ delay, color }: { delay: number; color: string }) => (
  <motion.div
    className={`absolute w-2 h-2 rounded-full ${{
      red: 'bg-red-500',
      orange: 'bg-orange-500',
      green: 'bg-green-500',
      blue: 'bg-blue-500',
      indigo: 'bg-indigo-500',
      purple: 'bg-purple-500'
    }[color]} shadow-lg`}
    style={{
      boxShadow: `0 0 10px ${
        { red: '#ef4444', orange: '#f97316', green: '#22c55e', blue: '#3b82f6', indigo: '#6366f1', purple: '#a855f7' }[color]
      }`
    }}
    animate={{
      x: [0, 300, 0],
      opacity: [0, 1, 1, 0]
    }}
    transition={{
      duration: 3,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
);

export function TechStackVisualization() {
  return (
    <div className="relative">
      {/* Live Traffic Flow Header */}
      <motion.div 
        className="flex items-center gap-3 mb-6 p-3 bg-gradient-to-r from-background/60 via-background/40 to-background/60 backdrop-blur-xl rounded-xl border border-border/30"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Activity className="w-5 h-5 text-green-500" />
        <span className="text-sm font-medium text-foreground">Live Performance Stack</span>
        <motion.div 
          className="ml-auto flex items-center gap-2 px-3 py-1 bg-green-500/10 text-green-500 rounded-full text-xs"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          Active Traffic
        </motion.div>
      </motion.div>

      {/* Stack Grid with Traffic Flow */}
      <div className="relative">
        {/* Animated Traffic Dots */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 6 }).map((_, i) => (
            <TrafficDot 
              key={i} 
              delay={i * 0.5} 
              color={stackItems[i % stackItems.length].color}
            />
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {stackItems.map((item, index) => (
            <motion.div
              key={item.name}
              className="relative bg-gradient-to-br from-background/90 via-background/70 to-background/50 backdrop-blur-2xl rounded-2xl border border-border/30 shadow-2xl p-5 text-center hover:shadow-3xl transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 120
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              {/* Glass Reflection Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-30 rounded-2xl" />
              
              {/* Glowing Icon */}
              <div className={`relative inline-flex p-4 rounded-2xl mb-3 ${{
                red: 'bg-red-500/15 text-red-400 shadow-2xl shadow-red-500/30',
                orange: 'bg-orange-500/15 text-orange-400 shadow-2xl shadow-orange-500/30', 
                green: 'bg-green-500/15 text-green-400 shadow-2xl shadow-green-500/30',
                blue: 'bg-blue-500/15 text-blue-400 shadow-2xl shadow-blue-500/30',
                indigo: 'bg-indigo-500/15 text-indigo-400 shadow-2xl shadow-indigo-500/30',
                purple: 'bg-purple-500/15 text-purple-400 shadow-2xl shadow-purple-500/30'
              }[item.color]}`}
              style={{
                boxShadow: `0 0 30px ${
                  { red: '#ef444440', orange: '#f9731640', green: '#22c55e40', blue: '#3b82f640', indigo: '#6366f140', purple: '#a855f740' }[item.color]
                }`
              }}
              >
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: index * 0.2 }}
                >
                  <item.icon className="w-7 h-7" />
                </motion.div>
                
                {/* Pulse Effect */}
                <motion.div 
                  className={`absolute inset-0 rounded-2xl ${{
                    red: 'bg-red-500/20',
                    orange: 'bg-orange-500/20', 
                    green: 'bg-green-500/20',
                    blue: 'bg-blue-500/20',
                    indigo: 'bg-indigo-500/20',
                    purple: 'bg-purple-500/20'
                  }[item.color]}`}
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                />
              </div>

              {/* Component Info */}
              <div className="relative z-10">
                <div className="font-bold text-foreground text-sm mb-2">{item.name}</div>
                <div className="text-xs text-muted-foreground mb-2">{item.description}</div>
                
                {/* Activity Indicator */}
                <motion.div 
                  className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs ${{
                    red: 'bg-red-500/10 text-red-400',
                    orange: 'bg-orange-500/10 text-orange-400', 
                    green: 'bg-green-500/10 text-green-400',
                    blue: 'bg-blue-500/10 text-blue-400',
                    indigo: 'bg-indigo-500/10 text-indigo-400',
                    purple: 'bg-purple-500/10 text-purple-400'
                  }[item.color]}`}
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.4 }}
                >
                  <div className="relative">
                    <motion.div 
                      className={`w-1.5 h-1.5 rounded-full ${{
                        red: 'bg-red-400',
                        orange: 'bg-orange-400', 
                        green: 'bg-green-400',
                        blue: 'bg-blue-400',
                        indigo: 'bg-indigo-400',
                        purple: 'bg-purple-400'
                      }[item.color]}`}
                    />
                    <motion.div 
                      className={`absolute inset-0 w-1.5 h-1.5 rounded-full ${{
                        red: 'bg-red-400',
                        orange: 'bg-orange-400', 
                        green: 'bg-green-400',
                        blue: 'bg-blue-400',
                        indigo: 'bg-indigo-400',
                        purple: 'bg-purple-400'
                      }[item.color]}`}
                      animate={{ 
                        scale: [1, 2, 1],
                        opacity: [0.7, 0, 0.7]
                      }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity,
                        delay: index * 0.2
                      }}
                    />
                  </div>
                  {item.activity}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
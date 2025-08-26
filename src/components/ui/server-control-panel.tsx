'use client';

import { motion } from 'framer-motion';
import { Server, Shield, Terminal, Database, HardDrive, Cpu } from 'lucide-react';

export function ServerControlPanel() {
  return (
    <div className="w-full max-w-2xl mx-auto space-y-4">
      {/* Server Status Overview */}
      <motion.div 
        className="bg-gradient-to-br from-background/80 via-background/60 to-background/40 backdrop-blur-md rounded-lg border border-border/20 shadow-xl p-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Server className="w-6 h-6 text-secondary" />
            <div>
              <h3 className="text-lg font-semibold text-foreground">Your Dedicated Server</h3>
              <p className="text-sm text-muted-foreground">prod-woo-01.your-domain.com</p>
            </div>
          </div>
          <motion.div
            className="flex items-center gap-2 px-3 py-1.5 bg-green-500/10 text-green-500 rounded-full text-sm font-medium backdrop-blur-sm"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Online
          </motion.div>
        </div>

        {/* Server Specs */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: 'CPU Usage', value: '23%', icon: Cpu },
            { label: 'Memory', value: '4.2/16 GB', icon: HardDrive },
            { label: 'Storage', value: '180/500 GB', icon: Database },
          ].map((spec, index) => (
            <motion.div
              key={spec.label}
              className="bg-gradient-to-br from-secondary/10 via-secondary/5 to-secondary/15 backdrop-blur-sm rounded-lg p-3 border border-border/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-1">
                <spec.icon className="w-4 h-4 text-secondary" />
                <span className="text-xs font-medium text-muted-foreground">{spec.label}</span>
              </div>
              <div className="text-sm font-bold text-foreground">{spec.value}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Root Access Panel */}
      <motion.div 
        className="bg-gradient-to-br from-background/80 via-background/60 to-background/40 backdrop-blur-md rounded-lg border border-border/20 shadow-xl p-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-3 mb-4">
          <Terminal className="w-5 h-5 text-secondary" />
          <h4 className="text-base font-semibold text-foreground">Root Access Terminal</h4>
          <div className="flex items-center gap-2 ml-auto">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-xs text-muted-foreground">Connected</span>
          </div>
        </div>
        
        <div className="bg-gray-900/50 rounded-md p-4 font-mono text-sm">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-green-400">root@prod-woo-01:~# </div>
            <motion.div
              className="text-gray-300 mt-1"
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "auto" }}
              transition={{ duration: 2, delay: 0.8 }}
              viewport={{ once: true }}
            >
              systemctl status nginx php8.1-fpm mysql redis
            </motion.div>
            <motion.div
              className="text-green-400 mt-2 text-xs"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.8 }}
              viewport={{ once: true }}
            >
              ● All services active (running)
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Control Permissions */}
      <div className="grid grid-cols-2 gap-4">
        {[
          {
            title: 'Full Control',
            description: 'Complete server configuration access',
            permissions: ['Root SSH Access', 'Custom Configurations', 'Package Management'],
            icon: Shield,
          },
          {
            title: 'Your Data',
            description: 'Complete ownership of all data',
            permissions: ['Database Backups', 'File System Access', 'Export Anytime'],
            icon: Database,
          },
        ].map((panel, index) => (
          <motion.div
            key={panel.title}
            className="bg-gradient-to-br from-background/80 via-background/60 to-background/40 backdrop-blur-md rounded-lg border border-border/20 shadow-xl p-6"
            initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-3">
              <panel.icon className="w-5 h-5 text-secondary" />
              <div>
                <h4 className="text-base font-semibold text-foreground">{panel.title}</h4>
                <p className="text-xs text-muted-foreground">{panel.description}</p>
              </div>
            </div>
            
            <div className="space-y-2">
              {panel.permissions.map((permission, permIndex) => (
                <motion.div
                  key={permission}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 1 + index * 0.2 + permIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                  <span className="text-sm text-foreground">{permission}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
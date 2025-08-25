'use client';

import { useEffect, useRef, useState } from 'react';

import { Check, Code, Copy } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import * as shiki from 'shiki';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useMediaQuery } from '@/hooks/use-media-query';
import { cn } from '@/lib/utils';

const frameworks = [
  {
    name: 'Redis Cache',
    lang: 'php',
    code: `// wp-config.php - Redis Object Cache Setup

define('WP_REDIS_HOST', '127.0.0.1');
define('WP_REDIS_PORT', 6379);
define('WP_REDIS_TIMEOUT', 1);
define('WP_REDIS_READ_TIMEOUT', 1);
define('WP_REDIS_DATABASE', 0);

// WooCommerce specific cache groups
wp_cache_add_global_groups([
    'wc-cart-hash',
    'wc-product-data',
    'wc-session-data'
]);`,
  },
  {
    name: 'NGINX Config',
    lang: 'nginx',
    code: `# WooCommerce Performance Configuration

# Static assets caching
location ~* \\.(css|js|png|jpg|jpeg|gif|ico|svg|webp)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
    add_header Vary Accept-Encoding;
}

# WooCommerce dynamic pages
location ~* ^/(cart|checkout|my-account) {
    expires -1;
    add_header Cache-Control "no-cache, no-store, must-revalidate";
}

# Product pages with smart caching
location ~* ^/product/ {
    expires 1h;
    add_header Cache-Control "public, must-revalidate";
}`,
  },
  {
    name: 'Performance Plugins',
    lang: 'php',
    code: `// Recommended WooCommerce Performance Stack

// Object Cache Pro (Redis)
define('WP_REDIS_CONFIG', [
    'token' => 'your-token-here',
    'host' => '127.0.0.1',
    'port' => 6379,
    'database' => 0,
]);

// Query Monitor for Development
if (defined('WP_DEBUG') && WP_DEBUG) {
    // Query Monitor enabled in staging
    define('QM_ENABLE_CAPS_PANEL', true);
}

// WooCommerce specific optimizations
add_filter('woocommerce_product_data_store_cpt_get_products_query', 
    'optimize_product_queries');`,
  },
  {
    name: 'Database Optimization',
    lang: 'sql',
    code: `-- WooCommerce Database Optimization Queries

-- Index for product search performance
CREATE INDEX idx_posts_type_status ON wp_posts(post_type, post_status);

-- WooCommerce order optimization
CREATE INDEX idx_postmeta_meta_key_value 
ON wp_postmeta(meta_key, meta_value(191));

-- Product attribute performance
CREATE INDEX idx_term_relationships_object 
ON wp_term_relationships(object_id);

-- Customer data optimization
CREATE INDEX idx_usermeta_user_meta 
ON wp_usermeta(user_id, meta_key);`,
  },
  {
    name: 'CDN Integration',
    lang: 'php',
    code: `// WooCommerce CDN Configuration

// CloudFlare integration for WooCommerce
add_filter('woocommerce_get_image_size', function($size) {
    $size['width'] = $size['width'] * 2; // Retina support
    return $size;
});

// Product image optimization
add_filter('wp_get_attachment_image_src', function($image) {
    if (strpos($image[0], 'product') !== false) {
        $image[0] = str_replace(
            home_url(), 
            'https://cdn.woothatsfast.com', 
            $image[0]
        );
    }
    return $image;
});`,
  },
  {
    name: 'Monitoring Setup',
    lang: 'php',
    code: `// WooCommerce Performance Monitoring

// Core Web Vitals tracking for WooCommerce
add_action('wp_footer', function() {
    if (is_woocommerce() || is_cart() || is_checkout()) {
        ?>
        <script>
        new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
                if (entry.entryType === 'largest-contentful-paint') {
                    // Track LCP for WooCommerce pages
                    gtag('event', 'lcp_woocommerce', {
                        value: entry.startTime,
                        page_type: '<?php echo get_post_type(); ?>'
                    });
                }
            }
        }).observe({entryTypes: ['largest-contentful-paint']});
        </script>
        <?php
    }
});`,
  },
];

export function Compatibility() {
  const [activeTab, setActiveTab] = useState(frameworks[0].name);
  const [highlightedCode, setHighlightedCode] = useState<{
    light: Record<string, string>;
    dark: Record<string, string>;
  }>({
    light: {},
    dark: {},
  });
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const { isAtLeast } = useMediaQuery();
  const isMobile = !isAtLeast('md');

  useEffect(() => {
    // Get initial theme from localStorage, default to 'light' if none exists
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    setTheme(savedTheme || 'light');

    // Listen for theme changes
    const handleStorageChange = () => {
      const newTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
      if (newTheme) {
        setTheme(newTheme);
      }
    };

    window.addEventListener('storage', handleStorageChange);

    // Listen for direct DOM class changes (for immediate updates)
    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains('dark');
      setTheme(isDark ? 'dark' : 'light');
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    async function highlightCode() {
      try {
        const highlighter = await shiki.createHighlighter({
          themes: ['github-dark-high-contrast', 'github-light-default'],
          langs: [
            'php',
            'nginx',
            'sql',
            'javascript',
            'bash',
            'yaml',
          ],
        });

        const lightHighlighted: Record<string, string> = {};
        const darkHighlighted: Record<string, string> = {};

        for (const framework of frameworks) {
          lightHighlighted[framework.name] = highlighter.codeToHtml(
            framework.code,
            {
              lang: framework.lang,
              theme: 'github-light-default',
            },
          );

          darkHighlighted[framework.name] = highlighter.codeToHtml(
            framework.code,
            {
              lang: framework.lang,
              theme: 'github-dark-high-contrast',
            },
          );
        }

        setHighlightedCode({
          light: lightHighlighted,
          dark: darkHighlighted,
        });
      } catch (error) {
        console.error('Failed to highlight code:', error);
      } finally {
        setIsLoading(false);
      }
    }

    highlightCode();
  }, []); // Remove theme dependency

  // Get the current highlighted code based on theme
  const currentHighlightedCode =
    theme === 'dark' ? highlightedCode.dark : highlightedCode.light;

  return (
    <section className="container">
      <div className="bordered-div-padding border border-t-0">
        <div className="space-y-4">
          <h3 className="text-muted-foreground flex items-center gap-2 text-sm leading-snug font-medium md:text-base">
            <Code className="size-5" />
            WooCommerce Optimization
          </h3>
          <h2 className="text-foreground font-weight-display leading-snug md:text-xl">
            Performance configurations we implement:
          </h2>
        </div>

        <div className="mt-6 gap-6">
          {isMobile ? (
            <Select value={activeTab} onValueChange={setActiveTab}>
              <SelectTrigger className="w-full">
                <SelectValue>{activeTab}</SelectValue>
              </SelectTrigger>
              <SelectContent>
                {frameworks.map((framework) => (
                  <SelectItem key={framework.name} value={framework.name}>
                    {framework.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          ) : (
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="flex gap-3">
                {frameworks.map((framework) => (
                  <TabsTrigger key={framework.name} value={framework.name}>
                    {framework.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          )}

          <div className="mt-4">
            {isLoading ? (
              <Card className="relative overflow-hidden !p-0">
                <CardContent className="!p-0">
                  <div className="flex h-92 items-center justify-center">
                    <div className="text-muted-foreground">Loading...</div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              frameworks.map(
                (framework) =>
                  framework.name === activeTab && (
                    <Card
                      key={framework.name}
                      className="relative overflow-hidden !p-0"
                    >
                      <CardContent className="!p-0">
                        <div
                          dangerouslySetInnerHTML={{
                            __html:
                              currentHighlightedCode[framework.name] || '',
                          }}
                          className="h-89 overflow-x-auto overflow-y-auto text-sm [&_pre]:m-0 [&_pre]:h-89 [&_pre]:bg-transparent [&_pre]:p-4 [&_pre]:whitespace-pre-wrap"
                        />
                        <CopyButton
                          text={framework.code}
                          className="absolute top-4 right-4"
                        />
                      </CardContent>
                    </Card>
                  ),
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

interface CopyButtonProps {
  text: string;
  className?: string;
}

function CopyButton({ text, className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>(undefined);

  const handleCopy = async () => {
    if (copied) return;

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);

      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <Button
      aria-label="Copy code"
      onClick={handleCopy}
      variant="ghost"
      size="icon"
      className={cn(className)}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={copied ? 'check' : 'copy'}
          initial={{ opacity: 0, y: 2 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -2 }}
          transition={{ duration: 0.15 }}
        >
          {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
        </motion.div>
      </AnimatePresence>
    </Button>
  );
}

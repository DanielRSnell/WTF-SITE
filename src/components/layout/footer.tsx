'use client';
import { useEffect, useState } from 'react';

import {
  Zap,
  Server,
  Code,
  ShieldCheck,
  BarChart3,
  ArrowUpRight,
} from 'lucide-react';
import { FaLinkedin, FaXTwitter } from 'react-icons/fa6';

import { Diamonds } from '@/components/icons/diamonds';
import Logo from '@/components/layout/logo';
import { Button } from '@/components/ui/button';
import { EXTERNAL_LINKS } from '@/constants/external-links';
import { cn } from '@/lib/utils';

const SERVICES = [
  {
    title: 'Premium Services',
    services: [
      {
        name: 'Unlimited Development',
        href: '/services/development',
        icon: <Code className="size-5" />,
        highlight: true,
      },
      {
        name: 'Self-Hosted Management',
        href: '/services/hosting',
        icon: <Server className="size-5" />,
      },
      {
        name: 'Website Optimization',
        href: '/services/optimization',
        icon: <BarChart3 className="size-5" />,
      },
      {
        name: 'Core Web Vitals Management',
        href: '/services/core-web-vitals',
        icon: <Zap className="size-5" />,
      },
    ],
  },
  {
    title: 'Learn & Connect',
    services: [
      {
        name: 'Case Studies',
        href: '/case-studies',
        icon: <BarChart3 className="size-5" />,
      },
      {
        name: 'About WooThatsFast',
        href: '/about',
        icon: <ShieldCheck className="size-5" />,
      },
      {
        name: 'Free Performance Analysis',
        href: '/contact',
        icon: <Zap className="size-5" />,
        highlight: true,
      },
      {
        name: 'Optimized Migrations',
        href: '/services/migrations',
        icon: <ArrowUpRight className="size-5" />,
      },
    ],
  },
];

const Footer = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

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

  // Prevent hydration mismatch by using a consistent theme class until mounted
  // Footer is in light mode when dark theme is applied (inverted behavior)
  const themeClass =
    mounted && theme === 'dark'
      ? 'light bg-foreground text-background [&_*]:border-border/30'
      : 'dark bg-background text-foreground';

  // Logo should be inverted when footer has light background (dark theme)
  // and not inverted when footer has dark background (light theme)
  const logoWordmarkClass = cn(
    'w-[min(100%,400px)] translate-y-1/4 md:translate-y-1/3 md:h-32 md:w-full lg:h-73 opacity-10',
    mounted && theme === 'dark' ? 'invert-0' : 'invert',
  );

  return (
    <footer className={cn('overflow-hidden', themeClass)}>
      {/* Services Section */}
      <div className="container">
        <div className="bordered-div-padding border-x">
          <h2 className="lg:text-4xxl font-weight-display mt-6 text-xl md:mt-14 md:text-3xl lg:mt-40">
            Expert WooCommerce optimization. Lightning-fast results.
          </h2>
        </div>

        <div className="grid divide-y border md:grid-cols-2 md:divide-x md:divide-y-0">
          {SERVICES.map((category, index) => (
            <div
              key={index}
              className={cn(
                'bordered-div-padding relative flex flex-col gap-6 md:gap-10',
              )}
            >
              {index === 1 && (
                <Diamonds className="absolute top-0 left-full -mt-0.25 hidden !h-[calc(100%+2px)] border-y md:block" />
              )}

              <div>
                <h3 className="font-weight-display text-lg md:text-2xl lg:text-3xl">
                  {category.title}
                </h3>
              </div>

              <ul className="space-y-4">
                {category.services.map((service, serviceIndex) => (
                  <li key={serviceIndex} className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-0.5">{service.icon}</span>
                    <a
                      href={service.href}
                      className={cn(
                        "font-medium transition-colors",
                        service.highlight 
                          ? "text-current hover:opacity-80 font-semibold" 
                          : "text-muted-foreground hover:text-current"
                      )}
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant="outline"
                className={cn(
                  "mt-auto mb-0 w-fit",
                  mounted && theme === 'light' 
                    ? "border-white text-white hover:bg-white hover:text-black" 
                    : "border-white text-white hover:bg-white hover:text-black"
                )}
              >
                <a href="/contact">
                  Get Started
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* Social and Status Section */}
        <div className="flex flex-col justify-between border-x border-b md:flex-row">
          <div className="bordered-div-padding flex items-center space-x-3">
            <a
              href="https://twitter.com/woothatsfast"
              className="px-3 py-2.5 transition-opacity hover:opacity-80"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaXTwitter className="size-5" />
            </a>
            <a
              href="https://linkedin.com/company/woothatsfast"
              className="px-3 py-2.5 transition-opacity hover:opacity-80"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="size-5" />
            </a>
          </div>
          <div className="bordered-div-padding flex items-center border-t text-[#00A656] md:border-t-0">
            <span
              className={cn(
                'me-3 h-2 w-2 animate-pulse rounded-full bg-[#00A656]',
              )}
            ></span>
            <span className="font-medium">WooCommerce performance experts</span>
          </div>
        </div>

        {/* Legal Links Section */}
        <div className="bordered-div-padding text-muted-foreground flex items-center justify-center space-x-6 border-x border-b text-sm">
          <a
            href="/privacy-policy"
            className="hover:text-foreground transition-opacity hover:opacity-80"
          >
            Privacy Policy
          </a>
          <span className="text-border">•</span>
          <a
            href="/terms-of-service"
            className="hover:text-foreground transition-opacity hover:opacity-80"
          >
            Terms of Service
          </a>
        </div>

        {/* Large Logo */}
        <Logo
          className="justify-center border-x"
          iconClassName="hidden"
          wordmarkClassName={logoWordmarkClass}
        />
      </div>
    </footer>
  );
};

export default Footer;

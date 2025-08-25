'use client';

import { useState } from 'react';

import { ClockFading, Package } from 'lucide-react';
import { FaDiscord, FaGithub } from 'react-icons/fa6';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { EXTERNAL_LINKS } from '@/constants/external-links';
import { cn } from '@/lib/utils';

type Status = 'All' | 'In Progress' | 'Planned' | 'Shipped';

const statuses: Status[] = ['All', 'In Progress', 'Planned', 'Shipped'];

type RoadmapItem = {
  status: Exclude<Status, 'All'>;
  title: string;
  description: string;
  date: string;
  team: {
    name: string;
    image: string;
  };
};

const roadmapItems: RoadmapItem[] = [
  {
    status: 'In Progress',
    title: 'Advanced WooCommerce Analytics Dashboard',
    description:
      'Real-time performance monitoring with Core Web Vitals tracking, conversion optimization insights, and revenue impact analysis.',
    date: 'Live by June 2025',
    team: {
      name: 'Performance Team',
      image: '/layout/logo-icon.svg',
    },
  },
  {
    status: 'In Progress',
    title: 'Automated Core Web Vitals Optimization',
    description: 'AI-powered optimization that automatically maintains 90+ Core Web Vitals scores as your store evolves.',
    date: 'Beta Q2 2025',
    team: {
      name: 'AI Optimization Team',
      image: '/layout/logo-icon.svg',
    },
  },
  {
    status: 'Planned',
    title: 'Multi-Store Management Platform',
    description:
      'Centralized dashboard for managing multiple WooCommerce stores with unified performance monitoring and optimization.',
    date: 'Q3 2025',
    team: {
      name: 'Marcus Chen',
      image: '/images/blog/authors/yassine-zaanouni.webp',
    },
  },
  {
    status: 'Planned',
    title: 'Advanced Security Hardening Suite',
    description:
      'Enterprise-grade security features including advanced firewall, real-time threat detection, and automated security patching.',
    date: 'Q4 2025',
    team: {
      name: 'Security Team',
      image: '/images/blog/authors/fedir-davydov.webp',
    },
  },
  {
    status: 'Shipped',
    title: 'Redis Caching Integration',
    description:
      'Advanced Redis caching implementation with WooCommerce-specific optimizations for database queries and object caching.',
    date: 'April 2025',
    team: {
      name: 'Sarah Rodriguez',
      image: '/images/blog/authors/robert-austin.webp',
    },
  },
  {
    status: 'Shipped',
    title: 'Database Optimization Toolkit',
    description:
      'Automated database analysis and optimization with custom indexing for WooCommerce tables and performance monitoring.',
    date: 'March 2025',
    team: {
      name: 'Database Team',
      image: '/layout/logo-icon.svg',
    },
  },
  {
    status: 'Shipped',
    title: 'Image Optimization Pipeline',
    description:
      'Automated WebP/AVIF conversion, responsive image generation, and lazy loading implementation for all WooCommerce stores.',
    date: 'February 2025',
    team: {
      name: 'Marcus Chen',
      image: '/images/blog/authors/robert-austin.webp',
    },
  },
  {
    status: 'Shipped',
    title: 'Self-Hosted Migration Service',
    description:
      'Complete migration service from managed hosting to optimized self-hosted infrastructure with zero downtime.',
    date: 'January 2025',
    team: {
      name: 'Migration Team',
      image: '/layout/logo-icon.svg',
    },
  },
];

export function RoadmapSection() {
  const [activeStatus, setActiveStatus] = useState<Status>('All');

  // Filter items based on active status
  const filteredItems =
    activeStatus === 'All'
      ? roadmapItems
      : roadmapItems.filter((item) => item.status === activeStatus);

  return (
    <section className="container">
      <div className="border-x">
        <div className="hidden p-7.5 md:block" />

        <div className="bordered-div-padding border-b">
          <h1 className="font-weight-display text-2xl leading-snug tracking-tighter md:text-3xl lg:text-5xl">
            WooCommerce Service Roadmap
          </h1>
          <div className="mt-6 block md:hidden">
            <Select
              value={activeStatus}
              onValueChange={(value) => setActiveStatus(value as Status)}
            >
              <SelectTrigger className="w-full">
                <SelectValue>{activeStatus}</SelectValue>
              </SelectTrigger>
              <SelectContent>
                {statuses.map((status) => (
                  <SelectItem key={status} value={status}>
                    {status}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="bordered-div-padding hidden border-b md:block">
          <Tabs
            value={activeStatus}
            onValueChange={(value) => setActiveStatus(value as Status)}
          >
            <TabsList className="flex gap-3">
              {statuses.map((status) => (
                <TabsTrigger key={status} value={status}>
                  {status}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {filteredItems.map((item, index) => {
            // Determine if this is in the last row
            const isLastRow =
              index >=
              filteredItems.length - (filteredItems.length % 2 === 0 ? 2 : 1);
            // Is it the last item?
            const isLastItem = index === filteredItems.length - 1;
            // Is it odd and in an odd position? (left column)
            const isLeftColumn = index % 2 === 0;
            // Is it the last item in an odd-length list?
            const isLastSingleItem =
              isLastItem && filteredItems.length % 2 !== 0;

            return (
              <Item
                key={index}
                item={item}
                className={cn({
                  // No bottom border for last row items
                  'border-b-0': isLastRow,
                  // No right border for items in the right column
                  'md:border-r-0': !isLeftColumn,
                  // Full width and no borders for last item in odd-length list
                  'md:col-span-2': isLastSingleItem,
                  // Add right border only to left column items
                  'md:border-r': isLeftColumn && !isLastSingleItem,
                })}
              />
            );
          })}
        </div>

        <div className="bordered-div-padding space-y-6 border-t">
          <h3 className="font-weight-display leading-snug tracking-tighter md:text-xl">
            Client feedback drives our roadmap
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Our service roadmap is shaped by real client needs and WooCommerce performance challenges.
            Have a specific optimization request or want to discuss your store's needs?
          </p>
          <div className="flex gap-3 md:gap-6">
            <a href="/contact" className="">
              <Button size="sm" variant="default" className="">
                <Package className="size-5" />
                Request Features
              </Button>
            </a>
            <a href="mailto:hello@woothatsfast.com" className="">
              <Button size="sm" variant="outline" className="">
                <ClockFading className="size-5" />
                Discuss Your Needs
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Item({ item, className }: { item: RoadmapItem; className?: string }) {
  const statusColors: Record<RoadmapItem['status'], string> = {
    'In Progress': 'bg-chart-1/10',
    Planned: 'bg-chart-2/10 ',
    Shipped: 'bg-chart-3/10',
  };

  return (
    <div
      className={cn(
        'bordered-div-padding hover:bg-muted/30 group dark:hover:bg-muted border-b',
        className,
      )}
    >
      <div className="">
        <div className="flex items-center justify-between gap-2">
          <Badge
            variant="default"
            className={cn(
              'text-foreground w-[6.6875rem]',
              statusColors[item.status],
            )}
          >
            {item.status}
          </Badge>
          <div className="text-muted-foreground flex items-center gap-3">
            {item.status === 'Shipped' ? (
              <Package className="size-5" />
            ) : (
              <ClockFading className="size-5" />
            )}
            <span className="text-sm font-medium">{item.date}</span>
          </div>
        </div>
        <h2 className="font-weight-display mt-4 leading-snug tracking-tighter md:text-xl">
          {item.title}
        </h2>
        <p className="text-muted-foreground mt-6 text-sm leading-relaxed md:text-base">
          {item.description}
        </p>
      </div>

      <div className="mt-6 flex items-center justify-between md:mt-8 lg:mt-10">
        {item.team && (
          <div className="flex items-center gap-2">
            <img
              src={item.team.image}
              alt={item.team.name}
              width={24}
              height={24}
              className="rounded-full"
            />
            <span className="text-muted-foreground text-sm font-medium">
              {item.team.name}
            </span>
          </div>
        )}
        <a href="/contact">
          <Package className="size-5" />
        </a>
      </div>
    </div>
  );
}

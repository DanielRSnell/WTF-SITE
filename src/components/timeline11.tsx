"use client";

import { motion } from "framer-motion";
import { Database, Shield, Users, ShoppingCart } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Timeline11 = () => {
  const currentPhase = 4;
  const timelinePhases = [
    {
      id: 0,
      date: "Phase 1",
      title: "Database Optimization", 
      description: "Clean legacy tables, optimize queries, and restructure for performance.",
      icon: Database,
    },
    {
      id: 1,
      date: "Phase 2",
      title: "Redis Caching",
      description: "Implement object caching and page optimization layers.",
      icon: Shield,
    },
    {
      id: 2,
      date: "Phase 3",
      title: "Admin Speed Boost",
      description: "Dashboard optimization and UI performance improvements.",
      icon: Users,
    },
    {
      id: 3,
      date: "Phase 4",
      title: "Checkout Optimization",
      description: "Payment flow optimization and conversion improvements.",
      icon: ShoppingCart,
    },
  ];

  return (
    <div className="space-y-6">
      <Card className="relative w-full border-none shadow-none bg-transparent md:py-16 overflow-hidden">
        <CardContent className="relative flex flex-col items-center p-0 md:mt-12">
          <Separator className="absolute -top-8 left-0 hidden md:block" />
          {currentPhase && (
            <motion.div
              initial={{ width: 0 }}
              whileInView={{
                width: `${(currentPhase / timelinePhases.length) * 75}%`,
              }}
              transition={{ ease: "easeOut", duration: 0.5 }}
              className={cn(
                "absolute -top-[33px] left-0 hidden h-0.5 bg-secondary md:block",
              )}
            />
          )}
          <div className="grid gap-6 md:grid-cols-4">
            {timelinePhases.map((phase, index) => {
              const PhaseIcon = phase.icon;
              return (
                <div key={phase.id} className="relative space-y-2">
                  <Separator
                    orientation="vertical"
                    className="absolute top-6 left-2.5 block md:hidden"
                  />
                  {index == 0 && (
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{
                        height: currentPhase * 125,
                      }}
                      transition={{ ease: "easeOut", duration: 0.5 }}
                      className={cn(
                        "absolute top-22 left-2.5 z-10 w-0.5 bg-secondary md:hidden",
                      )}
                    />
                  )}
                  <div className="absolute top-4 -left-6 z-10 mb-5 flex size-18 items-center justify-center rounded-full bg-background/20 backdrop-blur-sm p-1 md:-top-17 md:-left-4">
                    <div className="flex size-10 items-center justify-center rounded-lg border border-secondary/20 bg-gradient-to-br from-secondary/10 via-secondary/5 to-secondary/20 backdrop-blur-md p-[5px]">
                      <div className="flex size-full items-center justify-center rounded-md border border-secondary/30 bg-gradient-to-br from-secondary/20 via-secondary/10 to-secondary/30 backdrop-blur-lg">
                        <PhaseIcon size={16} className="text-secondary" />
                      </div>
                    </div>
                  </div>

                  <div className="pl-13 md:pl-0 flex flex-col gap-2 mt-2">
                    <p className="text-sm text-muted-foreground">
                      {phase.date}
                    </p>
                    <h2 className="text-xl font-bold tracking-tighter text-foreground">
                      {phase.title}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      {phase.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export { Timeline11 };

"use client";

import { motion } from "framer-motion";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { LineChart, PenTool, MousePointerClick, Users, Video } from "lucide-react";
import type { Dictionary } from "@/lib/dictionaries";

export function BentoCapabilities({ dictionary }: { dictionary: Dictionary }) {
  const items = [
    {
      title: dictionary.capabilities.items.performance.title,
      description: dictionary.capabilities.items.performance.desc,
      icon: <LineChart className="w-6 h-6 text-accent" />,
      className: "md:col-span-2 md:row-span-2",
    },
    {
      title: dictionary.capabilities.items.brandStrategy.title,
      description: dictionary.capabilities.items.brandStrategy.desc,
      icon: <PenTool className="w-6 h-6 text-techBlue" />,
      className: "md:col-span-1",
    },
    {
      title: dictionary.capabilities.items.cro.title,
      description: dictionary.capabilities.items.cro.desc,
      icon: <MousePointerClick className="w-6 h-6 text-emerald-500" />,
      className: "md:col-span-1",
    },
    {
      title: dictionary.capabilities.items.leadGen.title,
      description: dictionary.capabilities.items.leadGen.desc,
      icon: <Users className="w-6 h-6 text-purple-500" />,
      className: "md:col-span-1",
    },
    {
      title: dictionary.capabilities.items.content.title,
      description: dictionary.capabilities.items.content.desc,
      icon: <Video className="w-6 h-6 text-yellow-500" />,
      className: "md:col-span-1",
    },
  ];

  return (
    <section className="py-24 md:py-32 relative">
      <div className="container-page mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">
            {dictionary.capabilities.title}
          </h2>
          <p className="text-xl text-neutral-400">
            {dictionary.capabilities.description}
          </p>
        </div>

        <BentoGrid className="md:grid-rows-3 md:grid-cols-3 max-w-5xl mx-auto">
          {items.map((item, i) => (
            <SpotlightCard key={i} className={`p-8 ${item.className}`}>
              <BentoGridItem
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            </SpotlightCard>
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}

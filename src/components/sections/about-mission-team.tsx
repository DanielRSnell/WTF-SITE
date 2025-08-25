import { Heart, Users } from 'lucide-react';
import { FaGithub, FaXTwitter } from 'react-icons/fa6';

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';

const teamMembers = [
  {
    name: 'Daniel Snell',
    role: 'Founder & Lead Developer',
    company: 'WooThatsFast',
    image: '/images/blog/authors/robert-austin.webp',
    github: '#',
    linkedin: '#',
    twitter: '#',
    bio: '8+ years optimizing WooCommerce performance. Former WooCommerce core contributor. Obsessed with sub-2-second page loads.',
  },
  {
    name: 'Conner Burton',
    role: 'WooCommerce Architect',
    company: 'WooThatsFast',
    image: '/images/blog/authors/fedir-davydov.webp',
    github: '#',
    linkedin: '#',
    twitter: '#',
    bio: 'E-commerce systems specialist with 10 years in WooCommerce. Masters complex product configurations and custom checkout flows.',
  },
  {
    name: 'Matt Gilbert',
    role: 'Performance Engineer',
    company: 'WooThatsFast',
    image: '/images/blog/authors/yassine-zaanouni.webp',
    github: '#',
    linkedin: '#',
    twitter: '#',
    bio: 'Database optimization expert specializing in WooCommerce scalability. Transforms slow queries into lightning-fast performance.',
  },
];

export function AboutMissionTeam() {
  return (
    <section className="container">
      <div className="grid grid-cols-1 divide-y border border-t-0 md:grid-cols-2 md:divide-x md:divide-y-0">
        {/* Mission Section */}
        <div className="bordered-div-padding space-y-8">
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-muted-foreground flex items-center gap-2 text-sm leading-snug font-medium md:text-base">
              <Heart className="size-5" />
              Mission
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
              <span className="text-foreground font-medium">
                WooCommerce businesses deserve better than generic managed hosting markups and restrictions.
              </span>{' '}
              WooThatsFast started because we saw too many successful stores struggling with expensive, 
              limiting hosting solutions that didn't understand e-commerce performance needs.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
              We empower WooCommerce businesses with{' '}
              <span className="text-foreground font-medium">
                lightning-fast, fully-owned hosting solutions
              </span>{' '}
              backed by expert developers who understand the unique challenges of{' '}
              <a
                href="/case-studies"
                className="text-secondary font-medium hover:underline"
              >
                e-commerce performance and business logic
              </a>
              .
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="bordered-div-padding relative space-y-8">
          <div className="bg-secondary text-secondary-foreground absolute top-0 right-0 px-3 py-2.5 text-sm leading-none font-medium">
            WooCommerce experts
          </div>

          <div className="space-y-4 md:space-y-6">
            <h2 className="text-muted-foreground flex items-center gap-2 text-sm leading-snug font-medium md:text-base">
              <Users className="size-5" />
              Team
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
              Our team specializes exclusively in WooCommerce performance and optimization — 
              bringing years of e-commerce expertise to every project.
            </p>

            {/* Team Members */}
            <div className="mt-6 flex flex-col gap-6 md:flex-row">
              {teamMembers.map((member) => (
                <div key={member.name} className="space-y-3">
                  {/* Desktop: Hover Card */}
                  <div className="hidden md:block">
                    <HoverCard openDelay={200} closeDelay={100}>
                      <HoverCardTrigger asChild>
                        <div className="flex cursor-pointer items-center gap-3">
                          <img
                            src={member.image}
                            alt={member.name}
                            width={32}
                            height={32}
                            className="rounded-full"
                          />
                          <p className="text-sm font-medium md:text-base">
                            {member.name}
                          </p>
                        </div>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-94" align="start">
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {member.bio}
                        </p>
                        <div className="mt-4 flex justify-end gap-3">
                          <a href={member.twitter} aria-label="Twitter">
                            <FaXTwitter className="size-4" />
                          </a>
                          <a href={member.github} aria-label="GitHub">
                            <FaGithub className="size-4" />
                          </a>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  </div>

                  {/* Mobile: Normal Card */}
                  <div className="space-y-2 md:hidden">
                    <div className="flex items-center gap-3">
                      <img
                        src={member.image}
                        alt={member.name}
                        width={24}
                        height={24}
                        className="rounded-full"
                      />
                      <p className="text-sm font-medium">{member.name}</p>
                    </div>
                    <Card className="gap-2">
                      <CardContent className="text-muted-foreground text-sm leading-relaxed">
                        {member.bio}
                      </CardContent>
                      <CardFooter className="flex justify-end gap-3">
                        <a href={member.twitter} aria-label="Twitter">
                          <FaXTwitter className="size-4" />
                        </a>
                        <a href={member.github} aria-label="GitHub">
                          <FaGithub className="size-4" />
                        </a>
                      </CardFooter>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Handshake, HeartHandshake } from 'lucide-react';

import { Meteors } from '@/components/magicui/meteors';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const investors = [
  {
    name: 'Cooper Torff',
    role: 'CEO',
    company: 'Snap',
  },
  {
    name: 'Tatiana Bator',
    role: 'CTO',
    company: 'CodeLab',
  },
  {
    name: 'Desirae Donin',
    role: 'CEO',
    company: 'ArtBox',
  },
  {
    name: 'Allison Dorwart',
    role: 'Chairman',
    company: 'Craft',
  },
  {
    name: 'Desirae Aminoff',
    role: 'Founding Engineer',
    company: 'MindSpark',
  },
  {
    name: 'Madelyn Workman',
    role: 'Founding Engineer',
    company: 'Drawit',
  },
  {
    name: 'Emerson Septimus',
    role: 'Founder',
    company: 'BankTech',
  },
  {
    name: 'Erin Septimus',
    role: 'CEO',
    company: 'Visionary',
  },
  {
    name: 'Jaydon Workman',
    role: 'Growth Engineer',
    company: 'BuildUp',
  },
  {
    name: 'Giana Philips',
    role: 'Systems Architect',
    company: 'TechNest',
  },
];

const contributors = [
  {
    username: 'torvalds',
    commits: 400,
    avatar: 'https://avatars.githubusercontent.com/u/1024025?v=4',
    url: 'https://github.com/torvalds',
  },
  {
    username: 'gaearon',
    commits: 379,
    avatar: 'https://avatars.githubusercontent.com/u/810438?v=4',
    url: 'https://github.com/gaearon',
  },
  {
    username: 'sindresorhus',
    commits: 290,
    avatar: 'https://avatars.githubusercontent.com/u/170270?v=4',
    url: 'https://github.com/sindresorhus',
  },
  {
    username: 'customfieldcomponents',
    commits: 187,
    avatar: 'https://avatars.githubusercontent.com/u/583231?v=4',
    url: '#',
    isLink: true,
    linkText: 'Custom field components',
    linkUrl: '#',
  },
  {
    username: 'tj',
    commits: 150,
    avatar: 'https://avatars.githubusercontent.com/u/25254?v=4',
    url: 'https://github.com/tj',
  },
  {
    username: 'addyosmani',
    commits: 140,
    avatar: 'https://avatars.githubusercontent.com/u/110953?v=4',
    url: 'https://github.com/addyosmani',
  },
  {
    username: 'kentcdodds',
    commits: 135,
    avatar: 'https://avatars.githubusercontent.com/u/1500684?v=4',
    url: 'https://github.com/kentcdodds',
  },
  {
    username: 'wesbos',
    commits: 128,
    avatar: 'https://avatars.githubusercontent.com/u/176013?v=4',
    url: 'https://github.com/wesbos',
  },
  {
    username: 'codefirstschemasync',
    commits: 120,
    avatar: 'https://avatars.githubusercontent.com/u/4060187?v=4',
    url: '#',
    isLink: true,
    linkText: 'Code-first schema sync',
    linkUrl: '#',
  },
  {
    username: 'bradtraversy',
    commits: 115,
    avatar: 'https://avatars.githubusercontent.com/u/5550850?v=4',
    url: 'https://github.com/bradtraversy',
  },
  {
    username: 'githubintegration',
    commits: 110,
    avatar: 'https://avatars.githubusercontent.com/u/9919?v=4',
    url: '#',
    isLink: true,
    linkText: 'GitHub integration',
    linkUrl: '#',
  },
  {
    username: 'getify',
    commits: 105,
    avatar: 'https://avatars.githubusercontent.com/u/150330?v=4',
    url: 'https://github.com/getify',
  },
  {
    username: 'yyx990803',
    commits: 98,
    avatar: 'https://avatars.githubusercontent.com/u/499550?v=4',
    url: 'https://github.com/yyx990803',
  },
  {
    username: 'sebmarkbage',
    commits: 92,
    avatar: 'https://avatars.githubusercontent.com/u/63648?v=4',
    url: 'https://github.com/sebmarkbage',
  },
  {
    username: 'paulirish',
    commits: 87,
    avatar: 'https://avatars.githubusercontent.com/u/39191?v=4',
    url: 'https://github.com/paulirish',
  },
  {
    username: 'developit',
    commits: 82,
    avatar: 'https://avatars.githubusercontent.com/u/105127?v=4',
    url: 'https://github.com/developit',
  },
  {
    username: 'rauchg',
    commits: 78,
    avatar: 'https://avatars.githubusercontent.com/u/13041?v=4',
    url: 'https://github.com/rauchg',
  },
  {
    username: 'timneutkens',
    commits: 73,
    avatar: 'https://avatars.githubusercontent.com/u/6324199?v=4',
    url: 'https://github.com/timneutkens',
  },
  {
    username: 'mjackson',
    commits: 68,
    avatar: 'https://avatars.githubusercontent.com/u/92839?v=4',
    url: 'https://github.com/mjackson',
  },
  {
    username: 'ryanflorence',
    commits: 62,
    avatar: 'https://avatars.githubusercontent.com/u/100200?v=4',
    url: 'https://github.com/ryanflorence',
  },
];

export function AboutInvestorsContributors() {
  return (
    <>
      {/* Investors Section */}
      <section className="container">
        <div className="bordered-div-padding relative border border-t-0">
          <div className="absolute top-0 right-full -mt-0.25 hidden h-[calc(100%+2px)] w-[50vw] overflow-hidden border-y md:block">
            <Meteors
              number={1000}
              angle={65}
              maxDuration={20}
              minDuration={5}
              className="opacity-10 [&>div]:opacity-10"
            />
          </div>
          <div className="space-y-6 md:space-y-8 lg:space-y-10">
            <h2 className="text-muted-foreground flex items-center gap-2 text-sm leading-snug font-medium md:text-base">
              <Handshake className="size-5" />
              Investors
            </h2>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-8 lg:grid-cols-5">
              {investors.map((investor) => (
                <div
                  key={investor.name}
                  className="space-y-1 text-sm md:text-base"
                >
                  <h3 className="font-medium">{investor.name}</h3>
                  <p className="text-muted-foreground">
                    {investor.role}, {investor.company}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contributors Section */}
      <section className="container">
        <div className="bordered-div-padding border border-t-0">
          <div className="space-y-6 md:space-y-8 lg:space-y-10">
            <h2 className="text-muted-foreground flex items-center gap-2 text-sm leading-snug font-medium md:text-base">
              <HeartHandshake className="size-5" />
              Contributors
            </h2>

            <div className="grid grid-cols-2 gap-6 mask-b-from-60% mask-b-to-100% md:grid-cols-3 md:gap-8 md:mask-b-to-95% lg:grid-cols-5">
              {contributors.map((contributor) => (
                <a
                  key={contributor.username}
                  href={contributor.url}
                  className="group flex flex-col gap-1"
                  target="_blank"
                >
                  <Avatar className="size-6 md:size-8">
                    <AvatarImage
                      src={contributor.avatar}
                      alt={contributor.username}
                    />
                    <AvatarFallback>
                      {contributor.username.slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-muted-foreground text-sm md:text-base">
                    {contributor.isLink ? (
                      <p className="text-secondary font-medium">
                        {contributor.linkText}
                      </p>
                    ) : (
                      <p className="">{contributor.commits} commits</p>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

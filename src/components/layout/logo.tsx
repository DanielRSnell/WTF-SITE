import { cn } from '@/lib/utils';

interface LogoProps {
  iconClassName?: string;
  wordmarkClassName?: string;
  className?: string;
  href?: string;
}

export default function Logo({
  iconClassName,
  wordmarkClassName,
  className,
  href = '/',
}: LogoProps) {
  return (
    <a href={href} className={cn('flex items-center gap-2.5', className)}>
      <img
        src="/layout/logo-icon.svg"
        alt="WooThatsFast Logo"
        width={22}
        height={24}
        className={cn('object-contain', iconClassName)}
      />
      {/* Replace SVG with text - match the exact original size */}
      <div 
        className={cn(
          'font-weight-display select-none flex items-center justify-center text-center',
          // For large footer logo (when md:h-32 exists)
          wordmarkClassName?.includes('md:h-32') 
            ? cn(
                // Keep all classes except height, replace with text size
                wordmarkClassName
                  ?.replace(/md:h-\d+/g, 'md:text-[8rem]')
                  ?.replace(/lg:h-\d+/g, 'lg:text-[12rem]')
                  ?.replace(/invert(-0)?/g, ''),
                'text-[4rem] leading-[0.8] text-current'
              )
            : cn(wordmarkClassName, 'text-sm text-current')
        )}
      >
        {/* Show "WooThatsFast" in large footer logo, "WooThatsFast" elsewhere */}
        WooThatsFast
      </div>
    </a>
  );
}

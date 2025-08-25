import { Button } from '@/components/ui/button';

export function ProductCta() {
  return (
    <section className="container">
      <div className="bordered-div-padding border border-t-0 text-center lg:!py-25">
        <div className="mx-auto max-w-2xl space-y-6 md:space-y-8 lg:space-y-12">
          <h2 className="lg:text-4xxl font-weight-display text-xl leading-snug tracking-tighter md:text-3xl">
            Start building with code-first models
          </h2>

          <Button asChild className="md:px-10">
            <a href="#">Read the Docs</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

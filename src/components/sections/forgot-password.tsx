'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import Logo from '@/components/layout/logo';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),
});

type FormData = z.infer<typeof formSchema>;

export function ForgotPasswordPage() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  function onSubmit(values: FormData) {
    // Handle forgot password submission logic here
    console.log(values);
  }

  return (
    <section className="container">
      <div className="border-x border-b p-12 md:p-20" />

      <div className="bordered-div-padding border-x">
        <div className="mx-auto max-w-3xl space-y-10">
          <div className="space-y-6">
            <Logo />
            <div className="space-y-2">
              <h1 className="font-weight-display tracking-tighter md:text-xl">
                Reset your password
              </h1>
              <p className="text-muted-foreground text-sm">
                Enter your email address and we&apos;ll send you a link to reset
                your password.
              </p>
            </div>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="mt-10 space-y-6"
            >
              {/* Email Input */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="nick@site.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Reset Password Button */}
              <Button type="submit" className="w-full rounded-sm">
                Send reset link
              </Button>
            </form>
          </Form>

          {/* Back to Login Link */}
          <div className="text-center text-sm font-medium">
            Remember your password?{' '}
            <a href="/login" className="text-secondary hover:underline">
              Back to login
            </a>
          </div>
        </div>
      </div>
      <div className="border-x border-t p-12 md:p-20" />
    </section>
  );
}

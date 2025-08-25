'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { z } from 'zod';

import Logo from '@/components/layout/logo';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const formSchema = z.object({
  fullName: z
    .string()
    .min(1, 'Full name is required')
    .min(2, 'Full name must be at least 2 characters'),
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must be at least 8 characters'),
  rememberMe: z.boolean(),
});

type FormData = z.infer<typeof formSchema>;

export function SignUpSection() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  function onSubmit(values: FormData) {
    // Handle signup submission logic here
    console.log(values);
  }

  return (
    <section className="container">
      <div className="border-x border-b p-12 md:p-20" />

      <div className="bordered-div-padding border-x">
        <div className="mx-auto max-w-3xl space-y-10">
          <div className="space-y-6">
            <Logo />
            <h1 className="font-weight-display tracking-tighter md:text-xl">
              Start Your WooCommerce Optimization Journey
            </h1>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Create your account to access our client portal, performance dashboards, and expert WooCommerce optimization services.
            </p>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="mt-10 space-y-6"
            >
              {/* Full Name Input */}
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input type="text" placeholder="Store Owner Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email Input */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="owner@yourstore.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Password Input */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="••••••••"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Remember Me */}
              <div className="flex items-center">
                <FormField
                  control={form.control}
                  name="rememberMe"
                  render={({ field }) => (
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="remember"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                      <Label htmlFor="remember">Remember me</Label>
                    </div>
                  )}
                />
              </div>

              {/* Sign Up Button */}
              <Button type="submit" className="w-full rounded-sm">
                Create WooCommerce Account
              </Button>
            </form>
          </Form>

          {/* Social Logins */}
          <div className="flex flex-wrap gap-5">
            <Button
              variant="outline"
              className="flex-1 rounded-sm"
              type="button"
            >
              <FaGithub className="size-5" />
              Continue with GitHub
            </Button>
            <Button
              variant="outline"
              className="flex-1 rounded-sm"
              type="button"
            >
              <FcGoogle className="size-5" />
              Continue with Google
            </Button>
          </div>

          {/* Login Link */}
          <div className="text-center text-sm font-medium">
            Already optimizing with us?{' '}
            <a href="/login" className="text-secondary hover:underline">
              Access Dashboard
            </a>
          </div>
          
          {/* Information Note */}
          <div className="rounded-lg bg-muted/30 p-4 text-center">
            <p className="text-muted-foreground text-sm leading-relaxed">
              By creating an account, you gain access to performance monitoring, optimization reports, 
              and direct communication with our WooCommerce experts. All plans include a free performance analysis.
            </p>
          </div>
        </div>
      </div>
      <div className="border-x border-t p-12 md:p-20" />
    </section>
  );
}

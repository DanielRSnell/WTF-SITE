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

export function LoginSection() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  function onSubmit(values: FormData) {
    // Handle login submission logic here
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
              Access Your WooCommerce Dashboard
            </h1>
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
                        placeholder="your-email@store.com"
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

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
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
                <a
                  href="/forgot-password"
                  className="text-secondary text-sm font-medium hover:underline"
                >
                  Forgot password?
                </a>
              </div>

              {/* Login Button */}
              <Button type="submit" className="w-full rounded-sm">
                Log in
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

          {/* Sign Up Link */}
          <div className="text-center text-sm font-medium">
            New to WooThatsFast?{' '}
            <a href="/signup" className="text-secondary hover:underline">
              Create Account
            </a>
          </div>
          
          {/* Support Link */}
          <div className="text-center">
            <p className="text-muted-foreground text-sm">
              Need help accessing your account?{' '}
              <a href="/contact" className="text-secondary hover:underline">
                Contact Support
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="border-x border-t p-12 md:p-20" />
    </section>
  );
}

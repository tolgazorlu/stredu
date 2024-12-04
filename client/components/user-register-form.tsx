"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

type UserRegisterFormProps = React.HTMLAttributes<HTMLDivElement>;

export function UserRegisterForm({
  className,
  ...props
}: UserRegisterFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className='grid gap-2'>
          <div className='grid gap-2'>
            <Label htmlFor='email'>Email</Label>
            <Input
              id='email'
              placeholder='name@example.com'
              type='email'
              name='email'
              autoCapitalize='none'
              autoComplete='email'
              autoCorrect='off'
              disabled={isLoading}
            />
            <Label htmlFor='email'>Password</Label>
            <Input
              id='password'
              placeholder='********'
              type='password'
              name='password'
              autoCapitalize='none'
              autoComplete='password-repeat'
              autoCorrect='off'
              disabled={isLoading}
            />
            <Label htmlFor='email'>Password Repeat</Label>
            <Input
              id='password-repeat'
              placeholder='********'
              type='password'
              name='password-repeat'
              autoCapitalize='none'
              autoComplete='password-repeat'
              autoCorrect='off'
              disabled={isLoading}
            />
          </div>
          <Button disabled={isLoading} variant={"gradient"}>
            {isLoading && (
              <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
            )}
            Create Account
          </Button>
          <Link
            className='text-center text-xs text-purple-500 hover:text-purple-700'
            href={"/auth/signin"}
          >
            I already have an account.
          </Link>
        </div>
      </form>
    </div>
  );
}

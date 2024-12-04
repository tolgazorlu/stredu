import { Metadata } from "next";
import React from "react";
import { ShapesIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function AuthenticationPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0'>
      <div className='relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex'>
        <div className='absolute inset-0 bg-gradient-to-br from-teal-500 to-green-500' />
        <div className='relative z-20 flex items-center text-2xl font-medium gap-2'>
          <ShapesIcon width={32} height={32} />
          stredu
        </div>
        <div className='relative z-20 mt-auto'>
          <blockquote className='space-y-2'>
            <p className='text-lg'>Stream platform for education.</p>
            <footer className='text-sm'>Tolga Zorlu</footer>
          </blockquote>
        </div>
      </div>
      {children}
    </div>
  );
}

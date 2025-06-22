'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Stethoscope, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

const navigationItems = [
  { name: 'トップページ', href: '/' },
  { name: '診療案内', href: '/medical-services' },
  { name: '診療時間', href: '/schedule' },
  { name: '検査・検診', href: '/examination' },
  { name: '予防接種', href: '/vaccination' },
  { name: 'アクセス・リンク', href: '/access' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between px-4 mx-auto">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/icon.png" alt="洋向台クリニック" width={40} height={40} unoptimized />
          <span className="text-xl font-bold text-gray-900">水の音クリニック（試作）</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-blue-600",
                pathname === item.href
                  ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                  : "text-gray-700"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4 border border-gray-600 rounded px-4 py-2">
          <div className="flex items-center space-x-2 text-gray-600">
            <Phone className="h-4 w-4" />
            <span>123-456-5678</span>
          </div>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col space-y-4 mt-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-blue-600 py-2",
                    pathname === item.href ? "text-blue-600" : "text-gray-700"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t">
                <div className="flex items-center space-x-2 text-gray-600 mb-4">
                  <Phone className="h-4 w-4" />
                  <span>123-456-5678</span>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  WEB予約
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
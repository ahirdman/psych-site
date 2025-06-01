'use client';

import type React from 'react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BookButton } from './book-button';

const navItems = [
  { name: 'Hem', href: '#home' },
  { name: 'Psykoterapi', href: '#about' },
  { name: 'Metoder', href: '#methods' },
  { name: 'Handledning', href: '#supervision' },
  { name: 'Parterapi', href: '#couple-therapy' },
  { name: 'Kontakt', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href?.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled
          ? 'bg-background/95 shadow-md backdrop-blur-sm'
          : 'bg-transparent',
      )}
    >
      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold">
            <Link
              href="#home"
              onClick={handleNavClick}
              aria-label="Till startsidan"
            >
              Tomas Thiel Hultcrantz
            </Link>
          </div>

          <nav
            className="hidden lg:flex space-x-6 md:items-center"
            aria-label="Huvudnavigering"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={handleNavClick}
                className="text-foreground/80 hover:text-foreground transition-colors hover:underline"
              >
                {item.name}
              </Link>
            ))}

            <BookButton />
          </nav>

          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Stäng meny' : 'Öppna meny'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <nav
            id="mobile-menu"
            className="lg:hidden absolute top-full left-0 right-0 bg-background shadow-md py-4 px-4"
            aria-label="Mobilnavigering"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={handleNavClick}
                  className="text-foreground/80 hover:text-foreground transition-colors py-2"
                >
                  {item.name}
                </Link>
              ))}

              <BookButton />
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

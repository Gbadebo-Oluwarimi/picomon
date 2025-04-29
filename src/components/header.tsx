"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="py-6">
      <nav className="flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tight text-white">
          Picomon<span className="text-green-500">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/features"
            className="text-sm text-white/80 hover:text-white transition-colors"
          >
            Features
          </Link>
          <Link
            href="/docs"
            className="text-sm text-white/80 hover:text-white transition-colors"
          >
            Docs
          </Link>
          <Link
            href="/pricing"
            className="text-sm text-white/80 hover:text-white transition-colors"
          >
            Pricing
          </Link>

          <Button
            asChild
            size="sm"
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10 hover:text-white"
          >
            <Link href="/login">Log In</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle Menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:bg-white/10"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden fixed inset-0 z-50 bg-black/95 backdrop-blur-sm transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full py-16 px-8 space-y-8">
          <Link
            href="/features"
            className="text-lg font-medium text-white/80 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </Link>
          <Link
            href="/docs"
            className="text-lg font-medium text-white/80 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Docs
          </Link>
          <Link
            href="/pricing"
            className="text-lg font-medium text-white/80 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Pricing
          </Link>

          <div className="space-y-4">
            <p className="text-lg font-medium text-white">Company</p>
            <div className="flex flex-col pl-4 space-y-4">
              <Link
                href="/about"
                className="text-base text-white/80 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/team"
                className="text-base text-white/80 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Team
              </Link>
              <Link
                href="/careers"
                className="text-base text-white/80 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Careers
              </Link>
              <Link
                href="/contact"
                className="text-base text-white/80 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="pt-4">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full border-white/20 text-white hover:bg-white/10"
            >
              <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                Log In
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

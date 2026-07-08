import Link from "next/link";

const footerNav = {
  explore: [
    { href: "/destinations", label: "Destinations" },
    { href: "/services", label: "Services" },
    { href: "/featured-journey", label: "Featured Journey" },
    { href: "/journal", label: "Journal" },
  ],
  company: [
    { href: "/about", label: "About" },
    { href: "/reviews", label: "Reviews" },
    { href: "/contact", label: "Contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy text-white/70">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/">
              <span className="font-display text-2xl font-light tracking-wide text-white">
                Vela <span className="text-gold">&</span> Co.
              </span>
            </Link>
            <p className="mt-4 max-w-xs font-body text-sm leading-relaxed">
              Bespoke luxury travel experiences crafted by seasoned advisors.
              Every journey, a masterpiece.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-body text-xs uppercase tracking-[0.2em] text-gold">
              Explore
            </h4>
            <ul className="mt-4 space-y-3">
              {footerNav.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-body text-xs uppercase tracking-[0.2em] text-gold">
              Company
            </h4>
            <ul className="mt-4 space-y-3">
              {footerNav.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-xs uppercase tracking-[0.2em] text-gold">
              Contact
            </h4>
            <div className="mt-4 space-y-3 font-body text-sm">
              <p>hello@velaandco.com</p>
              <p>+44 (0) 20 7946 0123</p>
              <p>
                14 Albemarle Street
                <br />
                Mayfair, London W1S 4HJ
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row lg:px-12">
          <p className="font-body text-xs text-white/40">
            &copy; {new Date().getFullYear()} Vela & Co. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Instagram", "Pinterest", "LinkedIn"].map((social) => (
              <a
                key={social}
                href="#"
                className="font-body text-xs uppercase tracking-[0.1em] text-white/40 transition-colors hover:text-gold"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

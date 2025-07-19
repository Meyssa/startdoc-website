import { Code2, Zap, Mail, MapPin, Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const quickLinks = [
    { href: "#call-for-posters", label: "Call for Posters" },
    { href: "#programme", label: "Programme" },
    { href: "#speakers", label: "Featured Speakers" },
    { href: "#about", label: "About" },
  ];

  const contactInfo = [
    { icon: Mail, text: "startdoc@example.com", href: "mailto:startdoc@example.com" },
    { icon: MapPin, text: "Algeria", href: "#" },
    { icon: Calendar, text: "Winter 2025", href: "#" },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10 bg-gradient-accent rounded-xl flex items-center justify-center shadow-sm">
                <Code2 className="w-6 h-6 text-white" />
                <Zap className="w-3 h-3 text-white/80 absolute -top-0.5 -right-0.5" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold">Start'Doc</h3>
                <p className="text-sm text-secondary-foreground/80">École d'Hiver pour la Recherche</p>
              </div>
            </div>
            <p className="text-sm text-secondary-foreground/80">
              Supporting the next generation of researchers in Algeria through community, mentorship, and knowledge sharing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <item.icon className="w-4 h-4 text-primary" />
                  <a
                    href={item.href}
                    className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Register CTA */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Join Us</h4>
            <p className="text-sm text-secondary-foreground/80 mb-4">
              Don't miss this opportunity to connect with Algeria's research community.
            </p>
            <Button
              variant="outline"
              size="sm"
              className="bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              asChild
            >
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSe1Gh8o9la9uLzglLrPPKePHHj4xaNJKrTZLFwIIMRqurzCDQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <span>Register Now</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20 mt-12 pt-6 text-center">
          <p className="text-sm text-secondary-foreground/60">
            © 2025 Start'Doc. All rights reserved. | Empowering research in Algeria.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
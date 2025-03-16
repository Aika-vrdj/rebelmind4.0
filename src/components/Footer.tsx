
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-card mt-16 py-8 px-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} The Enneagram Hub. All rights reserved.
        </div>
        <div className="space-x-6">
          <Link 
            href="https://example.com/about" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            About Us
          </Link>
          <Link 
            href="https://example.com/contact" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}

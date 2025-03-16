
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-card mt-16 py-8 px-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} The Rebel Mind Hub. Aika Ioka. All rights reserved.
        </div>
        <div className="space-x-6">
          <Link 
            href="https://aikavrdj.com" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Learn more at AikaVRDJ.com
          </Link>
          <Link 
            href="https://aikavrdj.com/products/beat-the-system" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Beat the System Book
          </Link>
        </div>
      </div>
    </footer>
  );
}

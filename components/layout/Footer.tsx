import { personal } from "@/lib/constants/personal";

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-12 mt-auto">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {personal.name}. All rights reserved.
        </div>
        <div className="flex items-center space-x-6">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            GitHub
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

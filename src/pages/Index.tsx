import Hero from "@/components/Hero";

const Index = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Your Name',
    url: '/',
    sameAs: [],
    description: '3D interactive portfolio built with React and Three.js',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <header className="border-b border-border/60">
        <nav className="container flex items-center justify-between py-4">
          <a href="#top" className="font-semibold">YN</a>
          <div className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#projects" className="story-link">Projects</a>
            <a href="#contact" className="story-link">Contact</a>
          </div>
        </nav>
      </header>

      <main id="top">
        <Hero />

        <section id="projects" className="container py-16 md:py-24">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">Selected Projects</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <article key={i} className="hover-scale rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-elegant)]">
                <h3 className="font-medium mb-2">Project {i}</h3>
                <p className="text-sm text-muted-foreground mb-4">A brief description highlighting results and technologies used.</p>
                <a href="#" className="story-link text-sm">View case study</a>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="container pb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Let’s build something great</h2>
          <p className="text-muted-foreground max-w-prose mb-6">Want a modern site with delightful 3D and motion? I’d love to hear about your project.</p>
          <a href="mailto:hello@example.com" className="story-link">hello@example.com</a>
        </section>
      </main>

      <footer className="border-t border-border/60">
        <div className="container py-6 text-sm text-muted-foreground">© {new Date().getFullYear()} Your Name</div>
      </footer>
    </>
  );
};

export default Index;

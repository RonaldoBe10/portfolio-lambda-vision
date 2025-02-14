
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-accent/30 via-background to-background">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-8 fade-in border border-primary/20">
          Logística & Engenharia de Produção
        </span>
        <h1 className="text-5xl md:text-7xl font-bold text-secondary mb-8 fade-in leading-tight">
          Transformando Ideias em{" "}
          <span className="text-primary relative">
            Resultados
            <span className="absolute bottom-2 left-0 w-full h-2 bg-primary/20 -z-10 transform -rotate-1"></span>
          </span>
        </h1>
        <p className="text-lg md:text-xl text-secondary/80 max-w-2xl mx-auto mb-12 fade-in">
          Soluções inovadoras em logística e engenharia de produção para otimizar
          seus processos e maximizar resultados com eficiência e precisão.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in">
          <a
            href="#contact"
            className="inline-flex items-center bg-primary text-white px-8 py-3.5 rounded-full font-medium hover:bg-primary/90 transition-colors"
          >
            Vamos Conversar
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <a
            href="#about"
            className="inline-flex items-center px-8 py-3.5 rounded-full font-medium text-secondary hover:text-primary transition-colors border border-secondary/20 hover:border-primary"
          >
            Saiba Mais
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

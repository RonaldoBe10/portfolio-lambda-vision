
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6 fade-in">
          Logística & Engenharia de Produção
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6 fade-in">
          Transformando Ideias em{" "}
          <span className="text-primary">Resultados</span>
        </h1>
        <p className="text-lg md:text-xl text-secondary/80 max-w-2xl mx-auto mb-8 fade-in">
          Soluções inovadoras em logística e engenharia de produção para otimizar
          seus processos e maximizar resultados.
        </p>
        <a
          href="#contact"
          className="inline-block bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors fade-in"
        >
          Vamos Conversar
        </a>
      </div>
    </section>
  );
};

export default Hero;

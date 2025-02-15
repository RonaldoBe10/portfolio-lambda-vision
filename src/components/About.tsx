
const About = () => {
  const skills = [
    "Gestão de Projetos",
    "Otimização de Processos",
    "Lean Manufacturing",
    "Supply Chain",
    "Gestão de Qualidade",
    "Análise de Dados",
    "Planejamento Estratégico",
    "Indústria 4.0",
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-accent/5 via-background to-background">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 border border-primary/20">
            Sobre Mim
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-secondary dark:text-white mb-6 leading-tight">
            Experiência e Dedicação em{" "}
            <span className="text-primary">Cada Projeto</span>
          </h2>
          <p className="text-lg text-secondary/80 dark:text-white/80">
            Com mais de uma década de experiência em logística e engenharia de
            produção, trago soluções inovadoras e eficientes para os desafios mais
            complexos do setor industrial e logístico.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-white/30">
            <h3 className="text-2xl font-semibold text-secondary dark:text-white mb-4">
              Formação e Experiência
            </h3>
            <p className="text-secondary/80 dark:text-white/80 mb-6 text-lg">
              Engenheiro de Produção formado, com especialização em Gestão de
              Projetos e Logística. Experiência em empresas de grande porte e
              projetos internacionais, sempre buscando a excelência operacional.
            </p>
            <a
              href="/about/experience"
              className="text-primary hover:text-primary/80 font-medium inline-flex items-center group"
            >
              Saiba mais
              <svg
                className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>

          <div className="glass rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-white/30">
            <h3 className="text-2xl font-semibold text-secondary dark:text-white mb-6">
              Habilidades
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors cursor-default border border-primary/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

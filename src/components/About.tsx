
const About = () => {
  const skills = [
    "Gestão de Projetos",
    "Otimização de Processos",
    "Lean Manufacturing",
    "Supply Chain",
    "Gestão de Qualidade",
    "Análise de Dados",
  ];

  return (
    <section id="about" className="section-padding bg-accent/5">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Sobre Mim
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
            Experiência e Dedicação em Cada Projeto
          </h2>
          <p className="text-secondary/80">
            Com mais de uma década de experiência em logística e engenharia de
            produção, trago soluções inovadoras e eficientes para os desafios mais
            complexos do setor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-secondary mb-4">
              Formação e Experiência
            </h3>
            <p className="text-secondary/80 mb-6">
              Engenheiro de Produção formado, com especialização em Gestão de
              Projetos e Logística. Experiência em empresas de grande porte e
              projetos internacionais.
            </p>
            <a
              href="#contact"
              className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
            >
              Saiba mais
              <svg
                className="w-4 h-4 ml-2"
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

          <div className="glass rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-secondary mb-4">
              Habilidades
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
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

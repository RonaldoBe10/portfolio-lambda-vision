
const Footer = () => {
  return (
    <footer className="bg-secondary py-12 text-white/90">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">
              LP<span className="text-white">.</span>
            </h3>
            <p className="text-white/70 mb-4">
              Soluções inovadoras em logística e engenharia de produção para
              otimizar seus processos e maximizar resultados.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-white/70 hover:text-primary transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#projects" className="text-white/70 hover:text-primary transition-colors">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-primary transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-white/70">
              <li>Email: contato@lp.com</li>
              <li>Telefone: (11) 99999-9999</li>
              <li>São Paulo, SP</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-6 text-center text-white/50">
          <p>© 2024 LP. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

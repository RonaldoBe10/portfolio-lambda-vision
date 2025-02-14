
import { useParams, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Project = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Simulated project data - in a real app, this would come from an API
  const project = {
    id: Number(id),
    title: "Otimização de Supply Chain",
    description: "Implementação de sistema integrado de gestão de suprimentos que resultou em uma redução de 30% nos custos operacionais.",
    image: "/placeholder.svg",
    category: "Logística",
    fullDescription: `
      Este projeto envolveu a completa reestruturação do sistema de gestão de suprimentos,
      implementando tecnologias modernas e processos otimizados. Os resultados incluíram:
      
      • Redução de 30% nos custos operacionais
      • Aumento de 45% na eficiência logística
      • Implementação de sistema de rastreamento em tempo real
      • Melhor previsão de demanda usando IA
    `,
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <button
            onClick={() => navigate(-1)}
            className="mb-8 text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Voltar
          </button>

          <div className="glass rounded-2xl overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 md:h-96 object-cover"
            />
            
            <div className="p-8">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                {project.category}
              </span>
              
              <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                {project.title}
              </h1>
              
              <div className="prose prose-lg max-w-none text-secondary/80">
                <p className="whitespace-pre-line">{project.fullDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Project;


import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Otimização de Supply Chain",
    description: "Implementação de sistema integrado de gestão de suprimentos.",
    image: "/placeholder.svg",
    category: "Logística",
  },
  {
    id: 2,
    title: "Lean Manufacturing",
    description: "Redução de 40% no tempo de produção através de técnicas lean.",
    image: "/placeholder.svg",
    category: "Produção",
  },
  {
    id: 3,
    title: "Automação Industrial",
    description: "Projeto de automação de linha de montagem com IoT.",
    image: "/placeholder.svg",
    category: "Indústria 4.0",
  },
];

const Projects = () => {
  const navigate = useNavigate();

  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-background via-accent/5 to-background">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 border border-primary/20">
            Projetos
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-6 leading-tight">
            Casos de <span className="text-primary">Sucesso</span>
          </h2>
          <p className="text-lg text-secondary/80">
            Conheça alguns dos projetos que desenvolvemos e os resultados alcançados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-white/30 backdrop-blur-sm bg-white/60"
              onClick={() => navigate(`/project/${project.id}`)}
            >
              <CardHeader className="p-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-lg group-hover:opacity-90 transition-opacity"
                />
              </CardHeader>
              <CardContent className="p-6">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold text-secondary mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-secondary/80">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

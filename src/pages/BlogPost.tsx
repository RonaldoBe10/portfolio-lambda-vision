
import { useParams, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Simulação de dados do blog - em uma aplicação real, viria de uma API
  const post = {
    id: Number(id),
    title: "Tendências em Logística para 2024",
    content: `A logística está em constante evolução, e 2024 promete ser um ano de grandes transformações.
    
    Principais tendências:
    
    • Automação de processos com IA
    • Sustentabilidade na cadeia de suprimentos
    • Internet das Coisas (IoT) em armazéns
    • Last-mile delivery com drones
    • Blockchain para rastreabilidade
    
    Estas inovações estão revolucionando a forma como gerenciamos operações logísticas, 
    proporcionando maior eficiência, redução de custos e melhor experiência para o cliente final.
    
    A implementação dessas tecnologias requer planejamento cuidadoso e investimento em 
    infraestrutura e capacitação de equipes. No entanto, os benefícios a longo prazo 
    são significativos para empresas que desejam manter-se competitivas no mercado global.`,
    date: "2024-03-15",
    image: "/placeholder.svg",
    author: "Lucas Pereira",
    category: "Logística",
  };

  return (
    <div className="min-h-screen dark:bg-gray-900">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <button
              onClick={() => navigate(-1)}
              className="mb-8 text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-2 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Voltar
            </button>

            <article className="glass rounded-2xl overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover"
              />
              
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  <time className="text-sm text-secondary/60 dark:text-white/60">
                    {new Date(post.date).toLocaleDateString('pt-BR')}
                  </time>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold text-secondary dark:text-white mb-4">
                  {post.title}
                </h1>
                
                <div className="flex items-center gap-2 mb-8">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-semibold">
                      {post.author[0]}
                    </span>
                  </div>
                  <span className="text-secondary/80 dark:text-white/80">
                    {post.author}
                  </span>
                </div>
                
                <div className="prose prose-lg max-w-none dark:prose-invert">
                  <p className="whitespace-pre-line text-secondary/80 dark:text-white/80">
                    {post.content}
                  </p>
                </div>
              </div>
            </article>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;

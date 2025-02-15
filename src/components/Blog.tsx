
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

type Post = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
};

const posts: Post[] = [
  {
    id: 1,
    title: "Tendências em Logística para 2024",
    excerpt: "Descubra as principais tendências que estão moldando o futuro da logística e cadeia de suprimentos.",
    date: "2024-03-15",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Inovação na Indústria 4.0",
    excerpt: "Como a quarta revolução industrial está transformando os processos produtivos.",
    date: "2024-03-10",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Sustentabilidade na Produção",
    excerpt: "Práticas sustentáveis que estão revolucionando a engenharia de produção.",
    date: "2024-03-05",
    image: "/placeholder.svg",
  },
];

const Blog = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-accent/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 border border-primary/20">
            Blog
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-secondary dark:text-white mb-6 leading-tight">
            Últimas <span className="text-primary">Publicações</span>
          </h2>
          <p className="text-lg text-secondary/80 dark:text-white/80">
            Fique por dentro das últimas novidades e tendências do setor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <time className="text-sm text-primary mb-2 block">
                    {new Date(post.date).toLocaleDateString('pt-BR')}
                  </time>
                  <h3 className="text-xl font-bold text-secondary dark:text-white mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-secondary/80 dark:text-white/80 mb-4">
                    {post.excerpt}
                  </p>
                  <a
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors gap-2"
                  >
                    Ler mais <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

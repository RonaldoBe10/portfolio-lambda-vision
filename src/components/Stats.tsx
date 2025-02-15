
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Stats = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("stats");
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight && !hasAnimated) {
          setHasAnimated(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasAnimated]);

  return (
    <section id="stats" className="py-20 bg-gradient-to-br from-background via-accent/5 to-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-primary mb-2"
            >
              10+
            </motion.h3>
            <p className="text-secondary/80 dark:text-white/80">Anos de Experiência</p>
          </div>
          
          <div className="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl font-bold text-primary mb-2"
            >
              50+
            </motion.h3>
            <p className="text-secondary/80 dark:text-white/80">Projetos Concluídos</p>
          </div>
          
          <div className="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-4xl font-bold text-primary mb-2"
            >
              100%
            </motion.h3>
            <p className="text-secondary/80 dark:text-white/80">Satisfação dos Clientes</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;

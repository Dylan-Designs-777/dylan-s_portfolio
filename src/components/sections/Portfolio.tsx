import React, { useState } from "react";
import { motion } from "framer-motion";
import Masonry from "react-masonry-css";
import { portfolioItems } from "../../data/portfolioData";

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(
    new Set(
      portfolioItems.map((item) =>
        item.category !== false ? item.category : "Empty"
      )
    )
  );

  const filteredItems = selectedCategory
    ? portfolioItems.filter((item) => item.category === selectedCategory)
    : portfolioItems;

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">
            My <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-gray-light max-w-2xl mx-auto font-poppins">
            A showcase of my creative work and design projects
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedCategory === null
                ? "bg-primary text-white"
                : "bg-gray-dark text-gray-light hover:bg-gray-700"
            }`}
            onClick={() => setSelectedCategory(null)}
          >
            All
          </button>

          {categories
            .filter((category) => category !== "Empty" && category) // Skip 'Empty' and falsy values
            .map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-white"
                    : "bg-gray-dark text-gray-light hover:bg-gray-700"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
        </motion.div>

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex w-auto -ml-4"
          columnClassName="pl-4 bg-clip-padding"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <div className="group relative overflow-hidden rounded-lg">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-xl font-bold font-montserrat text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-light font-poppins">
                    {item.category}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </Masonry>
      </div>
    </section>
  );
};

export default Portfolio;

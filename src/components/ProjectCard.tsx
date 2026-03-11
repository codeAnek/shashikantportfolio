import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  id: number;
  image: string;
  name: string;
  link: string;
  tech?: string; // Tech stack
  description?: string[]; // Array of bullet points
}

export const ProjectCard = (props: ProjectCardProps) => {
  const { image, name, link, tech, description } = props;

  return (
    <Link to={link} target="_blank" className="w-full">
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{
          scale: 1.02,
          boxShadow:
            'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
        }}
        transition={{ duration: 0.2 }}
        className="flex flex-col items-start max-w-full overflow-hidden rounded-xl bg-gray-900"
      >
        <img src={`${import.meta.env.BASE_URL}${image}`} alt={name} className="object-cover w-full h-60 md:h-64 lg:h-72" />
        <div className="flex flex-col justify-start p-4 text-gray-400 text-sm w-full">
          <h2 className="text-lg font-bold text-white mb-1">{name}</h2>
          {tech && <p className="text-teal-400 text-sm mb-2">{tech}</p>}
          {description && (
            <ul className="list-disc pl-5 space-y-1">
              {description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </motion.div>
    </Link>
  );
};
import { motion } from 'framer-motion';

interface CommonCardProps {
  id: number;
  image: string;
  name: string;
  position: string;
  startDate: string;
  endDate: string;
  duration: string;
  location: string;
  // Optional fields
  details?: string[]; // List of points/tasks
  description?: string; // A small paragraph description
  website?: string; // Company/Institute website
  role?: string; // Role type (Intern, Full-time, Part-time)
}

export const CommonCard = (props: CommonCardProps) => {
  const {
    image,
    name,
    position,
    startDate,
    endDate,
    duration,
    location,
    details,
    description,
    website,
    role,
  } = props;

  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{
        scale: 1.02,
        boxShadow:
          'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
      }}
      transition={{ duration: 0.2 }}
      className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6 w-full py-4 px-6 rounded-xl bg-gray-900"
    >
      
      <div className="w-20 h-20 flex-shrink-0">
        <img src={`${import.meta.env.BASE_URL}${image}`} alt={name} className="w-full h-full object-contain rounded-lg" />
      </div>

      
      <div className="flex-1 flex flex-col text-gray-400 text-sm">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-1 md:space-y-0">
          <h2 className="text-lg md:text-xl font-bold text-white">{position}</h2>
          {role && (
            <span className="text-teal-400 text-sm md:text-base font-medium">{role}</span>
          )}
        </div>

        <span className="text-gray-300 font-medium">
          {name} {location ? `• ${location}` : ''}
        </span>

        <span className="mt-1 text-gray-400 text-sm">
          {startDate} - {endDate} ~ {duration}
        </span>

       
        {website && (
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 text-sm mt-1 hover:underline"
          >
            {website}
          </a>
        )}

      
        {description && <p className="text-gray-400 text-sm mt-2">{description}</p>}

       
        {details && details.length > 0 && (
          <ul className="list-disc list-inside text-gray-400 text-sm mt-2 space-y-1">
            {details.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
};
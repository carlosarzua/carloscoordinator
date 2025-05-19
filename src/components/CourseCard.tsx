
import { Link } from "react-router-dom";

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  buttonText: string;
  link: string;
  external?: boolean;
}

export const CourseCard = ({
  title,
  description,
  image,
  buttonText,
  link,
  external = false,
}: CourseCardProps) => {
  const ButtonComponent = external ? (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-primary w-full text-center mt-4"
    >
      {buttonText}
    </a>
  ) : (
    <Link to={link} className="btn-primary w-full text-center mt-4">
      {buttonText}
    </Link>
  );

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl card-hover">
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {ButtonComponent}
      </div>
    </div>
  );
};

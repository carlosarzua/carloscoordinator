
interface TestimonialCardProps {
  name: string;
  content: string;
  rating: number;
  date: string;
  image?: string;
}

export const TestimonialCard = ({
  name,
  content,
  rating,
  date,
  image,
}: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 transition-all duration-300 hover:shadow-xl transform hover:scale-[1.03] relative">
      {/* Decorative quote mark */}
      <div className="absolute top-4 right-4 text-gray-100 text-6xl font-serif opacity-50">
        "
      </div>
      
      <div className="flex items-center mb-4">
        <div className="w-14 h-14 rounded-full overflow-hidden bg-gradient-to-br from-brand-blue to-brand-purple p-0.5 mr-4 shadow-md">
          <div className="w-full h-full rounded-full overflow-hidden bg-white">
            {image ? (
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-brand-blue/10 to-brand-purple/10 text-brand-purple font-bold text-xl">
                {name.charAt(0).toUpperCase()}
              </div>
            )}
          </div>
        </div>
        <div>
          <h4 className="font-bold">{name}</h4>
          <div className="flex items-center mt-1">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${
                    i < rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            <span className="text-xs text-gray-500 ml-2">{date}</span>
          </div>
        </div>
      </div>
      <p className="text-gray-600 relative z-10">{content}</p>
    </div>
  );
};

import { useLanguage } from "@/contexts/LanguageContext";

// Broaden type to string since filter includes values like "read", "study", etc.
type ResourceType = "Books" | "Apps" | "Resources" | "Videos" | "Playlist" | "ShortVideo" | "Series" | "All";

interface ResourceFilterProps {
  onFilterChange: (filter: string) => void;
  activeFilter: string;
}

export const ResourceFilter = ({ onFilterChange, activeFilter }: ResourceFilterProps) => {
  // Lowercase button labels, travel instead of Travel to Japan
  const filters: { value: string; label: string }[] = [
    { value: "all", label: "all" },
    { value: "read", label: "read" },
    { value: "study", label: "study" },
    { value: "watch", label: "watch" },
    { value: "travel", label: "travel" },
    { value: "work", label: "work" },
  ];
  
  return (
    <div className="flex flex-wrap justify-center gap-0.5 mb-2">
      {filters.map((filter) => (
        <button
          key={filter.value}
          type="button"
          onClick={() => onFilterChange(filter.value)}
          className={
            `capitalize px-1.5 py-0 rounded transition text-xs font-semibold border h-6 min-w-[38px]` +
            (activeFilter === filter.value ? " scale-105" : "")
          }
          style={{
            backgroundColor:
              filter.value === "all"
                ? "#8B5CF6" // brand-purple
                : filter.value === "read"
                ? "#4A6FFF" // brand-blue
                : filter.value === "study"
                ? "#8B5CF6" // brand-purple
                : filter.value === "watch"
                ? "#FF5D8F" // brand-red
                : filter.value === "travel"
                ? "#06D6A0" // brand-green
                : filter.value === "work"
                ? "#9CA3AF" // gray-400
                : "#F3F4F6", // gray-100
            borderColor:
              filter.value === "all"
                ? "#8B5CF6"
                : filter.value === "read"
                ? "#4A6FFF"
                : filter.value === "study"
                ? "#8B5CF6"
                : filter.value === "watch"
                ? "#FF5D8F"
                : filter.value === "travel"
                ? "#06D6A0"
                : filter.value === "work"
                ? "#9CA3AF"
                : "#D1D5DB", // gray-300
            color:
              filter.value === "all" ||
              filter.value === "read" ||
              filter.value === "study" ||
              filter.value === "watch" ||
              filter.value === "travel" ||
              filter.value === "work"
                ? "#fff"
                : "#374151", // gray-700
          }}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

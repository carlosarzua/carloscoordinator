import { useLanguage } from "@/contexts/LanguageContext";

interface ActionProps {
  actions: string[];
  onActionClick?: (action: string) => void;
  activeLabel?: string;
}

export const ResourceActionButtons = ({ actions, onActionClick, activeLabel }: ActionProps) => {
  const { t } = useLanguage();

  // Match color with filter, all purple for "all"
  const colorByAction: Record<string, string> = {
    all: "bg-brand-purple text-white",
    read: "bg-brand-blue text-white",
    study: "bg-brand-purple text-white",
    watch: "bg-brand-red text-white",
    travel: "bg-brand-green text-white",
    work: "bg-gray-400 text-white",
  };

  const labelByAction: Record<string, string> = {
    read: "read",
    study: "study",
    watch: "watch",
    travel: "travel",
    work: "work",
    all: "all",
  };

  const actionBtn =
    "rounded px-3 py-1 text-xs font-semibold hover:scale-105 transition-all duration-200 capitalize";

  // If "all" is active, color all as purple
  const getBtnClass = (action: string) => {
    if (activeLabel === "all") {
      return actionBtn + " bg-brand-purple text-white";
    }
    return `${actionBtn} ${colorByAction[action] || "bg-gray-200 text-gray-700"}`;
  };

  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {actions.map((action, i) => (
        <button
          key={i}
          className={getBtnClass(action)}
          style={{ minWidth: 70 }}
          onClick={e => {
            e.preventDefault();
            if (onActionClick) {
              onActionClick(action);
            } else {
              const customEvt = new CustomEvent("ResourceActionFilter", { detail: { action } });
              window.dispatchEvent(customEvt);
            }
          }}
        >
          {labelByAction[action]}
        </button>
      ))}
    </div>
  );
};

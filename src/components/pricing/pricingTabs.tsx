import cn from "classnames";

const tabs = [
  {
    id: 0,
    name: "Individuals",
  },
  {
    id: 1,
    name: "Small Businesses",
  },
  {
    id: 2,
    name: "Enterprise",
  },
];

type PricingTabsProps = {
  activeTab: number;
  onClick: (id: number) => void;
};

const PricingTabs = ({ activeTab, onClick }: PricingTabsProps) => {
  return (
    <div className="flex flex-row gap-1 border border-peavault-primary rounded-lg p-1 font-circular-std font-bold">
      {tabs.map((tab) => (
        <button
          onClick={() => onClick(tab.id)}
          key={tab.id}
          className={cn(
            "rounded-md px-4 py-3 duration-150 lg:text-base text-xs",
            activeTab === tab.id
              ? "bg-peavault-primary text-black"
              : "text-[#667085]",
          )}
        >
          <p>{tab.name}</p>
        </button>
      ))}
    </div>
  );
};

export default PricingTabs;

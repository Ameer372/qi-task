import StatisticsCard from "@/components/StatisticsCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const StatisticsPage = () => {
  return (
    <div className="p-4 flex gap-6">
      <StatisticsCard title="Merchants" content="1,234" />
      <StatisticsCard title="Items" content="3,420" />
      <StatisticsCard title="Orders" content="12,234" />
      <StatisticsCard title="Installment" content="2,234" />
    </div>
  );
};

export default StatisticsPage;

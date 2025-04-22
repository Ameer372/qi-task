import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

interface Props {
  title: string;
  content: string | number;
  icon?: React.ReactNode;
}

const StatisticsCard = ({ title, content, icon }: Props) => {
  return (
    <Card className="flex-1 hover:scale-105 transition">
      <CardHeader>
        <CardTitle className="font-light">
          <p className="flex gap-4 items-center justify-between">
            {title} {icon}
          </p>
        </CardTitle>
      </CardHeader>
      <CardContent className="font-bold text-2xl">{content}</CardContent>
    </Card>
  );
};

export default StatisticsCard;

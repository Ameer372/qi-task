import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

interface Props {
  title: string;
  content: string;
}

const StatisticsCard = ({ title, content }: Props) => {
  return (
    <Card className="flex-1 hover:scale-105 transition">
      <CardHeader>
        <CardTitle className="font-light">
          <p>{title}</p>
        </CardTitle>
      </CardHeader>
      <CardContent className="font-bold text-2xl">{content}</CardContent>
    </Card>
  );
};

export default StatisticsCard;

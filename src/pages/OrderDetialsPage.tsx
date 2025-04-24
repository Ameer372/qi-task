import useOrder from "@/hooks/useOrder";
import { useParams } from "wouter";

const OrderDetialsPage = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useOrder(id!);

  if (isLoading) return <div>Loading...</div>;

  if (error || !data) return <div>{error?.message}</div>;

  return (
    <ul>
      <li>{data.id}</li>
      <li>{data.merchant_id}</li>
      <li>{data.created_at}</li>
      <li>{data.total}</li>
      <li>{data.status}</li>
    </ul>
  );
};

export default OrderDetialsPage;

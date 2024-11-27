import { Order } from "@/types";
import { Separator } from "./ui/separator";

type Props = {
  order: Order;
};

const OrderStatusDetail = ({ order }: Props) => {
  return (
    <div className="space-y-5">
      <div className="flex flex-col">
        <span className="font-bold">Giao hàng tới:</span>
        <span>{order.deliveryDetails.name}</span>
        <span>
          {order.deliveryDetails.addressLine1}, {order.deliveryDetails.phone}
        </span>
      </div>
      <div className="flex flex-col">
        <span className="font-bold">Đơn hàng của bạn</span>
        <ul>
          {order.cartItems.map((item) => (
            <li>
              {item.name} x {item.quantity}
            </li>
          ))}
        </ul>
      </div>
      <Separator />
      <div className="flex flex-col">
        <span className="font-bold">Tổng tiền</span>
        <span>{order.totalAmount}đ</span>
      </div>
    </div>
  );
};

export default OrderStatusDetail;

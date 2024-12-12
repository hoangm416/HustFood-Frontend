import { OrderStatus } from "@/types";

type OrderStatusInfo = {
  label: string;
  value: OrderStatus;
  progressValue: number;
};

export const ORDER_STATUS: OrderStatusInfo[] = [
  { label: "Đã đặt hàng", value: "placed", progressValue: 0 },
  { label: "Đã thanh toán", value: "paid", progressValue: 25 },
  { label: "Đang chuẩn bị", value: "inProgress", progressValue: 50 },
  { label: "Đang giao hàng", value: "outForDelivery", progressValue: 75 },
  { label: "Giao hàng thành công", value: "delivered", progressValue: 100 },
];

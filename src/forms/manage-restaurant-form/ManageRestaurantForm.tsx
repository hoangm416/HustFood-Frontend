import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import DetailsSection from "./DetailsSection";
import { Separator } from "@/components/ui/separator";
import CuisinesSection from "./CuisinesSection";
import MenuSection from "./MenuSection";
import ImageSection from "./ImageSection";
import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";
import { Restaurant } from "@/types";
import { useEffect } from "react";

const formSchema = z
  .object({
    restaurantName: z.string({
      required_error: "tên quán ăn là bắt buộc",
    }),
    city: z.string({
      required_error: "tên phường là bắt buộc",
    }),
    country: z.string({
      required_error: "tên quận là bắt buộc",
    }),
    deliveryPrice: z.coerce.number({
      required_error: "giá vận chuyển là bắt buộc",
      invalid_type_error: "phải là một số hợp lệ",
    }),
    estimatedDeliveryTime: z.coerce.number({
      required_error: "thời gian giao hàng là bắt buộc",
      invalid_type_error: "phải là một số hợp lệ",
    }),
    cuisines: z.array(z.string()).nonempty({
      message: "vui lòng chọn ít nhất một loại món ăn",
    }),
    menuItems: z.array(
      z.object({
        name: z.string().min(1, "tên món ăn là bắt buộc"),
        price: z.coerce.number().min(1, "giá tiền là bắt buộc"),
      })
    ),
    imageUrl: z.string().optional(),
    imageFile: z.instanceof(File, { message: "yêu cầu thêm ảnh" }).optional(),
  })
  .refine((data) => data.imageUrl || data.imageFile, {
    message: "yêu cầu thêm link ảnh hoặc chọn ảnh từ thư viện",
    path: ["imageFile"],
  });

type RestaurantFormData = z.infer<typeof formSchema>;

type Props = {
  restaurant?: Restaurant;
  onSave: (restaurantFormData: FormData) => void;
  isLoading: boolean;
};

const ManageRestaurantForm = ({ onSave, isLoading, restaurant }: Props) => {
  const form = useForm<RestaurantFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cuisines: [],
      menuItems: [{ name: "", price: 0 }],
    },
  });

  useEffect(() => {
    if (!restaurant) {
      return;
    }

    const deliveryPriceFormatted = restaurant.deliveryPrice;

    const menuItemsFormatted = restaurant.menuItems.map((item) => ({
      ...item,
      price: item.price,
    }));

    const updatedRestaurant = {
      ...restaurant,
      deliveryPrice: deliveryPriceFormatted,
      menuItems: menuItemsFormatted,
    };

    form.reset(updatedRestaurant);
  }, [form, restaurant]);

  const onSubmit = (formDataJson: RestaurantFormData) => {
    const formData = new FormData();

    formData.append("restaurantName", formDataJson.restaurantName);
    formData.append("city", formDataJson.city);
    formData.append("country", formDataJson.country);

    formData.append(
      "deliveryPrice",
      (formDataJson.deliveryPrice).toString()
    );
    formData.append(
      "estimatedDeliveryTime",
      formDataJson.estimatedDeliveryTime.toString()
    );
    formDataJson.cuisines.forEach((cuisine, index) => {
      formData.append(`cuisines[${index}]`, cuisine);
    });
    formDataJson.menuItems.forEach((menuItem, index) => {
      formData.append(`menuItems[${index}][name]`, menuItem.name);
      formData.append(
        `menuItems[${index}][price]`,
        (menuItem.price).toString()
      );
    });

    if (formDataJson.imageFile) {
      formData.append(`imageFile`, formDataJson.imageFile);
    }

    onSave(formData);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 bg-gray-50 p-10 rounded-lg"
      >
        <DetailsSection />
        <Separator />
        <CuisinesSection />
        <Separator />
        <MenuSection />
        <Separator />
        <ImageSection />
        {isLoading ? <LoadingButton /> : <Button type="submit">Cập nhật</Button>}
      </form>
    </Form>
  );
};

export default ManageRestaurantForm;

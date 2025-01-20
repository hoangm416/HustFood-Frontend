import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

const DetailsSection = () => {
  const { control, setValue, watch } = useFormContext();
  const [districts, setDistricts] = useState<{ code: string; name: string }[]>([]);
  const [wards, setWards] = useState<{ code: string; name: string }[]>([]);
  const province = "01"; // Default to Hà Nội (Mã tỉnh Hà Nội: "01")
  const selectedDistrict = watch("district");

  // Fetch districts based on the province
  useEffect(() => {
    const fetchDistricts = async () => {
      try {
        const response = await fetch(
          `https://provinces.open-api.vn/api/p/${province}?depth=2`
        );
        const data = await response.json();
        setDistricts(data.districts || []);
      } catch (error) {
        console.error("Failed to fetch districts:", error);
      }
    };
    fetchDistricts();
  }, [province]);

  // Fetch wards based on the selected district
  useEffect(() => {
    if (!selectedDistrict) return;
    const fetchWards = async () => {
      try {
        const response = await fetch(
          `https://provinces.open-api.vn/api/d/${selectedDistrict}?depth=2`
        );
        const data = await response.json();
        setWards(data.wards || []);
      } catch (error) {
        console.error("Failed to fetch wards:", error);
      }
    };
    fetchWards();
  }, [selectedDistrict]);

  return (
    <div className="space-y-2">
      <div>
        <h2 className="text-2xl font-bold">Thông tin</h2>
        <FormDescription>
          Nhập thông tin về quán ăn của bạn
        </FormDescription>
      </div>

      <FormField
        control={control}
        name="restaurantName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Tên quán</FormLabel>
            <FormControl>
              <Input {...field} className="bg-white" placeholder="Nhập tên quán" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="flex flex-col md:flex-row gap-4">
        {/* District Selection */}
        <FormField
          control={control}
          name="district"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Quận</FormLabel>
              <FormControl>
                <Select
                  onValueChange={(value) => {
                    field.onChange(value); // Update selected district
                    setValue("ward", ""); // Reset ward when district changes
                    setWards([]); // Clear ward options
                  }}
                  value={field.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn quận" />
                  </SelectTrigger>
                  <SelectContent>
                    {districts.map((district) => (
                      <SelectItem key={district.code} value={district.code}>
                        {district.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Ward Selection */}
        <FormField
          control={control}
          name="ward"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Phường</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  value={field.value}
                  disabled={!selectedDistrict} // Disable ward dropdown if no district selected
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn phường" />
                  </SelectTrigger>
                  <SelectContent>
                    {wards.map((ward) => (
                      <SelectItem key={ward.code} value={ward.code}>
                        {ward.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={control}
        name="deliveryPrice"
        render={({ field }) => (
          <FormItem className="max-w-[25%]">
            <FormLabel>Giá vận chuyển (đ)</FormLabel>
            <FormControl>
              <Input
                {...field}
                type="number"
                className="bg-white"
                placeholder="15000"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="estimatedDeliveryTime"
        render={({ field }) => (
          <FormItem className="max-w-[25%]">
            <FormLabel>Thời gian vận chuyển ước tính (phút)</FormLabel>
            <FormControl>
              <Input
                {...field}
                type="number"
                className="bg-white"
                placeholder="30"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default DetailsSection;
import { HourlyPriceRes } from "@/types/data.type";

export const getTodaysElPricePerHour = async (): Promise<HourlyPriceRes> => {
  const date = new Date();

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  const elPriceRes = await fetch(
    `https://www.vattenfall.se/api/price/spot/pricearea/${year}-${month}-${day}/${year}-${month}-${day}/SN3`,
    {
      cache: "force-cache",
    },
  );
  const elPriceData: HourlyPriceRes = await elPriceRes.json();
  return elPriceData;
};

import { getTodaysElPricePerHour } from "@/services/elPriceService";
import { HourlyPriceRes } from "@/types/data.type";

export const Graph = async () => {
  const elPriceData: HourlyPriceRes = await getTodaysElPricePerHour();
  const tableHeight = 400;
  const priceMostExpensive = elPriceData.reduce((prev, curr) => (prev && curr.Value > prev.Value ? curr : prev)).Value;
  const chartHeightPx = tableHeight / priceMostExpensive;

  return (
    <table className="flex flex-col-reverse max-w-screen overflow-x-scroll py-10 bg-slate-800">
      <thead>
        <tr className="flex">
          {elPriceData.map((data) => (
            <th className="w-cell block text-center min-w-cell mt-2 text-xs font-normal" key={data.TimeStamp}>
              {data.TimeStampHour}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr className="flex" style={{ height: tableHeight }}>
          {elPriceData.map((data) => (
            <td
              className="
              w-cell flex items-end justify-center mt-auto bg-orange-500 min-w-cell relative shadow-chart-bottom
              before:content-[attr(data-value)] before:block before:pb-3 before:text-xs before:font-light"
              data-value={data.Value}
              aria-valuetext={`${data.Value} ${data.Unit}`}
              style={{ height: `${data.Value * chartHeightPx}px` }}
              key={data.TimeStamp}
            ></td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

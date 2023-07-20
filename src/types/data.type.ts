import { TimeStamp, TimeStampDay, TimeStampHour } from "./date.type";

export type HourlyPriceData = {
  TimeStamp: TimeStamp;
  TimeStampDay: TimeStampDay;
  TimeStampHour: TimeStampHour;
  Value: number;
  PriceArea: string;
  Unit: string;
};

export type HourlyPriceRes = Array<HourlyPriceData>;

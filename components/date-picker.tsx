"use client";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers";
import type { Dayjs } from "dayjs";
import Image from "next/image";
import type { DateTimePickerProps as MuiDateTimePickerProps } from "@mui/x-date-pickers";
import dayjs from "dayjs";

interface DatePickerProps extends MuiDateTimePickerProps<Dayjs> {
  label: string;
  className: string;
  previousValue?: Date;
}

export default function DatePicker({
  label,
  className,
  name,
  previousValue,
  ...rest
}: DatePickerProps) {
  const DateImg = () => (
    <Image
      src={"/uil_calender.svg"}
      alt="calender icon"
      width={25}
      height={25}
    />
  );

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        defaultValue={previousValue && dayjs(previousValue)}
        label={label}
        slotProps={{ textField: { size: "small", required: true } }}
        slots={{
          openPickerIcon: DateImg,
        }}
        className={className}
        name={name}
        {...rest}
      />
    </LocalizationProvider>
  );
}

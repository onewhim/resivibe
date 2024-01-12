"use client";

import { Event } from "@/store/features/event";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";

export const eventColumns: ColumnDef<Event>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ getValue }) => {
      const date = getValue() as Date;
      const formatted = date ? format(date, "yyyy-MM-dd") : "";

      return <div>{formatted}</div>;
    },
  },
  {
    accessorKey: "desc",
    header: "Desc",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
];

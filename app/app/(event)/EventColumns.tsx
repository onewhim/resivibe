"use client";

import { Event } from "@/store/features/event";
import { ColumnDef } from "@tanstack/react-table";

export const eventColumns: ColumnDef<Event>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "name",
  },
  {
    accessorKey: "date",
    header: "date",
  },
  {
    accessorKey: "desc",
    header: "desc",
  },
  {
    accessorKey: "type",
    header: "type",
  },
];

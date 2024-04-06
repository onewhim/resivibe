"use client";

import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { MoreHorizontal } from "lucide-react";
import { useState } from "react";

import { Event } from "@/store/features/event";
import { useAppStore } from "@/store/store";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import EventEditForm from "./EventEditForm";

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
  {
    id: "actions",
    cell: ({ row }) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [open, setOpen] = useState(false);

      return (
        <Dialog open={open} onOpenChange={setOpen}>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DialogTrigger asChild>
                <DropdownMenuItem>Edit</DropdownMenuItem>
              </DialogTrigger>

              <DropdownMenuItem
                onClick={() =>
                  useAppStore.getState().removeEvent(row.original.id)
                }
              >
                Remove
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DialogContent>
            <EventEditForm event={row.original} setOpen={setOpen} />
          </DialogContent>
        </Dialog>
      );
    },
  },
];

"use client";

import { useAppStore } from "@/store/store";
import useStore from "@/store/useStore";

import { eventColumns } from "./EventColumns";
import { DataTable } from "./EventTable";

export default function EventPage() {
  const events = useStore(useAppStore, (state) => state.events);
  return (
    <>
      {events && <DataTable columns={eventColumns} data={events} />}
  
    </>
  );
}

"use client";
import { useAppStore } from "@/store/store";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import useStore from "@/store/useStore";
import { DataTable } from "./EventTable";
import { eventColumns } from "./EventColumns";

export default function EventPage() {
  const events = useStore(useAppStore, (state) => state.events);
  const removeEvent = useAppStore((state) => state.removeEvent);
  const addEvent = useAppStore((state) => state.addEvent);
  const updateEvent = useAppStore((state) => state.updateEvent);
  return (
    <>
      {events && <DataTable columns={eventColumns} data={events} />}
      {/* {currentDay && format(currentDay, "MM/dd/yyyy")}
      <Button onClick={addTwoDay}>Add two day</Button> */}
    </>
  );
}

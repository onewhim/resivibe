"use client";

import { format } from "date-fns";

import { useAppStore } from "@/store/store";
import useStore from "@/store/useStore";

import { Button } from "@/components/ui/button";

import EventPage from "./(event)/EventPage";

export default function App() {
  const currentDay = useStore(useAppStore, (state) => state.currentDay);
  const addTwoDay = useAppStore((state) => state.addTwoDay);
  return (
    <>
      {currentDay && format(currentDay, "MM/dd/yyyy")}
      <Button onClick={addTwoDay}>Add two day</Button>
      <EventPage />
    </>
  );
}

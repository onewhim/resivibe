import { create } from "zustand";
import { persist, devtools, createJSONStorage } from "zustand/middleware";
import { addDays } from "date-fns";
import { Event, eventDemo } from "./features/event";

interface AppState {
  currentDay: Date;
  addTwoDay: () => void;
  events: Event[];
}

export const useAppStore = create<AppState>()(
  devtools(
    persist(
      (set, get) => ({
        currentDay: new Date(),
        addTwoDay: () =>
          set({ currentDay: addDays(get().currentDay, 2) }, false, "addTwoDay"),
        events: eventDemo,
      }),
      {
        name: "app-store",
        storage: createJSONStorage(() => localStorage),
      }
    ),
    { name: "app-store" }
  )
);
// https://docs.pmnd.rs/zustand/integrations/persisting-store-data#simple-example

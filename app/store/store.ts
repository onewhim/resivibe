import { create } from "zustand";
import { persist, devtools, createJSONStorage } from "zustand/middleware";
import { addDays } from "date-fns";
import { Event, eventDemo } from "./features/event";
import { immer } from "zustand/middleware/immer";

interface AppState {
  currentDay: Date;
  addTwoDay: () => void;

  events: Event[];
  addEvent: (event: Event) => void;
  updateEvent: (event: Event) => void;
  removeEvent: (id: string) => void;
}

export const useAppStore = create<AppState>()(
  devtools(
    immer(
      persist(
        (set, get) => ({
          currentDay: new Date(),
          addTwoDay: () =>
            set(
              { currentDay: addDays(get().currentDay, 2) },
              false,
              "addTwoDay"
            ),

          events: eventDemo,
          addEvent: (event: Event) =>
            set((state) => {
              state.events.push(event);
            }),
          updateEvent: (event: Event) =>
            set((state) => {
              const index = state.events.findIndex((e) => e.id === event.id);
              if (index === -1) return;
              state.events[index] = event;
            }),
          removeEvent: (id: string) =>
            set((state) => {
              console.log(id)
              console.log(state.events)
              const index = state.events.findIndex((e) => e.id === id);
              console.log(index)
              if (index === -1) return;
              state.events.splice(index, 1);
            }),
        }),
        {
          name: "app-store",
          storage: createJSONStorage(() => localStorage),
        }
      )
    ),
    { name: "app-store" }
  )
);
// https://docs.pmnd.rs/zustand/integrations/persisting-store-data#simple-example

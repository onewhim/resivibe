export interface Event {
  id: string;
  name: string;
  date: Date;
  desc?: string;
  type: EventType;
}
export enum EventType {
  LEAVE = "LEAVE",
  ENTRY = "ENTRY",
  UNKNOWN = "UNKNOWN",
}
export const eventDemo: Event[] = [
  {
    id: "9b709f99-d635-4e0f-94b1-05b277483e08",
    name: "Arrive in NZ",
    date: new Date(),
    desc: "",
    type: EventType.ENTRY,
  },
  {
    id: "1af1ed28-1f29-473a-bfb7-8a11dadaebee",
    name: "Leave NZ",
    date: new Date(),
    desc: "",
    type: EventType.LEAVE,
  },
  {
    id: "709c4dbd-1ff5-4803-8cc1-d2840e181fac",
    name: "Enter NZ",
    date: new Date(),
    desc: "",
    type: EventType.ENTRY,
  },
];

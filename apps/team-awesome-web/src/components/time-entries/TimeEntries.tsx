import { TimeEntry } from "../time-entry";
import { TimeEntryHeader } from "../time-entry-header";
import { LayoutContent } from "../layout-content";

export const TimeEntries = () => {
  return (
    <LayoutContent>
      <TimeEntryHeader />
      <TimeEntry />
    </LayoutContent>
  );
};

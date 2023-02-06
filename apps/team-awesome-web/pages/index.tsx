import { Header } from "../src/components/header";
import { SubHeader } from "../src/components/sub-header";
import { TimeEntries } from "../src/components/time-entries";
import { LayoutContent } from "../src/components/layout-content";

const Homepage = () => {
  return (
    <>
      <Header />
      <SubHeader />
      <LayoutContent>
        <TimeEntries />
      </LayoutContent>
    </>
  );
};

export default Homepage;

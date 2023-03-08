// eslint-disable-next-line import/no-extraneous-dependencies

import { getTimeEntries } from "../../services/time-entries/getTimeEntries";

const mockedTimeEntries = [
  {
    activity: "developmentwork",
    client: "Port of Rotterdam",
    startTimestamp: "2021-10-08T07:01:00.000Z",
    stopTimestamp: "2021-10-08T15:00:00.000Z",
    id: 0,
  },
];

const unmockedFetch = global.fetch;

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockedTimeEntries),
    }),
  ) as jest.Mock;
});

afterEach(() => {
  global.fetch = unmockedFetch;
});

test("if time entries are fetched from the server", async () => {
  const timeEntries = await getTimeEntries();
  expect(timeEntries).toEqual(mockedTimeEntries);
});

test("if getTimeEntries gets called using the environment variable", async () => {
  await getTimeEntries();
  expect(global.fetch).toHaveBeenCalledWith(`${process.env.NEXT_PUBLIC_DB_HOST}/timeEntries`, {
    headers: { "Content-Type": "application/json" },
    method: "GET",
  });
});

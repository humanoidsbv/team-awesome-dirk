// eslint-disable-next-line import/no-extraneous-dependencies
import { waitFor } from "@testing-library/react";
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

test("if time entries are fetched from the server", async () => {
  const mockFetchResponse = Promise.resolve({
    json: () => Promise.resolve(mockedTimeEntries),
  });

  global.fetch = jest.fn().mockImplementationOnce(() => mockFetchResponse);

  const response = getTimeEntries();

  expect(response).toEqual(mockFetchResponse);
  expect(global.fetch).toHaveBeenCalledTimes(1);
  waitFor(() =>
    expect(global.fetch).toHaveBeenCalledWith(
      `${process.env.NEXT_PUBLIC_DB_HOST}/time-entries?_sort=startTime&_order=asc`,
    ),
  );
});

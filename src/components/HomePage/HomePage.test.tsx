import HomePage from "./index";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { showList } from "../../assets/mocks/showLists";
import { act } from "react-dom/test-utils";

describe("Homa page  component", () => {
  let originFetch;

  beforeEach(() => {
    originFetch = (global as any).fetch;
  });
  afterEach(() => {
    (global as any).fetch = originFetch;
  });
  it("should pass", async () => {
    const fakeResponse = showList;
    const mRes = { json: jest.fn().mockResolvedValueOnce(fakeResponse) };
    const mockedFetch = jest.fn().mockResolvedValueOnce(mRes as any);
    (global as any).fetch = mockedFetch;
    let component;
    await act(async () => {
      component = render(<HomePage />);
    });

    const element = component.getByTestId("result");
    expect(element).toBeInTheDocument;

    expect(mockedFetch).toBeCalledTimes(1);
    expect(mRes.json).toBeCalledTimes(1);
  });
});

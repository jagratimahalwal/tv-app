import ShowDetails from "./index";
import { render } from "@testing-library/react";
import ReactRouter from "react-router";
import "@testing-library/jest-dom/extend-expect";
import { showDetails, Images } from "../../assets/mocks/showDetails";
import { act } from "react-dom/test-utils";

describe("Show detials page  component", () => {
  beforeAll(() => {
    global.fetch = fetch;
  });

  beforeEach(() => {
    jest.spyOn(ReactRouter, "useParams").mockReturnValue({ id: "1" });
  });

  it("should pass", async () => {
    let component;
    await act(async () => {
      component = render(<ShowDetails />);
    });
    expect(component.getByTestId("loading")).toBeInTheDocument;

    const imagesData = Images;
    const mockedImages = jest
      .fn()
      .mockResolvedValue({ json: jest.fn().mockResolvedValue(imagesData) });

    const mockedData = jest
      .fn()
      .mockResolvedValue({ json: jest.fn().mockResolvedValue(showDetails) });

    (global as any).fetch = mockedImages;
    (global as any).fetch = mockedData;

    const element = component.queryByTestId("result");
    expect(element).toBeInTheDocument;
  });
});

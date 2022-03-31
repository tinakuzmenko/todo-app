import { fireEvent, render } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  it('Should call "onClick" prop on button click', () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button onClick={onClick}>Click</Button>);

    fireEvent.click(getByText(/Click/));
    expect(onClick).toHaveBeenCalled();
  });
});

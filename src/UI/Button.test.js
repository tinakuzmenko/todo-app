import { fireEvent, render } from "@testing-library/react";
import Button from "./Button";

it('calls "onClick" prop on button click', () => {
  const onClick = jest.fn();
  const { getByText } = render(<Button onClick={onClick}>Click</Button>);

  fireEvent.click(getByText(/Click/));
  expect(onClick).toHaveBeenCalled();
});

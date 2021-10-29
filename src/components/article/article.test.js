import { getByRole, render, fireEvent } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import ArticleForm from "./ArticleForm";

it("renders", () => {
  const { container } = render(<ArticleForm />);
  expect(container.firstChild).toBeInTheDocument();
});

it("calls a function when clicked", async () => {
  let wasCalled = false;
  render(<ArticleForm setArticles={() => (wasCalled = true)} />);
  const nameInput = screen.getByPlaceholderText("Brot");
  userEvent.type(nameInput, "test");
  const amountInput = screen.getByPlaceholderText("1");
  userEvent.type(amountInput, "2");
  const priceInput = screen.getByPlaceholderText("1,50");
  userEvent.type(priceInput, "5");
  const button = screen.getByRole("button");
  await fireEvent.click(button);
  expect(wasCalled).toBeTruthy();
});

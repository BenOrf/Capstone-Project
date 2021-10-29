import { getByRole, render, fireEvent } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import Base, { calculateSum } from "../components/Base";

it("it returns 0 if no products are given", () => {
  const emptyProductList = [];
  const productSum = calculateSum(emptyProductList);
  expect(productSum).toEqual("0.00");
});

it("it returns the price of the only product in the list", () => {
  const articles = [
    {
      price: "50,00",
      amount: 1,
    },
  ];
  const productSum = calculateSum(articles);
  expect(productSum).toEqual("50.00");
});

it("it returns the price of the only article in the list times its quantity", () => {
  const articles = [
    {
      price: "25,77",
      amount: 4,
    },
  ];
  const productSum = calculateSum(articles);
  expect(productSum).toEqual("103.08");
});

it("it returns the price of all products", () => {
  const articles = [
    {
      price: "1,99",
      amount: 2,
    },
    {
      price: "24,95",
      amount: 4,
    },
    {
      price: "38,99",
      amount: 7,
    },
    {
      price: "0,49",
      amount: 4,
    },
  ];
  const productSum = calculateSum(articles);
  expect(productSum).toEqual("378.67");
});

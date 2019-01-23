import React from "react";
import { render, cleanup, fireEvent, getAllByTestId } from "react-testing-library";
import NavigationMenu from "../index";
import { Context } from "src/components/Provider";

afterEach(cleanup);

const onSubmit = jest.fn();

const testState = {
  searchValue: ""
};

test("<NavigationMenu />", async () => {
  const { getByTestId } = render(
    <Context.Provider
      value={{
        state: testState
      }}
    >
      <NavigationMenu />
    </Context.Provider>
  );

  expect(getByTestId("search")).toBeTruthy();
  getByTestId("search").value = "a";
  expect(getByTestId("search").value).toBe("a");
});

import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import NavigationMenu from "../index";
import { Context } from "src/components/Provider";

afterEach(cleanup);

const onSubmit = jest.fn();

const testState = {
  searchValue: ""
};

test("<NavigationMenu />", () => {
  const { debug, getByTestId, container, getByText, getByLabelText } = render(
    <Context.Provider
      value={{
        state: testState
      }}
    >
      <NavigationMenu />
    </Context.Provider>
  );
  debug();
  //   expect(getByTestId("movie-form")).toBeTruthy();

  // Note might not work
  //   getByLabelText("Text").value = "hello";
  //   fireEvent.change(getByLabelText("Text"));

  //   fireEvent.change(getByLabelText("Text"), {
  //     target: { value: "hello" }
  //   });

  //   fireEvent.click(getByText("Submit"));
  //   expect(onSubmit).toHaveBeenCalledTimes(1);
  //   expect(onSubmit).toHaveBeenCalledWith({
  //     text: "hello"
  //   });
});

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ControlledTextInput } from "../ControlledTextInput";

describe("Controlled text input", () => {
    it("should display 'hello' when user types 'hello'", () => {
        render(<ControlledTextInput />);
        const textInput = screen.getByRole("textbox") as HTMLInputElement;

        userEvent.clear(textInput);
        userEvent.type(textInput, "hello");

        expect(textInput.value).toBe("hello");
    });
});

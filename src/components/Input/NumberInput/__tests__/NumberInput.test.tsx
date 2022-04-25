import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { NumberInput } from "../NumberInput";

describe("Number input", () => {
    it("should render number input element on load", () => {
        render(<NumberInput />);

        const textInput = screen.getByRole("spinbutton") as HTMLInputElement;

        expect(textInput).toBeInTheDocument();
    });

    // it("should have the value that is typed by user", () => {
    //     render(<TextInput />);
    //     const textInput = screen.getByRole("textbox") as HTMLInputElement;

    //     userEvent.type(textInput, "hello world");

    //     expect(textInput.value).toBe("hello world");
    // });
});

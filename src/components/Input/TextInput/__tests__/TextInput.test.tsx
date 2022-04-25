import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TextInput } from "../TextInput";

describe("Text input", () => {
    afterEach(cleanup);

    it("should contain 'Required...' in placeholder on load", () => {
        render(<TextInput />);

        const textInput = screen.getByRole("textbox") as HTMLInputElement;

        expect(textInput.placeholder).toBe("Required...");
    });

    it("should have the value that is typed by user", () => {
        render(<TextInput />);
        const textInput = screen.getByRole("textbox") as HTMLInputElement;

        userEvent.type(textInput, "hello world");

        expect(textInput.value).toBe("hello world");
    });
});

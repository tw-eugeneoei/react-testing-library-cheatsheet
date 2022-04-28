import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CheckboxInput } from "../CheckboxInput";

describe("Checkbox", () => {
    it("should render checkbox on load", () => {
        render(<CheckboxInput />);
        const checkbox = screen.getByRole("checkbox") as HTMLInputElement;

        expect(checkbox).toBeInTheDocument();
    });

    it("should not be checked on load", () => {
        render(<CheckboxInput />);
        const checkbox = screen.getByRole("checkbox") as HTMLInputElement;

        expect(checkbox.checked).toBe(false);
    });

    it("should be unchecked when checkbox is clicked", () => {
        render(<CheckboxInput />);
        const checkbox = screen.getByRole("checkbox") as HTMLInputElement;

        userEvent.click(checkbox);

        expect(checkbox.checked).toBe(true);
    });
});

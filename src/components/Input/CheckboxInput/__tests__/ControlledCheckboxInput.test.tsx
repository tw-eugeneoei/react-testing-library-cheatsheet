import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ControlledCheckboxInput } from "../ControlledCheckboxInput";

describe("Controlled checkbox", () => {
    afterEach(cleanup);

    it("should not be checked on load", () => {
        render(<ControlledCheckboxInput />);
        const checkbox = screen.getByRole("checkbox") as HTMLInputElement;

        expect(checkbox.checked).toBe(false);
    });

    it("should be checked when clicked", () => {
        render(<ControlledCheckboxInput />);
        const checkbox = screen.getByRole("checkbox") as HTMLInputElement;

        userEvent.click(checkbox);

        expect(checkbox.checked).toBe(true);
    });
});

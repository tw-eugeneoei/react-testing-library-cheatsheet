import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RadioInput } from "../RadioInput";

describe("Radio", () => {
    afterEach(cleanup);

    it("should render radio button on load", () => {
        render(<RadioInput />);
        const radio = screen.getByRole("radio") as HTMLInputElement;

        expect(radio).toBeInTheDocument();
    });

    it("should be unchecked on load", () => {
        render(<RadioInput />);
        const radio = screen.getByRole("radio") as HTMLInputElement;

        expect(radio.checked).toBe(false);
    });

    it("should be checked when clicked", () => {
        render(<RadioInput />);
        const radio = screen.getByRole("radio") as HTMLInputElement;

        userEvent.click(radio);

        expect(radio.checked).toBe(true);
    });
});

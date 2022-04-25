import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MultipleCheckboxInputs } from "../MultipleCheckboxInputs";

describe("Multiple checkboxes", () => {
    afterEach(cleanup);

    it("should 2 checkboxes on load", () => {
        render(<MultipleCheckboxInputs />);
        const checkboxes = screen.getAllByRole("checkbox");

        expect(checkboxes.length).toBe(2);
    });

    it("should render 'Subscribe' and 'I agree' checkboxes on load", () => {
        render(<MultipleCheckboxInputs />);
        const subsbcribeCheckbox = screen.getByRole("checkbox", {
            name: /subscribe/i,
        }) as HTMLInputElement;
        const agreeCheckbox = screen.getByRole("checkbox", {
            name: /i agree/i,
        }) as HTMLInputElement;

        expect(subsbcribeCheckbox).toBeInTheDocument();
        expect(agreeCheckbox).toBeInTheDocument();
    });

    it("should all be checked on load", () => {
        render(<MultipleCheckboxInputs />);
        const subsbcribeCheckbox = screen.getByRole("checkbox", {
            name: /subscribe/i,
        }) as HTMLInputElement;
        const agreeCheckbox = screen.getByRole("checkbox", {
            name: /i agree/i,
        }) as HTMLInputElement;

        expect(subsbcribeCheckbox.checked).toBe(true);
        expect(agreeCheckbox.checked).toBe(true);
    });
});

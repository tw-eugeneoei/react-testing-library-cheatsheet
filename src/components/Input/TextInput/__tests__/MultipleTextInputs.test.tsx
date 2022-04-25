import { render, screen } from "@testing-library/react";
import { MultipleTextInputs } from "../MultipleTextInputs";

describe("On load", () => {
    it("should contain 2 text input elements", () => {
        render(<MultipleTextInputs />);

        const textInputs = screen.getAllByRole("textbox");

        expect(textInputs.length).toBe(2);
    });

    it("should render email and password input elements", () => {
        render(<MultipleTextInputs />);

        const emailInput = screen.getByRole("textbox", {
            name: /email/i,
        }) as HTMLInputElement;
        const passwordInput = screen.getByRole("textbox", {
            name: /password/i,
        }) as HTMLInputElement;

        expect(emailInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
    });
});

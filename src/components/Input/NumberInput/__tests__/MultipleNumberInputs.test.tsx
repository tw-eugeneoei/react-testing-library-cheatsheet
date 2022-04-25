import { render, screen, cleanup } from "@testing-library/react";
import { MultipleNumberInputs } from "../MultipleNumberInputs";

describe("Multiple number inputs", () => {
    afterEach(cleanup);

    it("should contain 2 number input elements", () => {
        render(<MultipleNumberInputs />);

        const numberInputs = screen.getAllByRole("spinbutton");

        expect(numberInputs.length).toBe(2);
    });

    it("should render contact number and age input elements", () => {
        render(<MultipleNumberInputs />);

        const contactNumberInput = screen.getByRole("spinbutton", {
            name: /contact number/i,
        }) as HTMLInputElement;
        const ageInput = screen.getByRole("spinbutton", {
            name: /age/i,
        }) as HTMLInputElement;

        expect(contactNumberInput).toBeInTheDocument();
        expect(ageInput).toBeInTheDocument();
    });
});

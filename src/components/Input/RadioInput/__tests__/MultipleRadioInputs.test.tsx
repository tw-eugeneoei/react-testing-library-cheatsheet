import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MultipleRadioInputs } from "../MultipleRadioInputs";

describe("Multiple radio inputs", () => {
    afterEach(cleanup);

    it("should render 2 radio inputs on load", () => {
        render(<MultipleRadioInputs />);
        const radios = screen.getAllByRole("radio");

        expect(radios.length).toBe(2);
    });

    it("should grouped into radiogroup", () => {
        render(<MultipleRadioInputs />);
        const radiogroup = screen.getByRole("radiogroup");

        expect(radiogroup).toBeInTheDocument();
        expect(radiogroup.childElementCount).toBe(2);
    });

    it("should all be unchecked on load", () => {
        render(<MultipleRadioInputs />);
        const consultantRadio = screen.getByRole("radio", {
            name: "Consultant",
        }) as HTMLInputElement;
        const seniorConsultantRadio = screen.getByRole("radio", {
            name: "Senior Consultant",
        }) as HTMLInputElement;

        expect(consultantRadio.checked).toBe(false);
        expect(seniorConsultantRadio.checked).toBe(false);
    });

    it("should only check 'Consultant' radio button when 'Consultant' radio button is clicked", () => {
        render(<MultipleRadioInputs />);
        const consultantRadio = screen.getByRole("radio", {
            name: "Consultant",
        }) as HTMLInputElement;
        const seniorConsultantRadio = screen.getByRole("radio", {
            name: "Senior Consultant",
        }) as HTMLInputElement;

        userEvent.click(consultantRadio);

        expect(consultantRadio.checked).toBe(true);
        expect(seniorConsultantRadio.checked).toBe(false);
    });
});

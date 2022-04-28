import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MultipleControlledRadioInputs } from "../MultipleControlledRadioInputs";

describe("Multiple controlled radio inputs", () => {
    it("should all be unchecked on load", () => {
        render(<MultipleControlledRadioInputs />);
        const consultantRadio = screen.getByRole("radio", {
            name: "Consultant",
        }) as HTMLInputElement;
        const seniorConsultantRadio = screen.getByRole("radio", {
            name: "Senior Consultant",
        }) as HTMLInputElement;

        expect(consultantRadio.checked).toBe(false);
        expect(seniorConsultantRadio.checked).toBe(false);
    });

    it("should only check 'Senior Consultant' when 'Senior Consultant' radio button is clicked", () => {
        render(<MultipleControlledRadioInputs />);
        const consultantRadio = screen.getByRole("radio", {
            name: "Consultant",
        }) as HTMLInputElement;
        const seniorConsultantRadio = screen.getByRole("radio", {
            name: "Senior Consultant",
        }) as HTMLInputElement;

        userEvent.click(seniorConsultantRadio);

        expect(consultantRadio.checked).toBe(false);
        expect(seniorConsultantRadio.checked).toBe(true);
    });
});

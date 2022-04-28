import { render, screen, cleanup, within } from "@testing-library/react";
import { RoleRadioGroup } from "../RoleRadioGroup";

describe("radiogroup", () => {
    afterEach(cleanup);

    it("should exist on load", () => {
        render(<RoleRadioGroup />);
        const radioGroup = screen.getByRole("radiogroup");

        // * or by passing "name" in options argument if there are multiple radio groups within UI
        // const radioGroup = screen.getByRole("radiogroup", {
        //     name: "Grade",
        // });

        expect(radioGroup).toBeInTheDocument();
    });

    it("should only check 'Consultant' radio button on load", () => {
        render(<RoleRadioGroup />);

        const consultantRadio = screen.getByRole("radio", {
            name: "Consultant",
        }) as HTMLInputElement;
        const seniorConsultantRadio = screen.getByRole("radio", {
            name: "Senior Consultant",
        }) as HTMLInputElement;
        const principalConsultantRadio = screen.getByRole("radio", {
            name: "Principal Consultant",
        }) as HTMLInputElement;

        // * or if there are other radio buttons with same name on UI, search within a radio group
        // const radioGroup = screen.getByRole("radiogroup", {
        //     name: "Grade",
        // });
        // const consultantRadio = within(radioGroup).getByRole("radio", {
        //     name: "Consultant",
        // }) as HTMLInputElement;
        // const seniorConsultantRadio = within(radioGroup).getByRole("radio", {
        //     name: "Senior Consultant",
        // }) as HTMLInputElement;
        // const principalConsultantRadio = within(radioGroup).getByRole("radio", {
        //     name: "Principal Consultant",
        // }) as HTMLInputElement;

        expect(consultantRadio.checked).toBe(true);
        expect(seniorConsultantRadio.checked).toBe(false);
        expect(principalConsultantRadio.checked).toBe(false);
    });
});

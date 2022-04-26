import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MultipleRadioGroups } from "../MultipleRadioGroups";

describe("Multiple radio groups", () => {
    afterEach(cleanup);

    it("should render 2 groups of radio buttons", () => {
        render(<MultipleRadioGroups />);
        const radioGroups = screen.getAllByRole("radiogroup");

        expect(radioGroups.length).toBe(2);
    });

    it("should render grade and age range radio groups", () => {
        render(<MultipleRadioGroups />);
        const gradeRadioGroup = screen.getByRole("radiogroup", {
            name: /grade/i,
        });
        const ageRangeRadioGroup = screen.getByRole("radiogroup", {
            name: /age range/i,
        });

        expect(gradeRadioGroup).toBeInTheDocument();
        expect(ageRangeRadioGroup).toBeInTheDocument();
    });
});

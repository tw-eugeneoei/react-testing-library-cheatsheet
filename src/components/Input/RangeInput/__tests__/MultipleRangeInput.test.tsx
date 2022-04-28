import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MultipleRangeInput } from "../MultipleRangeInput";

describe("Multiple range input", () => {
    it("should render 2 range input on load", () => {
        render(<MultipleRangeInput />);
        const rangeInputs = screen.getAllByRole("slider");

        expect(rangeInputs.length).toBe(2);
    });

    it("should render height and weight slider", () => {
        render(<MultipleRangeInput />);
        const heightSlider: HTMLInputElement = screen.getByRole("slider", {
            name: "Height",
        });
        const weightSlider: HTMLInputElement = screen.getByRole("slider", {
            name: "Weight",
        });

        expect(heightSlider).toBeInTheDocument();
        expect(weightSlider).toBeInTheDocument();
    });

    it("should have a 'min' value of 0 for both sliders", () => {
        render(<MultipleRangeInput />);
        const heightSlider: HTMLInputElement = screen.getByRole("slider", {
            name: "Height",
        });
        const weightSlider: HTMLInputElement = screen.getByRole("slider", {
            name: "Weight",
        });

        expect(heightSlider.min).toBe("0");
        expect(weightSlider.min).toBe("0");
    });

    it("should have a 'max' value of 10 for 'weight' and 10 for 'height'", () => {
        render(<MultipleRangeInput />);
        const heightSlider: HTMLInputElement = screen.getByRole("slider", {
            name: "Height",
        });
        const weightSlider: HTMLInputElement = screen.getByRole("slider", {
            name: "Weight",
        });

        expect(heightSlider.max).toBe("10");
        expect(weightSlider.max).toBe("10");
    });

    // ! how to trigger a change in slider?
    // it("should have a value of 5 for 'weight' user drags slider to 5", () => {
    //     render(<MultipleRangeInput />);
    //     const weightSlider: HTMLInputElement = screen.getByRole("slider", {
    //         name: "Weight",
    //     });

    //     userEvent.type(weightSlider, "5");

    //     expect(weightSlider.value).toBe("5");
    // });
});

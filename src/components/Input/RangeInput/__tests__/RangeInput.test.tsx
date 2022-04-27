import { render, screen, cleanup } from "@testing-library/react";
import { RangeInput } from "../RangeInput";

describe("Range input", () => {
    afterEach(cleanup);

    it("should render range input on load", () => {
        render(<RangeInput />);

        const rangeInput = screen.getByRole("slider") as HTMLInputElement;

        expect(rangeInput).toBeInTheDocument();
    });

    // it("should have a value of 75 on load", () => {
    //     render(<RangeInput />);

    //     const rangeInput = screen.getByRole("slider") as HTMLInputElement;

    //     expect(rangeInput.value).toBe("75");
    // });
});

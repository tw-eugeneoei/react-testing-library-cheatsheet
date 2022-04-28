import { render, screen } from "@testing-library/react";
import { RangeInput } from "../RangeInput";

describe("Range input", () => {
    it("should render range input on load", () => {
        render(<RangeInput />);

        const rangeInput = screen.getByRole("slider") as HTMLInputElement;

        expect(rangeInput).toBeInTheDocument();
    });
});

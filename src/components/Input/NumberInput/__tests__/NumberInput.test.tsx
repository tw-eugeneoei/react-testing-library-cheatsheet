import {
    render,
    screen,
    cleanup,
    waitFor,
    fireEvent,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { NumberInput } from "../NumberInput";

describe("Number input", () => {
    afterEach(cleanup);

    it("should render number input element on load", () => {
        render(<NumberInput />);

        const numberInput = screen.getByRole("spinbutton") as HTMLInputElement;

        expect(numberInput).toBeInTheDocument();
    });

    it("should have a value of 1 when user types 1 into input", () => {
        render(<NumberInput />);
        const numberInput = screen.getByRole("spinbutton") as HTMLInputElement;

        userEvent.clear(numberInput);
        userEvent.type(numberInput, "1");

        expect(numberInput.value).toBe("1");
    });

    // ! simulation of keyboard arrowup doesnt seemt to be working
    // it("should have a value of 2 when user presses up arrow twice", async () => {
    //     render(<NumberInput />);
    //     const numberInput = screen.getByRole("spinbutton") as HTMLInputElement;

    //     userEvent.clear(numberInput);
    //     userEvent.click(numberInput);

    //     userEvent.keyboard("{arrowup}");

    //     expect(numberInput.value).toBe("1");
    // });
});

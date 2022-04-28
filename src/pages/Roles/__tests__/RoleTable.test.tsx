import { render, screen, within } from "@testing-library/react";
import { RoleTable } from "../RoleTable";

describe("table", () => {
    describe("table one", () => {
        it("should exist on load", () => {
            render(<RoleTable />);
            const tableOne = screen.getByRole("table", {
                name: "Table One",
            });

            // * encompasses thead, tbody and tfoot
            // const rowgroup = screen.getByRole("rowgroup");

            // * includes header row
            const row = within(tableOne).getAllByRole("row");

            const columnHeaders = within(tableOne).getAllByRole("columnheader");
            const cells = within(tableOne).getAllByRole("cell");

            expect(tableOne).toBeInTheDocument();
            expect(row.length).toBe(4);
            expect(columnHeaders.length).toBe(2);
            expect(cells.length).toBe(6);
        });
    });

    describe("table two", () => {
        it("should exist on load", () => {
            render(<RoleTable />);
            const tableTwo = screen.getByRole("table", {
                name: "Table Two",
            });

            const rowheader = within(tableTwo).getByRole("rowheader", {
                name: "Header1",
            });
            expect(rowheader).toBeInTheDocument();
        });
    });
});

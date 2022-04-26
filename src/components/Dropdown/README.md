# Accessing `<select>` element

HTML `<select>` element is represented by the role "combobox". If you are using Material-UI's `<Select>` component, you will notice that it instead has a "button" role. So, depending on what you are using, how elements are accessed may vary.

### If there is only 1 HTML `<select>` element in component

```ts
const dropdown = screen.getByRole("combobox") as HTMLSelectElement;
```

### Selecting an `<option>` where only 1 `<select>` element exist in component

```ts
const dropdown = screen.getByRole("combobox") as HTMLSelectElement;
const pearOption = screen.getByRole("option", {
    name: "Pear",
}) as HTMLOptionElement;

userEvent.selectOptions(dropdown, pearOption);
```

### If there are 2 or more HTML `<select>` elements in component

```ts
const dayDropdown = screen.getByRole("combobox", {
    name: "Day", // needs to match label of select element
});

const monthDropdown = screen.getByRole("combobox", {
    name: "Month", // needs to match label of select element
});

const yearDropdown = screen.getByRole("combobox", {
    name: "Year", // needs to match label of select element
});
```

### Selecting an `<option>` in each `<select>` element

```ts
const dayDropdown = screen.getByRole("combobox", {
    name: "Day",
}) as HTMLSelectElement;
const dayOption = "18";

const monthDropdown = screen.getByRole("combobox", {
    name: "Month",
}) as HTMLSelectElement;
const monthOption = "6";

const yearDropdown = screen.getByRole("combobox", {
    name: "Year",
}) as HTMLSelectElement;
const yearOption = "2018";

userEvent.selectOptions(dayDropdown, dayOption);
userEvent.selectOptions(monthDropdown, monthOption);
userEvent.selectOptions(yearDropdown, yearOption);
```

# Tips

### Avoid using `textContent` on `<select>` elements when determining its value

It returns all options' values concatenated into a string.

For example, given the following component:

```html
<select>
    <option>Apple</option>
    <option>Orange</option>
    <option>Pear</option>
</select>
```

Using `textContent` gives "AppleOrangePear" while `value` gives the actual value that the `<select>` element currently holds

```ts
it("should render select element on load", () => {
    render(<HtmlSelect />);
    const dropdown = screen.getByRole("combobox") as HTMLSelectElement;

    expect(dropdown.value).toBe("Apple");
    expect(dropdown.textContent).toBe("AppleOrangePear");
});
```

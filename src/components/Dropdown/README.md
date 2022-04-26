# Accessing `<select>` element

HTML `<select>` element is represented by the role "combobox". If you are using Material-UI's `<Select>` component, you will notice that it instead has a "button" role. So, depending on what you are using, how elements are accessed may vary.

### If using HTML `<select>` element

```ts
const dropdown = screen.getByRole("combobox") as HTMLSelectElement;
```

### Selecting an `<option>` within `<select>`

```ts
const dropdown = screen.getByRole("combobox") as HTMLSelectElement;
const pearOption = screen.getByRole("option", {
    name: "Pear",
}) as HTMLOptionElement;

userEvent.selectOptions(dropdown, pearOption);
```

# Tips

### Avoid using `textContent` on `<select>` elements when determining its value

It returns all options' values concatenated into a string.

For example, given the following component:

```ts
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

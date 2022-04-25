# Accessing text `<input>` element

### If there is only 1 `<input>` element within component

```ts
const textInput = screen.getByRole("textbox") as HTMLInputElement;
```

### If there are 2 or more `<input>` elements within component

```ts
const emailInput = screen.getByRole("textbox", {
    name: /email/i,
}) as HTMLInputElement;
const passwordInput = screen.getByRole("textbox", {
    name: /password/i,
}) as HTMLInputElement;
```

# Accessing number `<input>` element

# Tips

-   Use "as HTML\<element-type\>Element" on DOM nodes gives access to the attributes of HTML element eg `HTMLInputElement` or `HTMLSelectElement`
-   Avoid using `textContent` as this returns all options' values concatenated into a string

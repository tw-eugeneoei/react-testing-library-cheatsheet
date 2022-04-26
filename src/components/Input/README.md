# Accessing text `<input>` element

Text `<input>` elements are represented by the role "textbox".

### If there is only 1 `<input type='text'>` element within component

```ts
const textInput = screen.getByRole("textbox") as HTMLInputElement;
```

### If there are 2 or more `<input type='text'>` elements within component

```ts
const emailInput = screen.getByRole("textbox", {
    name: /email/i,
}) as HTMLInputElement;

const passwordInput = screen.getByRole("textbox", {
    name: /password/i,
}) as HTMLInputElement;
```

# Accessing number `<input>` element

Text `<input>` elements are represented by the role "spinbutton".

### If there is only 1 `<input type='number'>` element within component

```ts
const numberInput = screen.getByRole("spinbutton") as HTMLInputElement;
```

### If there are 2 or more `<input type='number'>` elements within component

```ts
const contactNumberInput = screen.getByRole("spinbutton", {
    name: /contact number/i,
}) as HTMLInputElement;

const ageInput = screen.getByRole("spinbutton", {
    name: /age/i,
}) as HTMLInputElement;
```

# Accessing checkbox `<input>` element

### If there is only 1 `<input type='checkbox'>` element within component

```ts
const checkbox = screen.getByRole("checkbox") as HTMLInputElement;
```

### If there are 2 or more `<input type='checkbox'>` elements within component

```ts
const subsbcribeCheckbox = screen.getByRole("checkbox", {
    name: /subscribe/i,
}) as HTMLInputElement;

const agreeCheckbox = screen.getByRole("checkbox", {
    name: /i agree/i,
}) as HTMLInputElement;
```

# Accessing radio `<input>` element

### If there is only 1 `<input type='radio'>` element within component

```ts
const radio = screen.getByRole("radio") as HTMLInputElement;
```

### If there are 2 or more `<input type='radio'>` elements within component

```ts
const consultantRadio = screen.getByRole("radio", {
    name: "Consultant",
}) as HTMLInputElement;

const seniorConsultantRadio = screen.getByRole("radio", {
    name: "Senior Consultant",
}) as HTMLInputElement;
```

### Multiple groups of radio buttons within component

# Tips

### Use "as HTML\<element-type\>Element" on DOM nodes

This gives access to the attributes of targetted HTML element.

### Avoid using `textContent` on \<select\> elements

It returns all options' values concatenated into a string

### Always use the `<label>` tag to define labels for `<input>` elements

Using `<label>` tag to define input elements such as `<input type="text">`, `<input type="checkbox">`, `<input type="radio">` and so on allows you to target a specific `<input>` by its name. For eg,

```ts
screen.getByRole("textbox", {
    name: /email/i,
});
```

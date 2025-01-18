# Developer Usage Guide for Form Components

This guide explains how to use the reusable form components available in the provided codebase. Each component integrates seamlessly with the `Form` component, ensuring state and event management is consistent and streamlined.

---

## Form Component

### Overview
The `Form` component is the primary container for all form fields. It automatically propagates `value` and `onChange` handlers to its child components.

### Props
- **`children`**: Form fields to include in the form (e.g., `Input`, `Password`).
- **`onSubmit`**: Callback function invoked when the form is submitted.
- **`initialFormData`**: Object containing initial values for all form fields.

### Example Usage
```tsx
<Form
  initialFormData={{ name: '', password: '', role: '' }}
  onSubmit={(data) => console.log('Form Submitted:', data)}
>
  <Input id="name" label="Name" />
  <Password id="password" label="Password" />
  <Select
    id="role"
    label="Role"
    options={[
      { value: 'admin', label: 'Administrator' },
      { value: 'user', label: 'User' },
    ]}
  />
</Form>
```

---

## Input Component

### Overview
A standard text input field for user input.

### Props
- **`id`**: Unique identifier for the input field.
- **`label`**: Text displayed above the input field.

### Example Usage
```tsx
<Input id="username" label="Username" />
```

---

## Password Component

### Overview
A password input field with a toggle to show or hide the password.

### Props
- **`id`**: Unique identifier for the input field.
- **`label`**: Text displayed above the input field.

### Example Usage
```tsx
<Password id="userPassword" label="Password" />
```

---

## Select Component

### Overview
A dropdown menu for selecting one option from a list.

### Props
- **`id`**: Unique identifier for the dropdown.
- **`label`**: Text displayed above the dropdown.
- **`options`**: Array of options with `value` and `label` properties.

### Example Usage
```tsx
<Select
  id="country"
  label="Country"
  options={[
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' },
  ]}
/>
```

---

## DatalistSelect Component

### Overview
A text input field with autocomplete suggestions.

### Props
- **`id`**: Unique identifier for the input field.
- **`label`**: Text displayed above the input field.
- **`options`**: Array of string options for autocomplete.

### Example Usage
```tsx
<DatalistSelect
  id="favoriteFruit"
  label="Favorite Fruit"
  options={['Apple', 'Banana', 'Cherry']}
/>
```

---

## GroupedSelect Component

### Overview
A dropdown menu with grouped options.

### Props
- **`id`**: Unique identifier for the dropdown.
- **`label`**: Text displayed above the dropdown.
- **`groups`**: Array of groups, each containing a `label` and `options`.

### Example Usage
```tsx
<GroupedSelect
  id="preferences"
  label="Preferences"
  groups={[
    {
      label: 'Fruits',
      options: [
        { value: 'apple', label: 'Apple' },
        { value: 'banana', label: 'Banana' },
      ],
    },
    {
      label: 'Vegetables',
      options: [
        { value: 'carrot', label: 'Carrot' },
        { value: 'broccoli', label: 'Broccoli' },
      ],
    },
  ]}
/>
```

---

## RadioButtonGroup Component

### Overview
A group of radio buttons for selecting one option.

### Props
- **`id`**: Unique identifier for the group.
- **`label`**: Text displayed above the group.
- **`options`**: Array of options with `value` and `label` properties.

### Example Usage
```tsx
<RadioButtonGroup
  id="gender"
  label="Gender"
  options={[
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' },
  ]}
/>
```

---

## Integration Notes
- Always wrap form fields with the `Form` component to manage state and events.
- Use the `onSubmit` handler of the `Form` component to process form data.
- Customize form fields by passing additional props where necessary.

### Full Example
```tsx
<Form
  initialFormData={{ username: '', password: '', gender: '' }}
  onSubmit={(data) => console.log('Submitted Data:', data)}
>
  <Input id="username" label="Username" />
  <Password id="password" label="Password" />
  <RadioButtonGroup
    id="gender"
    label="Gender"
    options={[
      { value: 'male', label: 'Male' },
      { value: 'female', label: 'Female' },
      { value: 'other', label: 'Other' },
    ]}
  />
</Form>
```

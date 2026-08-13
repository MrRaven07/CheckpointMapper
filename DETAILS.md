# Details that I needed throughout the project



---

### How does `Vue` work vs the `traditional` way.

The traditional way of programming web pages is by using:
- `index.html` (The structure)
- `styles.css` (The appearance)
- `script.js` (The behavior)

If one would want to update a specific content/element, they would have to search for all the components related to the element in all the files.

Vue changes this by introducing `Single-File Component` (SFC). So all logic for a speicific element stays in a single file `element.vue` named `component`.

At its core, Vue represents a tree of nested components.

---

### What's the difference between `components` and `views` in Vue?

A `view` and a `components` are structurally identical. They are both `.vue` files with `<script>`, `<template>` and `<style>` components.

The difference is purely organizational.
- The components represent building blocks
- The views represent entire pages

---

### What's `Vite`?

---

### What's the execution flow of the project?

Vue doesn't actually run the project, but `Vite` which is a build tool that makes everything work.

The entry point is always `index.html`. There, at the bottom, there's the `./src/main.js` file that imports `App.vue` and then opens it `createApp(App).mount('#app')`

Every time it hits a `.vue` file, it runs a Vue Compiler that translated `<template>`, `<script>` and `<style>` into raw and optimised JS and CSS.

Then it loads into `index.html` so the browser can read it.

---

!

### What's the `<script setup>` tag?

It makes the `<template>`part interactive.

---

!
### What's `<template>`?


In HTML:
```
Use <template> to hold some content that will be hidden when the page loads. Use JavaScript to display it
```
> https://www.w3schools.com/tags/tag_template.asp


Vue takes the template and use it very efficiently.



---

### Why does HTML5 uses more types of tags?

- `<main>` : There should be only a single main tag on a page
- `<header>`
- `<template>`
- `<nav>`
- `<footer>`
- `<article>`


---

### What are vue components?

All the important pieces in a webpage are being broke into multiple chunks. Like:
- Navigation bar
- Side bar
- Buttons



---

### `<style>`vs `<style scoped>`?

`<style>` is used for global styles.

`<style scoped>` is for local/encapsulated styles

---




---

### What is the purpose of the following piece of code from `MenuButton.vue` ?

```js
defineProps({
    label: String,
    icon: String
});
defineEmits(['actionClick']);

...
<button class="action-btn" @click="$emit('actionClick')">
        <span class="btn-icon">{{ icon }}</span>
        <span class="btn-label">{{ label }}</span>
...
```

`defineProps` represents the inputs, this tells Vue that the parent of the button can pass two informations: 
- the *label* (text to display in the button), 
- the *icon* (emoji, or text based icon)

Usage in `html` of the button: `<span class="btn-icon">{{ icon }}</span>` with the **_Mustache Syntax_**

`defineEmits` represents what the element will emit, meaning that an event called `actionClick` will happen and the parent has to decide what to do with it. 

Usage in `html`: `<button class="action-btn" @click="$emit('actionClick')">` , this will fire a custom actionClick event to the parent

---

### How does components work in Vue?

Vue components and root elements.




---


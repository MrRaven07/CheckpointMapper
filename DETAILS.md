# Details that I needed throughout the project


---

### What's Leaflet?

---

### What's Vue?


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
- `<aside>`


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

### What is ref in Vue?

`ref()` is a function that takes a standard JS value and wraps it in a "reactive" object. Vue assures that if that variable changes, it automatically updates and re-renders any part of the HTML template that depends on it.

`ref(null)` and Temaplate Connection

For the following `const mapContainer = ref(null);`, there will be created a Template Ref. (a reactive variable that starts with nothing)

How the connection works?
1. Declaring the variable as a ref(null)
2. Add the ref attribute to an element in HTML, `<div ref="mapContainer" class="background-map"></div>`. By doing so, the `div` element is being pushed onto the ref variable.
3. If one would want to refer to the element, they can use mapContainer.value to actually use it.

When should `ref()` be used and when not?

It should be used when:
- data needs to update the UI
- when a raw HTML element is handed to a third party library

And it shouldn't be used when the values are always constant.

---

### Difference between `ref()` and the normal HTML & JS way

Normally, in a plain HTML&JS one would do:

```html
<div id="counterBox">0</div>

<script>

let count = 0;

count = 5;

document.getElementById('counterBox').innerText = count;
</script>
```

But now, with Vue's ref

```html
<script setup>
    import { ref } from 'vue'

    const count = ref(0)

    function addOne() {
        const.value = count.value + 1;
    }

</script>

<template>
    <div>{{ count }}</div>
    <button @click="addOne">Click</button>
</template>


```


---

### What are `onMounted` and `onUnmounted`?

To understand what they are and how do they work, one needs to know the `Vue Component Lifecycle`:
- being born (created)
- physically drawn onto the screen (mounted)
- changes while the user interacts (updated)
- destroyed when the user leaves (unmounted)

Vue provides functions called "Lifecycle Hooks" that allow one to use their own code into these moments.

By wrapping the code in a lambda function and providing it into `onMounted`, it will be ran only afterwards the HTML will appear on the screen.

In detail `onMounted` is a trigger that fires the moment that the HTML component is injected into the browser's DOM (Document Object Model).


When `onMounted` should be used:
- to access Template Refs (one cannot use <variable>.value until the component is mounted)
- to fetch data from a server (so the data loads as soon as the page is visible)
- to start background tasks (starting timers or animations loops for example)



As for `onUnmounted`, it works pretty much the same, but runs right before Vue destroys the component.

For example, if one goes from `HomePageView` to `AboutView`, Vue destroys the `HomePageView` HTML out of the browser, but right before that it runs the `onUnmounted` lambda function.

It should be used for Cleanup/Demolition, so certain Memory Leaks can be avoided

---


### How does the tile map generator work? And how does the link/URL function?


```js
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png', {
        maxZoom: 15,
    }).addTo(map)
```



In the early days of the internet, if one wanted to see a map, a server had to generate one massive image (that was incredibly slow).

Nowadays, modern apps solve this by chopping the entire world up into tiny 256x256 pixel squares (Tiles).

**But how does the `s, z, x, y, or r` variables work?** (as they are not defined properly in the code)

Leaflet defines and takes care of the variables. When the URL is passed to the `L.tileLayer()`, Leaflet saves it as a template. Then, each time the user moves the map, Leaflet sees which tile needs to fill the screen and replaces the variables with the correct numbers.

The explanation of each "variable" from Leaflet:
- `{z}` (Zoom level) how close to the earth
    - At Zoom 0, the entire Earth fits into exactly 1 tile
    - At Zoom 1, Earth is chopped into 4 tiles
    - At Zoom 19, there are many many more tiles
- `{x}` (Longitude) the horizontal position of the tile in the grid
- `{y}` (Latitude) the vertical position of the tile in the grid
- `{s}` (Subdomain) web servers will only downlaod  ~6 files at the time from a single server, but because for some apps there are needed 20+ tiles, map providers set up multiple identical servers (a, b, c, d). Leaflet randomly swaps `{s}` with one of these letters to download very fast all the needed tiles.   
- `{r}` (Retina) if the user has a high-definition screen (ex: 4k monitor) Leaflet swaps this with `@2x` to ask the server for a high-resolution tile

Ex: Downtown Paris at zoom level 13:
[https://a.basemaps.cartocdn.com/rastertiles/voyager_nolabels/13/4146/2819.png](https://a.basemaps.cartocdn.com/rastertiles/voyager_nolabels/13/4146/2819.png)



---

### Open Source Map Providers? What are they?

When looking for maps, OpenStreetMap (OSM) data is free, but the servers that host and distribute the tiles are expensive.

As this project uses (for the moment) `Carto's "Voyager No Labels"` map (for the HomePage) both organizations need credit. So i created a Vue component that will be displayed everywhere a map is being shown.
`© OpenStreetMap contributors © CARTO`


---

### How does the endless map animation loop really work? Because it happens inside `onMounted` which runs exactly once

There's some sort of recursion happening inside.

Firsly, when the `onMounted` lambda function runs, it retains the panMap function variable, but doesn't yet run it. Only afterwards, when it gets to `panMap()` it will run.

The recursion happens with this line:
```js
animationFrameId = requestAnimationFrame(panMap)
```

This is a built-in feature of the browsers.

When this function happens `requestAnimationFrame(panMap)`, it will be ran before the very next frame happens on the screen. And it will be ran on and on until `onUnmounted()` will happens (that's why there is the `animationFrameId` variable with `cancelAnimationFrame(animationFrameId)`)

---


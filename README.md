# Simple Carousel Component

A lightweight, responsive image carousel built with HTML, CSS, and vanilla JavaScript.

**Live demo:** [https://mikoczanmx.github.io/simple-carousel/](https://mikoczanmx.github.io/simple-carousel/)

## Features

- Animated slide transitions using CSS transforms.
- Previous and next navigation buttons.
- Clickable dots with an active-slide indicator.
- Automatic slide changes every four seconds.
- Autoplay pauses while the pointer is over the carousel.
- Responsive layout and keyboard focus indicators.

## Usage

Open `index.html` in a browser, or serve the project using any static web server. No build step or package installation is required.

## Project files

- `index.html` — carousel markup and slide content.
- `style.css` — layout, colors, hover states, and transition animation.
- `app.js` — slide navigation, dot state, and autoplay behavior.

## Customization

### Add or replace slides

Add or replace an `<img class="slide">` element inside `.slide-track` in `index.html`. Add a matching `.dot` button inside `.dots` for each slide. The slide and dot counts should match.

### Change autoplay interval

Update `autoplayDelay` in `app.js`. The value is in milliseconds; the default is `4000` (four seconds).

### Change transition

Adjust the `transition` property on `.slide-track` in `style.css` to change the animation duration or easing.

# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Product preview card component solution](#frontend-mentor---product-preview-card-component-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Screenshot

![Desktop](./src/images/Desktop%20screenshot.png)
![Mobile](./src/images/Mobile%20screenshot.png)

### Links

https://fm-product-preview-card-gz5bws76n-pbryan9s-projects.vercel.app

- Solution URL: [GitHub repo](https://github.com/pbryan9/fm_product_preview_card)
- Live Site URL: [Vercel deploy](https://fm-product-preview-card-eosin.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

I used this challenge to practice combining styled-components with NextJS. That did present me with a couple extra headaches:

- It seems like styled-components classnames get re-computed on the client side, leading to server/client classname mismatches -- as nearly as I can tell the console error is harmless, but it shows up all the same.
- Using CSS custom properties to manage font stack was more trouble than it was worth...I didn't land on a good way to use Next's built-in Google Fonts optimizations while also feeding font stack info to styled-components thru CSS custom props.

### Continued development

Using styled-components with NextJS felt a bit clumsy. I'll keep searching for a good way to make this work. I do find styled-components is much nicer to work with than CSS modules and Tailwind, but here with SSR it's showing some of its downside.

## Author

- Website - [Patrick Bryan](https://pattyb.dev)
- Frontend Mentor - [@pbryan9](https://www.frontendmentor.io/profile/pbryan9)

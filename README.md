# CSS Gradient Animation

## Using a shared CSS property to synchornize animation.
## Background
- I wanted to combine a css3D transform with animated gradients to simulate a dynamic light source.
  - During the project, I found that the gradient animations were getting out of synch with the rotateY transform.
- My solution was to animate a single scaler property whose value could be inherited.
  - This enabled a centralized animation property to be assigned to the top-most div, giving child nodes access to the updating scaler value.
  - Instead of defining multiple @keyframes definitions, the scaler can be used in a calc function to derive the corresponding value (e.g., a percentage, pixel offset).



https://github.com/user-attachments/assets/5ffae42f-26cb-42d3-adbb-90ea5bb514e8


## Running Locally

Make sure you have [Node.js](http://nodejs.org/) installed.

```sh
git clone https://github.com/patrick-s-young/css-gradient-animation.git # or clone your own fork
cd css-gradient-animation
npm (to install)
npm run dev

```




## Overview
- In animation.css, the --scaler property is set to inherit and the @keyframes define the scaler min/max:

```
/* animation.css */

@property --scaler {
  syntax: '<number>'; 
  inherits: true;   
  initial-value: 0;  
}

@keyframes scalerKeyframes {
  0% {
    --scaler: 0;
  }
  100% {
    --scaler: 100;
  }
}
``` 
- In calcualtor.css, the scalerKeyframes animation is started in the top-level div:
```
/* calculator.css */
@import '../animation.css';

.calculator .calculator__panel-top {
  animation: scalerKeyframes 8s ease-in-out infinite alternate;
  transform: rotateY(calc(1deg * (-30 + var(--scaler) * 60/100)));
  background-image: linear-gradient(90deg, rgba(117, 117, 117, 0.2) 0%, rgba(219, 219, 219, .8) calc(1% * var(--scaler)), rgba(117, 117, 117, 0.2) 100%), url('/brushed-metal-600x428.jpg');
  box-shadow: calc(1px * (50 - var(--scaler) * 1)) 1cqmax 20px 10px rgba(0, 0, 0, 0.1);
 ...
 }
```
- Then descendent divs use --scaler to drive their animations:
```
/* keyPad.css */
@import '../animation.css';

.keypad button {
  background-image: linear-gradient(90deg, rgba(163, 163, 163, 0) 0%, rgba(255, 255, 255, .7) 
    calc(1% * var(--scaler)), rgba(163, 163, 163, 0) 100%);
   ...
 }
```

```
/* display.css */
@import '../animation.css';

.display {
  background-image:   linear-gradient(90deg, rgba(117, 117, 117, 0.2) 0%, rgba(242, 26, 26, 0.45) calc(1% * var(--scaler)), rgba(117, 117, 117, 0.2) 100%);
  ...
 )
```
## Authors

* **Patrick Young** - [Patrick Young](https://github.com/patrick-s-young)

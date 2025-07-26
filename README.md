# CSS Gradient Animation


https://github.com/user-attachments/assets/a402a5d3-ee76-4b60-806f-2df569dc9e28



Refactor CSS to use shared scaler property to synchronize gradient animation. 
- In animation.css, the --scaler property is set to inherit:

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
- In calcualtor.css, the --scaler animation is started in the top-level div:
```
/* calculator.css */
@import '../animation.css';

.calculator .calculator__panel-top {
  animation: scalerKeyframes 8s ease-in-out infinite alternate;
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

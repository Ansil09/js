# Projects related to DOM

# Solution code

## project 1

```javascript
console.log("Ansil");

const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === "white") {
      body.style.background = e.target.id;
    }
    if (e.target.id === "blue") {
      body.style.background = e.target.id;
    }
    if (e.target.id === "yellow") {
      body.style.background = e.target.id;
    }
    if (e.target.id === "green") {
      body.style.background = e.target.id;
    }
    if (e.target.id === "red") {
      body.style.background = e.target.id;
    }
  });
});
```

# Solution code

## project 2

```javascript
console.log("Ansil");

const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === "white") {
      body.style.background = e.target.id;
    }
    if (e.target.id === "blue") {
      body.style.background = e.target.id;
    }
    if (e.target.id === "yellow") {
      body.style.background = e.target.id;
    }
    if (e.target.id === "green") {
      body.style.background = e.target.id;
    }
    if (e.target.id === "red") {
      body.style.background = e.target.id;
    }
  });
});
```



# Solution code

## project 3

```javascript
console.log("Ansil");


// const clock = document.querySelector('#clock')
const clock = document.getElementById('clock')


setInterval(function() {
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```

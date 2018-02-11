# Callback Hell vs Promises

## Instructions

- In a browser
  - Open `index.html` in a browser to see the page in action
  - Open the Console on your browser
  - The log messages will hint at what is happening in the background
  - Notice how it gets three random pokemon
- In your editor
  - Open `callback_hell.js` in your editor
  - Notice how each callback is nested within another callback
  - Notice how each pokemon is retrieved one after the other
- Recall
  - `$.get(url)` will return a Promise
  - use `.then()` on that promise to get the results or to handle the error
  - `.then()` also returns a promise, so you can chain another `.then()` to it
- Do the following
  - Use the Promise-version of `$.get` and chain them so as to get rid of the nested callbacks
  - Check your results by refreshing `index.html` in a browser
  - Check your browser's console that you have no errors
  - _Extra Credit_: use [`Promise.all()`][Promise.all doc] to get all three pokemon at the same time

[Promise.all doc]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all

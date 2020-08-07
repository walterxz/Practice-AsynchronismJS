# Practice-AsynchronismJS

Practice using the different methods to make asynchronism in JS.

## Callback

Function when creating it we pass a second function as a parameter.

It is recommended not to nest more than three functions.to avoid the callbackhell

## Promise
As its name implies, it promises to return an answer.

- pending: estado inicial, no cumplida o rechazada.
- fulfilled: significa que la operación se completó satisfactoriamente.
- rejected: significa que la operación falló

.then() can return another promise and thus link them

## Async/Await

Asynchronous function that waits until the promise is fulfilled to assign the value.

'Await' pause the execution of the asynchronous function.

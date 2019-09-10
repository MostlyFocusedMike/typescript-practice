# basic makeup of a function
- A normal js function is like so:

```js

function mirror(item) {
    return item
}

const mirror2 = (item) => {
    return itme
}
```

essentionally it boils down to

```plaintext

functionKeyword functionName(paremeters) {
    return value
}

```

but with typesript, you need to tell the type of the return value and parameters:

```ts
function mirror(item: string): string {
    return item;
}

const mirror2 = (item: string): string => {
    return item;
}
```

the ':' separated the name of the object and it's expected type. The tricky one is the return value type. It doesn't go at the end of the function definition, but rather after the closing parens after the parameters:

```plaintext
functionKeyword functionName(paremeter: parameterType): functionReturnValueType {
    return value
}
```

# generics
That is a pretty static function, we can only mirror strings. What if we wanted to make the accepted type dynamic? This would make our function more generic:

```ts
const mirror3 = <T>(item: T): T => {
    return item;
}

console.log(mirror3<number>(2));
console.log(mirror3<string>('hello'));
```

That weird ass <T> is essentially like a parameter for what type we'll be using. As you can see below, now when we call `mirror3` we have to include
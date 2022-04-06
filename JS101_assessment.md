```javascript
console.log("Hello World!");
```

# Variables 
## declaratios, initaialization, assignment, and re-asignment

**Variables** store information in memory so that programs can use and manipulate information. *Variables* provide a way of labeling data or associating data with descriptive names that help us and other readers understand the program. Variables can be thought of as containers for data that hold information, this data is labeled and stored in memory so a program can use it. 

A **variable** is a named area of a program's memory in space where the program can store data. Variables can typlically be changed, meaning, we can give the variable a new value. This means that in JavaScript, a variable is just a name for a particular value at a particular time.

## Adding Variables to the Current Scope

There are many ways to *create a variable* in the current scope. Variables can be created: using the `let` or `const` keywords, using the `var` keyword, defining parameters for a function (each parameter is a local variable), a function declaration creates a variable with the same name as the function, and a class declaration creates a variable with the same name as the class. 


Variables are also created when naming the arguments to a function via it's *parameters*. 

A function declaration is another way of creating variables, for every function declaration, a variable is initialized with the same function name and assigned the function. 

## Naming Variables

One of the most difficult tasks in computer programming is properly naming variables. A variable name must accurately and succintly describe the data the variable contains. Make sure that variable names are accurate, descriptive, and understandable to other readers. Variable names are often referred to as **identifiers**. 

In JavaScript, ***identifers*** refer to variable names declared by `let` and `var`, constant names declared by `const`, property names of objects, function names, function parameters, and Class names.

The term ***variable name*** includes all of these identifiers *except* property names of objects. Property names of the **global object** are included when discussing variable names. 

Note that ***not all object properties are variables; only those on the global object***. Functions and classes are actually values in JavaScript; their names are used in the same way as more traditional variables.

### Guidelines in Naming Variables

JavaScript is case sensitive so `thisvariable` is not the same as `thisVariable`. Variable names can be of any length but *must* start with a Unicode letter, an underscore (**_**), or a dollar sign (**$**). Any succeeding characters must be Unicode letters, numbers, dollar signs or underscores. Lastly, a variable name cannot be a **reserved word**.

## *Declaring and ASSIGNING Variables*

A **variable declaration** is a statement that asks the JavaScript engine to reserve space for a variable with a particular name. It can *optionally* specify an intitial value for a variable. *Variable declarations with or without an initial value, always return `undefined`*.

Variables are primarily declared using `let`, `const`, and `var` keywords. It is best to use `let` for variable declaration and `const` for constant variable declaration to declare variables unless the program we are working with uses `var` and `var` is needed to support old execution environments.

## *Variable DECLARATION*

**A variable that is declared but not initialized or assigned a value will have a value of `undefined`.** Additionally, the variable declaration itself *returns* undefined.

```js
let carName;

var carNAme;
```

In the code above, the `firstName` variable is declared but not assigned to anything. Therefore the value of `firstName` is `undefined`.  

## Variable Declaration with an *INITIALIZER*

A variable declaration can be used with an **initializer**. An **initializer** is the expression to the right of the `=` token in a variable declaration. Although it looks like assignment, it is not. **Assignment** is a stand-alone expression that gives a variable a new value and returns the value on the right-hand side of the `=` operator.

Variables have values that are not deeply-linked to each other; if one variable is changed, it does not change other variables with the same value.  

```js
let carName = 'Viper';
```

In the code above, the `carName` variable is declared with an **initializer**. The string `'Viper'` is now stored in the `carName` variable and `carName` can be used elsewhere in a program. `carName` is not permanently tied to the string `'Viper'`; it can be *reassigned to another value*>

**The return value of an assignment is the value on the right hand-side of the `=` operator BUT declarations with or without an initial value always return `undefined`.**

#### `=` 

When `=` is used in a declaration, the `=` is a synctactic token that tells JavaScript that an initial value will be supplied for the variable being declared.

When `=` is used in an assignment, `=` is called an **asignment operator**.

## Declaring Constants `const`

The **`const`** keyword allows us to declare and initialize **constant** identifiers. Constants have **an immutable binding** to their values meaning **constants cannot be assigned a new value**. Once a constant is declared, it will continue to have that value until the constant is no longer needed. 

A *standard convention* when naming constants is to use all uppercase letters and digits in the name, if the name has multiple words it is best to use underscore to separate the words.

*`const`* declarations **require** a value so a `SyntaxError` will be raised when an initializer is missing in a `const` declaration.

### Declaring `var`

The traditional way to declare variables in JavaScript is using the **`var`** keyword. 

Declaring a variable with the `var` keyword *at the top level of a program creates a property on the global object* which may lead to conflicts and bugs. Declaring variables with the `let` keyword alleviates this issue; variables declared with the `let` keyword do not add a property to the global object or any other object. 

If a variable is declared with the `var` keyword *inside a function*, the variable is **not** stored as property of the global object or any other object, it is function-scoped.

## *REASSIGNMENT*

If you re-declare a JS variable, it will not lose its value. (NOTE: you cannot re-declare a variable with `let` or `const`) Reassignmnet *creates a completely new value or object* and changes the variable so it references the new item. The reassignment **does not change** any other variable that may be referencing the original item -- the other variables still reference the old item. 

/////////////////////////////////////////////////////////

 # Scope

 # Variable Scope: `let`, `const`, `var`

A variable's **scope** determines where it is available in the program; the location where a variable is declared determines its scope. 

## Block Scope

In JavaScript, variables declared with the **`let`** or **`const`** keyword are **block-scoped**. 

A **block** is a related set of JavaScript statements and expressions between a pair of curly braces **`{}`**. 

**Block-scoping** occurs when `let` or `const` are used to declare a variable within a block which confines the variable's scope to that block. The code inside a *block scope* can access variables declared in the outer scope.  Because variables with **block scope** are only visible within the block, where they are declared, they **cannot** be accessed outside of the block. 

A block-scoped variable is only visible within the block where it is declared. 

A `Reference Error` occurs when a local variable is used (called?) outside of it's scope. 

Note: Both function and block scopes are called **local scopes**.

## Common Gotcha (global object)

**Undeclared variables** are variables that are declared *without* `let`, `const`, `var`, or `function`. Undeclared variables become a property of the global object and are available for use anywhere in a program. This means that undeclared variables have *global scope* meaning they ignore *block* and *function* scope entirely.  

## What is ***not*** a block?

A **block** is a related set of JavaScript statements and expressions between a pair of curly braces **`{}`**. A **block** is usually refers to executable code between braces (including function bodies). 

Yet, not everything between curly braces is technically a block. The curly braces that surround an **object literal** does not define a block. The curly braces that surround a function body *technically* do not define a block although it is convenient to think of function bodies as blocks.

```js
{
	let carName = 'Viper';
	console.log(carName);
	// this is a block
}

// Conditional statement
if (name) {
	// this is a block
}

// while loop

while (name !== 'Beau') {
	// this is a block
}

function greeting() {
	// Tehnically not a block, but can be treated as one.
}

let details = {
	// This is NOT a block
	name: 'Adrienne',
	age: '24',
	location: 'Boerne',
}
```

Blocks appear in conditional (`if...else`), `while`, `do...while`, `for`, `switch`, `try...catch` statements or by themselves. 

Although function bodies are tehcnically not blocks, we treat function bodies as blocks.
  * Blocks: is the code found inside a set of curly brackets { }
  * Global Scope : varaibles are declared outside of blocks, can be accessed by any code in the program
  * Block Scope: when a variable is defined a block which is only accessable to the code weithin the curly braces { }

//////////////////////////////////////////////////////

# Objects vs. Primitives
| Primitive           | Objects           |
|---------------------|:-----------------:|
| strings             | simple objects    |
| numbers             | arrays            |
| booleans            | dates             |
| null                | functions         | 
| undefined
| bigints
| symbols
* primitive values are always immutable, they dont have parts that change. You literally have to code to reassign it which would give it just an entirley new value like even 0 + 0 = 0, but that last 0 is a new value!

  ### What things arent objects or primitives?
    * variables and other identifiers such as function names
    * statements such as if, return, try, while, and break
    * keywords such as new, function, let, const, and class
    * comments
    * anything else that is neither data nor a function

    ### 7 Fundamental Data Types                      
  * Number
  * String
  * Boolean
  * Null
  * Undefined
  * Symbol
  * Object


# Explicit/Implicit Coercions 

## Explicit Primitive Type Coercions

**Explicit Ceoercion/Conversion** can be used to convert ***primitive*** JavaScript values into values of different types. Because primitives are immutable, JavaScript doesn't actually convert values: instead it *returns a new value of the proper type*. 

Explicit Coercion lets a programmer decide what to coerce in order to change a string to a number, for example. Explicit coercion functions include: **`Number()`**, **`parstInt()`**, **`parseFloat()`**, and **`String()`**.
##
  * The diffrence between explicit and implicit coercion is that explicit coercion lets you decide what you want to do, whereas implicit coercion lets the engine chose
  
  **Implicit Type Coercion** happens when you perform an operation with two diffrent value types and coerce them to have the same value type. Although seemingly convenient, this flexibility makes bugs to likely occur in code and can go undetected for a long period of time, becomes evident in a different part of the program and makes JavaScript debugging challenging. The following are common *implicit conversions* in JavaScript which should be avoided:

### The Plus `+` Operator

The **unary plus operator** converts a value into a number.

```js
+('123')                  // 123
+(true)                   // 1
+(false)                  // 0
+('')                     // 0
+(' ')                    // 0
+('\n')                   // 0
+(null)                   // 0
+(undefined)              // Nan
+('a')                    // Nan
+('1a')                   // Nan
```

The **binary plus operator** (2 operands) will either add numbers or concatenate strings. 

When both operands are a combination of numbers, booleans, `null`'s, and `undefined`'s, they are converted to numbers and added together.

```js
1 + true                  // 2
1 + false                 // 1
true + false              // 1
null + false              // 0
null + null               // 0
1 + undefined             // NaN
```

When one operand is an object (including arrays and functions), both operands are converted to strings and concatenated together.

```js
[1] + 2                   // "12"
[1] + '2'                 // "12"
[1, 2] + 3                // "1,23"
[] + 5                    // "5"
[] + true                 // "true"
42 + {}                   // "42[object Object]"
(function foo() {}) + 42  // "function foo() {}42"
```

## *BEST PRACTICES*
* always use explicit type coercions
* always use strict equality and inequality operations

-Two exceptions

* Dont use string( ) or to String( ) inside ${...} template literals
* Feel free to use the unary + operator to convert strings to numbers

//////////////////////////////////////////
# Object Properties

Objects are containers for *data* and *behavior*. The data consists of named items (keys) with values; these values represent the *attributes* of the object. The *associations* between a name (key) and a value are called **properties**. To get the value of an object property, append a single dot followed by the property name to the objects name. We can also set a  new value for a property with *assignment*.

### Accessing Object Properties 

```js 
objectName.property       // person.age

objectName["property"]   // person["age"]

objectName[expression]  // x = "age"; person[x]  <--- the expression must evaluate to a property name
```

////////////////////////////////////////////

# Mutability vs. Immutability vs. const

**Primitive values** are **immutable** meaning they cannot be modifed. Operations on these values will return a *new* value of the same type.

**Objects** are **mutable** meaning they can be modified without changing their identity. Objects contain data inside themselves, it is the inner data that can be changed.

////////////////////////////////////////////////
# Loose and Strict Equality

### Strict Equality Operators 

The **`===` strict equality operator**, also knows as the **identity operator**, returns `true` when the operands have the same *type* and *value*, `false` otherwise. For **strings** to be *strictly* equal, both strings must have the exact same value.

The **`!==` strict inequality operator** returns `false` when the operands have the same type and value, `true` otherwise.

### Non-Strict Equality Operators

The **non-strict equality**, also known as the **loose equality** operator work the same as the strict equality operators *when both operands are the same type*. If the operands are of different types, JavaScript will implicitly coerce them to the same type before comparing them.

- When one operand is a string and the other is a number, the string is converted to a number.
- When one operand is a boolean, it is converted to a number.
- When one operand is `null` and the other is `undefined`, the non-strict operator always returns `true`.
- When both operands are `null` or `undefined`, the return value is true.
- When one oeprand is `NaN`, the non-strict operator returns `false`

```js
'2' == 2          // returns `true`  => '2' is coerced to a number
true == 2         // returns `false` => `true` is coerced to number 1 ??? 
null == undefined // returns `true`  => this is a rule.
null == null      // returns `true``
undefined == undefined  // returns `true``
NaN == 2          // returns `false`
```
  Strict equality operators:
  * ===
  * !==

"Loose" or non-strict equality operator
  * ==
  * !=

////////////////////////////////////////////////////////
# arguments object vs rest parameters
argument object

The arguments object is an Array-like local variable available inside all Functions and contains all of the arguments passed to the Function regardless of how many arguments provided or how many arguments the Function's definition includes.

arguments is not a real array but an array-like local variable. We can access argument values using bracket notation and arguments has a length property. That is where the similarities between arguments and an actual array end.

Creating an Array from the arguments object
let args = Array.prototype.slice.call(arguments);

When slice is applied to the arguments object, it creates an Array that contains the same values as those present in arguments.

Rest Parameters
rest parameters ...args tells JavaScript to expect an arbitrary number of arguments (0 or more) and to stick the in the array specified by args. The array used in rest parameters is an actual array, not array-like. The name is not fixed, meaning any valid name except for arguments can be used. rest parameters can also be mixed with other named parameters.

Note It is best to use rest parameters over the arguments object unless there is a limitation by project requirements.

_______________________________________________________
# Strings

In JavaScipt, a **`string`** is a *sequence of characters* and is the data type used to *represent text*. String values do not have a size limit and can contain any amount of text. JavaScript uses **zero-based** indexing for strings; the first character has an index of 0, the second an index of 1 and so on.

String **literals** can be written with either single or double quotes; quotes are *synctactic components* and are not part of the string value.

If a single or double quote character needs to be part of a string's value without JavaScript treating it as syntax, we can escape the quotes or find a way to include that quote character. We can include single quotes within a string by using double quotes around the entire string or vice versa, we can include double quotes within a string by using single quotes around the entire string.

```js
"She said, 'Hi there'!"     //  with double quotes
'She said, "Hi there"!'     //  with single quotes
'She said, \'Hi there!\''   //  with single quotes and escaping
"She said, \"Hi there!\""   //  with double quotes and escaping
``` 

The **escape character (`\`** tells the computer that the next character is *not synctactic* but part of the string; escaping prevents JavaScript from seeing it as the end of a string. 

#### String Methods

* **`String.prototype.indexOf()`**
  * This method returns the numeric index of a character or substring of characters within a string. If the search character or substring doesn't exist, returns -1.
* **`String.prototype.lastIndexOf()`**
  * This method returns the index of the last occurrence of a character or substring. Returns -1 if the search character or substring doesn't exist.
* **`String.prototype.replace()`**
  * This method performs a substitution operation on the original string, and returns the result as a new string. By default, replace substitutes the first occurrence of the substring or regular expression pattern given by the first argument with the value specified by the second argument. replace does not modify the original string.
  * Note that this only replaces the first s. To replace every instance s, we must use a regular expression instead of a String. Regular expressions can get complicated, but in many cases you can just replace the quote characters with forward slash characters (/) to convert the search string to a regular expression. If you then append a g to the regular expression, replace will replace every matching substring with the replacement value.
* **`String.prototype.substring()`**
  * substring extracts and returns a portion of the original string that lies in the range specified by its two numeric arguments. The arguments provide the starting and ending indexes of the string you wish to extract from the original string. The extracted string starts with the character at the smaller index of the two arguments, and ends just before the character at the larger index of the two values. 

#### Formatting Special Characters with Escape Sequences

*Strings* can hold any character in the UTF-16 character set, providing thousands of different characters. To format characters, we need special handling by using **escape sequences**. For example, to format newline characters, we need to use the **`\n`** escape sequence to specify a new line. There should not be any spaces before or after the `\n`.

Other formatiting characters that need *escape sequences* are: tab `\t`, carriate return `\r`, vertical tab `\v`, and backspace `\b`.

#### Template Literals

**Template Literals** use *backticks* ( \`) which enable **string interpolation**; string interpolation is a way to merge JavaScript expressions with strings. This is a feature of *template literals* used within backtick and it does not work in single or double quoted strings.

```js
let name = 'Adrienne';

console.log(`My name is ${name}.`)
```

JavaScript replaces the `${name}` substring with the value of the expression inside the braces; **interpolating** the expression's value.

#### Working with Long Strings  PROVIDE EXAMPLE!!!!!

String concatenation or placing a **`\`** at the end of each line provides readability when working with long string literals. The `\` tells JavaScript to ignore the following new line and concatenate the next line to the current string.

#### Character Access

Strings *act* like a collection of characters, so we can use the `String.prototype.charAt()` instance method to *access a character in a string*. The argument should be an index value for the character being accessed. **Bracket notation**, an operator in JavaScript, can also be used to access a character in a string. 

```js
'Adrienne'.charAt(1);    // returns 'd'  String.prototype.CharAt()
'Adrienne'[1];			 // returns 'd' bracket notation
```

__________________________________________________________

  # Arrays 
  * An array is an ordered list of elements; each element has a value of any type. You can define an array by placing a list of values between brackets [ ]
  * arrays are heterogenous : meaning they can have anything in them including numbers, string values, objects and even other arrays
  * Arrays are indexed lists as well as ordered lists 
  * if you want the elements of an array to be const you can use the Object.freeze method ( its important to realize the object freeze only works one level deep in the array. If your array contains nested arrays or other objects, the values inside them can still be changes unless they are also frozen)
  * indexes start at 0
  * the length property always returns a number that is one greater than the greatest used index position of the array.
  * Arrays are objects > one side effect of this is the typeOf operator doesnt return 'array' when applied to an array >> if you really need to check use Array.isArray( )
  * you can create array 'elements' with indexes that use negative or non-interger values, or even non-numeric values

  The **`push`** method adds one or more elements to the end of an array and ***mutates the caller***. It returns the array's new length. 

  ```js
  const fruits = ['Strawberry', 'Apple', 'Pineapple'];
  fruits.push('Banana');
  fruits; // ['Strawberry', 'Apple', 'Pineapple', 'Banana']
  //4
  ```

The **`concat`** method adds one or more elements to the end of an array but does not mutate the caller. It concatenates two arrays and *returns a new array that contains all of the elements from the original array with all of the argumetns passed to it*. 

#### Removing Values

To **remove** an element from an array, we can use the `length` property to reassign the length of the current array. This will remove elements that are greater than the length provided. 

```js
let arr = [1, 2, 3, 4, 5];
arr.length = 3;
arr; // [1, 2, 3]
```
The **`pop`** method removes and returns the last element of the array; it also mutates the caller.

The **`splice`** method removes one or more elements from an array. When provided two arguments, the first argument is the starting index of removal and it will remove from their up to the second argument provided inclusive. The second argument is the amount of removals wanted. 
```js
const fruits = ['Strawberry', 'Apple', 'Pineapple', 'Banana'];
fruits.splice(0,1);
fruits; ['Apple', 'Pineapple', 'Banana']
```


### Modifying Values

Elements can be added, removed and replaced in an array with the use of the **`[]`** operator and some array methods.

To **replace** an element of an array, the `[]` operator and assignment operator is used.

```js
let arr = [1, 2, 3, 4, 5];
array[1] = 8;
array;         // [1, 8, 3, 4, 5]
```

### Inserting data into an array at a negative index

Since all arrays are objects in JavaScript, it is possible to insert data into an array that uses a negative integer or non-integer/non-numeric values. This data is not considered to be an element of the array but are ***properties on the array object***. 

### Arrays are objects

**Arrays are objects**, therefore when used with the `typeof` operator, it returns 'object'. If you need to detect whether a variable references an array, use **`Array.isArray()`**.

JavaScript treats unset array elements as missing, but the `length` property includes the unset elements.

#### Object Operations / Methods  with Arrays

##### `Object.keys()`

Because Arrays are objects, the `Object.keys` method can be used to return an array's keys as an array of strings. An array's keys are its index values as well as any negative, non-integer, and non-numeric indexes. 

The `Object.keys` method treats unset values in arrays differently from those that have a value of `undefined`. **Unset values** are created when there are gaps in the array and show up as empty items. `Object.keys` does not include unset valuesl it only counts those values that have been set to some value. 

##### `in`

The `in` operator can be used to check if an Object contains a specific key; the keys in an array are the index values. 

##### `delete`

The `delete` operator can also be used on Arrays but is not the best to use in order to remove elements from an array; use `splice()` instead. 

#### Accessing an Array with a negative index

In JavaScript, using a negative index to access an array does not extract elements from the array, and it does not raise an error either. Instead, `undefined` is returned because in JavaScript, Arrays are Objects. When we use a negative index with bracket notation, we are essentially telling JavaScript to access the *property* that has a key of the negative index provided and return that property's value. 

#### Arrays Quirks

To determine whether an array is empty we can use either the `length` property or the `Object.keys()` method. The `length` property will count only the *elements* that exist in the array and will not count non-elements. The `Object.keys()` method will return an array with elements index values as well as the keys for the non-elements that exist in the array.

Notice that the number of elements in an array is not necesarrily the same as it's length because there can be gaps in an array that are empty items. A way these gaps are created is by increasing the size of the `length` property of an array without adding any values to it. Therefore `Object.keys()` will not return anything for empty items. If an empty item is accessed, JavaScript will return `undefined` but that does not mean that the value is `undefined`; it returns this because there is no value set at all. 


### Array and the `length` property

The value of the `length` property can be set *explicitly*. Similar to Objects, we can directly set the value of an array element with bracket notation. The `length` property does not only count elements (the array indexes that have been assigned values)-- the number of 'empty slots' is also included in the count. 

The array will lose data when the `length` property is set to a value *equal to or smaller than the current largest array index*. By changing an array's `length` property to a smaller value, the array gets *truncated* and JavaScropt removes all elements beyond the final element. 

By changing an array's `length` property to a larger value, the array expands to the new size. the new elements are not initialized, and instead are represented by `<empty item>`. Although JavaScript treats unset array elments as missing, the `length` property *includes the unset elements*. 

The value of the `length` property will always be a non-negative integer that is numerically one greater than the largest **array index** in the Array. 

Note:

JavaScripts built-in Array methods (`join`, `forEach`, `push`. `splice`, etc) take the value of the `length` property into consideration while performing their operations. Some methods just use the value, others set it and some do both.

### Sparse Arrays

Arrays are "sparse" meaning, the number of elements in an array is not necessarily the same as its length: there can be gaps in the array. A way to create these gaps is by increasing the size of the `length` property without addings any values to the array. 

To include the gaps, we can use `length` to determine whether the array is empty. If we need to ignore the gaps, then we have to look at the object keys to learn whether the array is emptu.  

### Array Equality (`==`/`===`)

JavaScript treats arrays as equal when they are the *same* array meaning they *must* occupy the same spot in memory. This rule applies to JavaScript objects in general. 

Two arrays with the same values are still unequal when used with the loose equality operator `==` or strict equality operator `===` because although they happen to contain the same values, the arrays themselves are different objects. They still occupy different places in memory so they are not the same array and are not equal. Either equality operator checks to see if the two arrays are the *same array*; they do not care if the arrays contain the *same content*. **Arrays are only equal when they are the same object**. 

To check if two arrays have the same elements, we can create a function that compares elements of one array with the corresponding elements in the other. The function should check right away if both arrays are of the same length and will work wihen elements in both arrays are primitive values.

When an array is compared with a non-array using the non-strict equality operator, JavaScript *implicitly* coerces the array into a string before performing the comparison.
### Array Iteration

#### `for` loop

The `for` loop is the most basic iteration technique used with Arrays. To use the `for` loop, we must know how many values are present in an array; we can use the `length` property to retrieve the length of the array. 

#### `forEach` method

**`forEach`** method for arrays iterates through an array without using a loop structure; it is one of the **array loopings** provided by JavaScript.

JavaScript has **first-class functions** which means that ***functions are values*** and functions can be assigned to variables, be passed around as arguments to other functions, and use them as return values in other functions.

Style guides often recommend iterating over an array with `forEach` rather than with a `for` loop. 

In terms of a **`forEach`** method, we can pass an anonymous function as an argument to `forEach`. When a function is passed as an argument to another function, the other function can call the function represented by the argument. That is what `forEach` does, it iterates through each element in an array, in sequence, starting with the first element. For each element, `forEach` invokes the anonymous function with the element as an argument. The anonymous function does whatever it needs to do with the argument. 

`forEach` needs a **callback** function passed to it as an argument. A **callback** function is a function that is passed to another function as an argument. They called function invokes the callback function when it runs. The `forEach` method invokes its callback once for each element, passing it the element's value as an argument. `forEach` **always returns undefined**.

Note: `forEach` performs simple iteration and returns `undefined`.

#### `for..in`

The `for..in` loop iterates through an arrays **index** values.

```js
let array = [1, 2, 3];

for (let idx in array) {
	console.log(idx)
}
// Logs:
// 0
// 1
// 2
```

#### `for..of`

The `for..of` loop iterates through an arrays elements.

```js
let array = [1, 2, 3];

for (let idx of array) {
	console.log(idx)
}
// logs:
// 1
// 2
// 3
```

#### `map` method

The **`map`** method tranforms an arrays elements and returns a new array with transformed values. 

```js
let array = [1, 2, 3];

array.map(num => num * num); // [1, 4, 9]
```

#### `filter` method

The **`filter`** method returns a new array that includes all elements from the calling array for which the callback returns a truthy value. 

`filter` iterates over the elements in array, at each iteration it invokes the callback function using the value of the current element as an argument. 

If the callback returns a *truthy* value, `filter` appends the element's value to a new array otherwise, it ignores the element's value and does nothing. 

`filter` returns the array of *selected* elements: the elements for which the callback returned a truthy value. **`filter` does not mutate the caller**. 

```js
let array = [1, 2, 3];

array.filter(num => num % 2 === 1);  // [1, 3]
```

#### `reduce` method

The **`reduce`**  method reduces the contents of an array to a single value. `reduce` takes two arguments, a callback function and a value that initialized something called the **accumulator**. The `reduce` function is not limited to computing numbers, it can also compute strings, objects, arrays etc. `reduce` does not mutate the caller. 

```js
let array = [1, 2, 3, 4, 5];
array.reduce((accumulator, element) => accumulator + element, 0)
array.reduce((accumulator, element) => accumulator * element, 1)

let strings = ['a', 'b', 'c', 'd'];
strings.reduce((accumulator, element) => {

});
```

#### `find()` method

#### `find()`

The `find()` method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function then `undefined` is returned.  

### Array Methods

The methods below are additional built-in methods that JavaScript Arrays provide. 

#### `includes()`

The `includes()` method returns `true` if an array includes a given element, `false` otherwise. Internally, `includes()` uses the `===` strict equality operator to *compare* elements of the array with the given argument. We cannot use `includes()` to check for the existence of a *nested array* or an *object* unless they are the same object or array we are looking for. 

#### `sort()`

The `sort()` method rearanges the elements of an array in sequence returning a sorted array. This method mutates the caller and is destructive. 

#### `slice()`

The `slice()` method extracts and returns a portion of the array. It can take two *optional* arguments: the first argument is the index at which the extraction begins, the second argument is where the extraction ends. 

If the second argument is omitted, `slice()` will return the rest of the array starting with the index given by the firs targument.

If no arguments are provided, `slice()` *returns a copy of the entire array*; `slice()` will return a new array with the same lements as the original. This is useful when a destructive method needs to be used on an array that we do not want to modify.

The `slice()` method can be passed a negative index as an argument to extract elements from the end of the array. We must also providingf an `endingIndex` as a second argument, otehrwise the `slice` method assumes that we want to get all elements from the provided `startingIndex` up to the end of the array. 

#### `reverse()`

The `reverse()` method reverses the order of an array; it is destructive and will mutate the caller. 

#### `splice()`

The `splice()` method will change the contents of an array by either removing or replacing existing elements and/or adding new elements in place. 

The first argument is *the index at which to start changing the array*. 

When `splice()` is used with one argument only, `splice()` will remove elements from the array starting at the given argument and return what is removed. The first argument *can be a negative index* where it will begin that many elements from the end of the array. 

The second argument is *optional* and is an integer indicating the number of elements in the array to remove from the first argument. In this case, `splice()` will return an array of the removed elements.

The third, (or more), argument is *optional* and is the element to *add* to the array beginning from the first argument. In this case, if the second argument is `0`, then the third element is only added to the array (increasing the length of the array by 1). If the second argument is `1` or more, it will add the third argument at the index provided by the first argument and then remove `n` number of elements that is given by the second argument.


### More Array Methods

* **`Array.prototype.concat()`**
    * The `concat()` method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array. 
* **`Array.prototype.indexOf`**
    * built-in method returns the index within the calling String object of the ***first occurrence*** of the specified value, starting the search at `fromIndex`. It will return `-1` if a value is not found. 
* **`Array.prototype.lastIndexOf`**
    * built-in method returns the index within the calling String object of the *last* occurrence of the specified value, searching backwards from `fromIndex`. Returns -1 if the value is not found.
* **`Array.prototype.pop()`**
    * The `pop()` method removes the **last** element from an array and returns that element. 
    This method changes the lenght of the array. It returns `undefined` of the input array is empty.
* **`Array.prototype.push() `**
    * The `push()` method adds one or more elements to the end of an array and returns the new length of the array.
* **`Array.protoype.shift()`** 
    * The `shift()` method removes the **first** element from an array and returns that removed element. This method changes the length of the array. Returns `undefined` if the array is empty.
* **`Array.prototype.unshift()`**
    * the `unshift()` method adds one or more elements to the beginning of an array and returns the new length of the array. 

__________________________________________________________
# Objects

A JavaScript **object** is a collection of *key-value* pairs where each item in the collection has a **key** and an associated **value**. An *objects* keys are in the form of a *string*; the values can be any type, including other objects.

Objects are *created* using **object literals** which can have zero or more key-value pairs. Curly braces `{}` delimit the list key-value pairs contained by the object. Each key-value pair ends with a comma (`,`), and each pair has a key, colon `:`, and a value. The comma that follows the last pair is *optional*. Although the keys are strings, the quotes are *typically* omitted when the key consists of all alphanumeric characters and underscores. The values of each pair can be of any type. 

Objects can have *multiple elements* and do not have to be in a specific order. Objects can be written in multi-line format which is especially useful for larger objects or objects that have long and/or complex values. A trailing comma can be placed on the last property in the object albeit *optional* is common practice.

In JavaScript a **property name** refers to the key of an object and can be any valid string. A **property value** (refers to the value of a key) can be any valid expression. 

```js
// Multi-line
let person = {
  name:     'Adrienne',
  age:      24,
  hobbies:  ['art', 'piano'], 
};

// Single-line
let person = { name: 'Adrienne', age: 24, hobbies: ['art', 'piano'] }
```

As with arrays, `Object.freeze` can be used with objects to freeze the property values in an object. This only works one level-deep in the object; if the object contains nested arrays or other objects, the values inside them can still be changed unless they are also frozen. 

```js
const myObj = Object.freeze({foo: "bar", qux: "xyz"})
```

### Trailing Commas

Custom objects that use ***object literal notation*** *should always use a trailing comma* when written across *multiple lines* meaning, the last property or method of an object ends with a comma (`,`).

**Simple one line literals do not need the trailing comma**.

### Accessing Property Values

Property values can be accessed by using **dot notation** or **bracket notation**. 

To access the value of a property using bracket notation, the operand inside the brackets that references the property name (key) **must** be a string value. If the operand is a number, JavaScript will coerce it to a string using the `Number.prototype.toString()` method. If the operand is a variable, JavaScript will look up the value (converting it to a string if necessary) then uses it as a key to get the corresponding value.

Note: Any value is possible as a "key" (even `null` and `undefined`).

JavaScript style guides usually reccommend using *dot notation* whenever possible. If there is a variable that contains a key's name, bracket notation must be used.

### Adding/Updating Properties

To add a new property to an object, use dot notation or bracket notation and assign a value to the result. If a named property exists, the assignment *updates* the properties value.

```js
person.height = '6 ft';       // dot notation
person.['gender'] = 'female'; // bracket notation

person.height = '5 ft';
person.height;                // "4 ft"
person;                       // { name: 'Carolina', age: 32, hobbies: [ 'dancing', 'sewing' ], height: '4 ft', }
```

### Removing properties from objects

Use the **`delete`** reserved key word to delete properties from objects. 

```js
delete person.age
delete person['gender']
delete person['hobbies']
```

**`delete`** removes the key-value pair from the object and **returns `true`** unless it *cannot delete the property (i.e. if the property is non-configurable)*.

#### `const` and Objects

If a variable declared with `const` is initialized with an object, the object that variable refers to *cannot* be changed *but* the objects properties and property values *can be changed*. A `const` decaration prohibits changing what the thing the `const` points to, but it does not prohibit from changing the content of that thing; we can change a property in a `const` object but we cannot change which object the `const` points to.

### Prototypes

JavaScript object can **inherit** from other objects. For example, when an object `a` inherits from `object b`, `b` is the ***prototype*** of `a`. Object `a` now has access to properties defined on `b` even though it doesn't define those properties itself. 

**Inheritance** lets one object use the properties defined by another object; **prototypes** implement inheritance in JavaScript. 

**`Object.create`** is a **static method** that provies a simple way to create a new object that inherits from an existing object. `Object.create` creates a new object and sets the prototype for that object to the object passed in as an argument; it is one way to use inheritance in JavaScript.

```js
let carolina = {name: 'Carolina', age: 32 };
let studentCarolina = Object.create(carolina);
studentBob.year = 'Graduate';
```

### Object Iteration

We can iterate over an objects keys, values or both; there are several ways to iterate through an object in JavaScript. 

Older versions of the ECMAScript (before ES6) do not guarantee the iteration order for an object's property keys. 

Modern versions of the standard (ES6+) does guarantee the iteration order for an object's property keys yet the order is complex. Order is based on: the types of the property keys since strings come before symbols, the values of the keys since non-negative integers come first, and the order in which keys are added to the object. Except in the *simplest cases* the order is not as straightforward therefore it is not wise to make assumptions about the iteration order for object property keys. 

#### `for/in loop`

The **`for/in`** loop iterates over all the keys in an object. It assigns the key to a variable which is then used to access the object's values at each iteration. Bracket notation *must* be used within the loop, dot notation *cannot* be used since the variable referencing the key contains a property name. 

```js
let person = {
  name: 'Adrienne',
  age: 24,
  height: '5 ft'
};

for (let prop in person) {
  console.log(person[prop]);
}

// Adrienne
// 24
// 5 ft
```
A feature of a `for/in` loop is that it will iterate over the properties of an object's prototypes. First it will iterate over its 'own properties' and then iterate over the properties of the prototype. If we want to limit iteration to an object's **own properties** then we can use the **`hasOwnProperty`** method which will take the name of a property and return `true` if it is the name of one of the calling object's *own properties*, `false` if not. 

### Object Methods / Common Operations

Most JavaScript objects do not have an abundance of methods that can be applied. Operations on objects mostly involve iterating over the properties of an object or their values. It is common to use methods that extract the keys or values of an object and thne iterate over the resulting array. 

Object literal methods must be *called* by appending parentheses in order to be executed. Functions are first-class objects so referencing the function name without the parentheses will return the function itself not the return value of the function. 

#### `Object.keys()` static method

The **static method `Object.keys`** returns an object's keys as an array; that array can also be iterated over using any technique that works for arrays. The `Object.keys` method *returns* the object's own keys, it does *not* include any keys from the prototype objects.

#### `Object.values` static method

The `Object.values` static method extracts the values from every own property in an object to an array. 

#### `Object.entries` static method 

The `Object.entries` static method returns an array of nested arrays where each nested array has two elements: one of the object's keys and its corresponding value.

#### `Object.assign` static method

The `Object.assign` static method merges two or more objects. It mutates the first object by merging the rest of the arguments to the first object passed as an argument. Any additional arguments passed to not get mutated. 

A way to not mutate the first argument is to provide an empty object as the first argument, and the rest of the arguments will be objects that are added to the empty object. 

### Objects vs Arrays

Use an array if the data is more like a list that contains many items that are usually of the same type but can be different types too. The *most common interaction* patterns with arrays include adding elements, retrieving elements, modifying elements, removing elements, and iterating over elements. Iteration, often referred to as 'walking the list', allows us to perform complicated processing on each element of an array. *Use an array if data needs to be in a specified order*. Use an array if order matters, if a stack or queue structure is needed. 

Use an object if data is like an entity with many parts. Most interactions with objects involve "keyed" access, meaning, a key is used to add, retrieve, modify, or delete a specific data item. Because each key is associated with a specific datum, the term "associative array" is used to refer to objects. Use an object to access values based on the names of those values; use an object if the individual values have names or labels.

# Other Objects

## The Math Object

The JavaScript `Math` object provides a collection of methods and values that you can use without a complete understanding of how they work.

* **`Math.abs`**
    * method returns the absolute value of the input integer; returns a positive integer.
* **`Math.ceil`**
    * method rounds any number *upward* to the next higher integer.
* **`Math.floor`**
    * method rounds any number *downward* to the next lower integer.
* **`Math.pi`** 
    * method returns the number of pi(π).
* **`Math.pow`**
    * method takes two arguments, base and exponent, returns the result. Math.pow(x,y) // returns the value of x to the power of y
* **`Math.random`**
    * returns a random floating-point number between `0` and `1`, excluding the exact value of `1`. 
* **`Math.round`**
    * method takes any decimal value and rounds it to the nearest integer.
        * if the fractional part of the number is less than `0.5`, the method rounds downwards.
        * if the fractional part of the number is equal to or greater than `0.5`, the method rounds upwards.
* **`Math.sqrt()`** 
    * method that returns the square root of a given number. 

  

  # Objects
  * Objects are complex data structures that store a collection of key-value pairs: each item in the collection has a name that we call they key and an assocaited value
  * An objects keys are strings, but the value van be anytype including other objects
  * we can create an pjbect by using object literal syntax
  * we can access a specific value of an object in two ways
    * dot notation
    * bracket notation
    ```js
    > person.name // dot notation
    ='Jane'
    
    > person['age'] // bracket notaion
    =37
    ```
  * if you have a variable that contains a keys name, you must use bracket notation
  * Key-value pairs are also called -object properties- in JS. we can also use "property" to refer to the keyname
  * of a variable declared with const is initalized with an object, you cant change what the object that variable refers to. You can, however modify that objects properties and property values.
 
 /////////////////////////////////////

# *pass-by-refrence and pass-by-value*

### pass-by-value

the concept of "pass-by-value" traditionally means that when you use a variable to pass an argument to a function, the variable will still contain the same value that was passed to the function

### pass-by-refrence

*important to remember*

- when an operation within the function mutates its argument, it affects the origonal object.

# Variables as Pointers

### Working with Primitive Values

Everytime a JavaScript program creates a new variable, JavaScript allocates a spot somewhere in memory to hold its value. With most primitive values, the actual value of the variable gets stored in this allocated memory. 

Each variable has a value, and reassigning value does not affect any other other variables that happen to have the same value. **Variables are independent when they contain primitive values**. 

Variables that have primitive values *store* those values at the memory location associated with that variable. 

### Working with Objects and Non-Mutating Operations

With objects, JavaScript doesn't store the value of the object in the same place. Instead, it allocates additional memory for the object and places a pointer to the object in the space allocated for the variable. We need to follow two pointers to get the value of our object from its variable name. 

### Summary

JavaScript *stores* primitive values in variables. JavaScript uses *pointers* for non-primitive values like arrays and other objects. 

Pointers can lead to unexpected behavior when two or more variables reference the same object; *primitive values* do not have this problem.



///////////////////////////////////////////
# Console.log vs. Retuen
  * log = synonym for printing or displaying
  ```javascript
  > console.log('Howdy');
  Howdy // print/log value
  = undefined // retuen value
  ```
  * the key diffrence between a statement and expression is that you can't capture a value from a statement 

  When the **`console.log`** method is invoked, JavaScript will write something to the console. In Node, the value is displayed in the users screen; in a browser, it is written in the Console in the Developer tools application. Bear in mind that `console.log` will log something to the console but will always *return* `undefined`.

  ////////////////////////////////////

# Truthiness vs.  Booleans

**Boolean** values represent an "on" or "off" state; **boolean literal values** are **`true`** and **`false`**. The boolean data type represents the truth-values of logic with only two possible boolean values `true` and `false`; these values have a starring role when working with comparison operators. **Comparison operators** check whether a value is equal to, less than, or greater than another value and return a boolean result of `true` or `false`. 

**Truthiness**

Every `if` statement has an expression that evaluates as true or false. However, JavaScript can coerce any value to a boolean value so the exression does not have to be one of the boolean values. Any expression can be used in a conditional expression. 

When coercing a value to a boolean, JavaScript treats the following values as false:
`false`, `0`, `-0`, `On` (The `BigInt` of zero), an empty string `''`, `undefined`, `null`, and `NaN`. Everything else evaluates to true.

The term **falsy** refers to values that evaluate to false, the term **truthy** refers to values that evaluate to true.

//////////////////////////////////////////////////////
# Functions

**Procedures** are constructs most programming languages provide that allows a programmer to extract common code to one place so that it can be used anywhere in a program. In JavaScript, **functions** refer to procedures.

**Functions** extract code and run it as a separate unit; they give us flexibility to make changes in one location. 

There are three ways to *define* a function: **function declarations**, **function expressions**, and **arrow functions**.

JavaScript functions are **first-class functions** which means functions can be treated like any other value. **All JavaScript functions are objects** so they can be assigned to variables, passed as arguments to other functions and return them from a function call. 

A **callback** is a function that you pass to another function as an argument; the called function subsequently invokes the callback function at certain times while it runs.

## *Function Declaration*

A **function declaration** (also referred to as a **function statement** *defines* a variable whose type is `function` and does not require assignment to a variable. The value of the function variable is the function itself; it obeys general scoping rules and can be used like any other JavaScript variable. 

**A function declaration creates a function and a variable with the same name as the function and assigns the function to that variable.** For every function declaration, a variable is initialized.

A **function declaration** starts with the `function` keyword followed by the *name of the function*, a *list of comma-separated parameters* in parenthesis, and a *block of statements* (the function body) *surrounded by `{}` curly braces*.  

A notable property of *function declarations* is that the function can be called *before declaring it*. 

```js
function someFunction(aVariable) {
	console.log(aVariable); // function body
}
```
## *Function Invocation and Arguments*

The standard way to invoke a function is to append `()` parentheses to its name. In JavaScript, functions are local variables that happen to have a function as a value. Functions can also require **parameters** which are a list of names (local variables) between parenthesis. 

Functions are **called** or **invoked** by typing their name and providing optional **arguments**. If a function definition does not need access to outside data, arguments are not needed. 

### Parameters vs Arguments

The names between parentheses are called **parameters** in the definition of a function and are **local variables** that are only defined locally and available within the body of the function.

**Arguments** allow us to pass data from outside the function's scope into the function so it can access the data. The **arguments** are the values passed into the function for each of those parameters. 

During execution, JavaScript makes the arguments passed to a function available to the function as local variables with the same names as the function's parameters. Note that the parameter values inside the function are also called arguments. Parameters can be thought of as placeholders while arguments refer to the values that get stored in the placeholders.

### Invoking a Function with too few or too many arguments

When a function is called with too few arguments, an error is *not* raised. An argument that isn't provided when a function is called will have a value of undefined. 

Omitted arguments take on a value of `undefined` within the function.

When a function is called with too many arguments, an error is *not* raised; instead the function *ignores* the excess arguments.

## Function `Return` Value

While we can define functions to display text on the console, we can also define functions ***to perform an operation*** and **return** a result to the call location for later use. This can be done with **return values** and the **`return`** statement. 

A function **implicitly** returns `undefined` if a function does not contain an explicit `return` statement or the `return` statement does not include a value. 

When a `return` statement is used, it returns a *specific value* from a function which is an **explicit return value**. JavaScript uses the `return` statement to return a value to the **caller**, the code that called the function. If a value is *not* specified then it returns `undefined`. 

The `return` statement *causes the function to stop running* and returns control to the caller. Unless a function raises an exception, all functions return something; if it does not execute a `return` statement, the function will return `undefined`. Note: A `return` statement will terminate the function. 

**Predicates** are functions that always return a boolean value, `true` or `false`.

### Default Parameters

A function can be defined so that it does not have to be called with an argument. We can define a function with a **default value** when the caller does not provide an argument.

```js
function greeting(words = "Welcome") {
  console.log(words + "!");
}

greeting("Howdy") // => Howdy!
greeting();       // => Welcome!
```

## *Function Expression* 

When a function declaration is saved to a variable, it is a **function expression**. A **function expression** defines a function as part of a larger expression syntax; typically a variable assignment. 

The key difference between a function declaration and a function expression is that ***a function expression cannot be invoked before it appears in a program***. 

**Any function definition that does not have the word `function` at the very beginning of a statement is a *function expression* including a function definition that is wrapped in parentheses.** 

**If a statement begins with the `function` key word, it is a function declaration; otherwise it is a function expression**

### Named Function Expressions

**Named function expressions** are only available inside the function, they can only be used from within the functions local scope. 

Although most function expressions use **anonymous functions**, **named function expressions** are useful for debugging. The named function expression can show up in a debuggers call stack, providing a valueable clue when debugging.

Named function expressions are also useful for *recursive functions*.

```js
// Function Expression
let greetings = function() {
	console.log("Welcome!");
};

greetings();

// Named Function expression

let greetings = function(greet) {
	console.log('Welcome!');
};

greetings ();
```

## *Arrow Function*

**Arrow Functions** are similar to function expressions except they use a different syntax and are a shorthand way of writing a function expression. 

One property of  **arrow functions** are *implicit returns*. A `return` statement can be omitted in arrow function *only when the function body contains a single expression*; the expression may have subexpressions but the entire expression must evaluate to a single value. If it does have two or more expressions or statements, then *a value must be explicitly returned if needed and curly braces must be used*. 

*Arrow Functions* are often used as **callback functions** and are immensly popular because they inherit the "execution context" from the surrounding code.

```js
// Single Line Arrow Function
let subtract = (a, b) => a - b;
subtract(3, 1); // => 2

// Multi-Line Arrow Function
let formattedNumber = (number) => {
	let arr = number.toString().split('');
	let first = arr.slice(0, 3).join('');
	let second = arr.slice(3, 6).join('');
	let third = arr.slice(6).join('');

	return `(${first})${second}-${third}` 
};
formattedNumber(9176853473) //=> '(917)685-3473'
```
* functions that take only a single parameter do not need that parameter to be enclosed in parenthesis. However, if a function takes zero or multiple parameters, parenthesis are required
_________________________________________________________
# First Class Value / First Class Object

**First-class value** or **first class object** refers to values that can be assigned to a variable or an element of a data structure such as an array or object. It refers to values that can be passed as an argumetn to a function. It also refers to values that can be returned as the return value of a function. 

In JavaScript, primitive values, arrays and objects meet the criteria described above. **Functions** also meet this criteria because functions can be invoked and passed around a program like any other value. Because functions can be treated as values, functions can be created that take other functions as arguments and return other functions allowingfor a more declarative and expressive style of programming. 

Functions do not have to be executed in the same scope in which it was defined, they can be called from a different part of the program. 

_______________________________________________________

# Side Effects

a function is said to have side effects if it does any of...
* it reassigns any non-local variable
* it mutates the value of any object refrenced by a non-local variable
* it reads or writes to a file, network connection, browser, or system hardware
* it raises an exception without handeling it
* it calls another function that has side-effects

-> functions should be at the same level of abstraction

-> function names should reflect WHAT they do
_______________________________________________________

# Naming Conventions (legal vs idiomatic)

Note that non-idiomatic names are not invalid names. theyre commonly used by external libraries to provide names that are easy to type yet unikely to conflict with names in other libaries.

### Avoid Magic Numbers
Its a number (or other simple value) that appears in your program without any information that describes what that number represents. *the way to avoid magic numbers is to use constants*

-> Invalid names 

|              name            |                  reason           |
|------------------------------|:---------------------------------:|
| 42ndStreet                   | begins with a number              |
| fizz-buzz                    | hyphen not allowed                |
| fizz.buzz                    | looks like a property refrence    |


* `camelCase` formatting: (use for mostly variable and function names)always begins with a lowercase letter as do the subsequent letters. When you start a new word the first letter should be capitolized. ex. `peterPiperPizza`
* `PascalCase`: use for some functions, mainly constructor functions
* `snake_case` or `kebab_case`: typically used for file names, are all lowercase with an underscore or hyphen replacing the spaces between words.
* `SCREAMING_SNAKE_CASE`: use to represent constants that serve as "unchanging configuration values" in your program. 
* Variable names cannot start with numbers
* Variable names are case sensitive, so *myName* and *myname* would be diffrent variables that have the same name using diffrent cases.
* Variable names cannot be the same as keywords

______________________________________________________

# What are Functions?
 * a function is a resuable block of code that groups togeather a sequence of statements to perform a specific task
 ### Function Declarations 
```js
function greetWorld() {
  console.log('Hello, World!');
}
```
  function declatation consitis of:
  * the function keyword
  * the name of the function, or its identifier, followed by parenthesis
  * a function body, or the block of statements required to perform a specific  task enclosed in the functions curly brackets {}

(we should also be aware of the hoisting feature in JS which allows acess to function declarations before theyre defined)

### Calling a function 
  * a function declaration does not ask the code inside the function body to run, it just declares the existance of the function, the code inside a function body runs, or executes, only when the cuntion is CALLED

### Parameters and Arguments
  * when declaring a function we can specify its parameters. parameters allow function to accept inputs and perform a tassk unsing the inputs. we use parameters as place holders for informatioin that will be passsed to the function when it is called
  ``` JS
  function calculateArea(width, height) {
    console.log( with * height);
  } 
  ```
* default parameters: allow oarameters to have a pre determined value incase there is no argument passed into the function or if the argument is -unidentified- when called
* Helper functions: are funcions that call within a functin












# not on study guide


### Good questions to ask when evaluating code
* What type of action is being performed? Method call? Callback? Something else?
* On what value is that action performed?
* What is the side-effect of that action (ex. output or destructive action?)
* What is the return value of that action?
* Is the return value used by whatever instigated the action?
* What values are passed to the callback?
* What does the method do with the return value of the callback?  
### Logical Operators
  * and operator (&&) <.... when using this both conditions must evaluate to true for the entire condition to evaluate true and exicute
  * or operator (| |)
  * not or bang operator (!) <... reverses, or negates the value of a boolean

### else if Statements
   * comes after the IF statement and before the ELSE statement (you can add as many else if statements as you like to make more complex conditionals)
    ```javascript
    ///insert example from page 43
    ```

# Errors

## Reading Error Messages

* *Slack Trace* - When presented with an error this is a wall of text that looks like gibberish

~ online sources ~

* *Search Engine* 

  * type the entire error message but make sure NOT to include terms that are specific to your computer or program
  * sometimes youll need to get specific by specifying the language.

* *Stack Overflow*

  * a rich treasure trove of answeres to common problems

* *Documentation*

  * dont hesitate to look at the MDN documentation for the core JavaScript language

## Steps to Debugging
* Reproduce the error
* Determine the boundaries "scope" of the error
* Trace the code
* Understand the problem well
* Implement a fix
* Test the fix
### Techniques for Debugging 
* line by line
* Rubber Duck
* Walking away
* Inspecting with a debugger

Although JavaScript's flexibility lets a developer use it in many ways, it also lets us write code that fails to function when run. When the JavaScript interpreter cannot continue to execute the program, it creates an ***Error*** that describes the problem and stops the program.

When an error occurs in JavaScript, we say it *throws* an error. 

A **`ReferenceError`** occurs when you try to use a variable or function is that does not exist. 

A **`TypeError`** occurs when a property is accessed on a value that does not have any properties, such as `null` or when something is called that is not a Function or trying to reassign a `const` variable.

A **`SyntaxError`** is detected by JavaScript solely from the text of a program. i.e. `function( {}` will return a `SyntaxError: Unexpected token {`.

## Preventing Errors

errors typically happen when assumptions are made in code

A **guard clause** is code that guarantees data meets certain pre-conditions *before* it gets used. They are best used when a Function cannot trust that its arguments are valid. Invalid arugments can have incorrect types, structures, values, or properties. 

*think about weather your program can violate your assumptions*

Error prevention work mostly stems from examining the assumptions inherent in code. If a program can violate assumptions, these situations are called *edge cases* because they involve values at the extreme end of the range of possible values. Consider the code's inputs when identifying edge cases; for functions, those are usually the arguments. Consider that each data type has its own set of values tha can cause undesired behavior.

A great way to identify edge cases is to plan ahead and write out the common use cases of a new Function and check how the Function handles them. 


# TypeScript Learning - Revision Guide

## 📚 What You've Learned

---

## 1. **Basic Types**

### Common Data Types
```typescript
const phone: number = 2002002000202;      // numbers
const name: string = "shyam";             // strings
const is18: boolean = true;               // booleans
```

---

## 2. **Union Types**

### String Literal Unions
Only allow specific values:
```typescript
let statusText: "success" | "failure" = "success";
```

### Number/Type Unions
A variable can be multiple types:
```typescript
function getChai(king: string | number) {
  if (typeof king === "string") {
    return "Making hello message";
  }
  return 3000 + king;
}
```

---

## 3. **Type Aliases** (with `type` keyword)

### Define Custom Types
```typescript
type order = {
  type: string;
  sugar: number;
  strong: boolean;
};

function makeTea(order: order) {
  return `Serving ${order.type} tea...`;
}
```

### Union Types in Type Aliases
```typescript
type teatype = "masala" | "ginger" | "lemon";
```

### Intersection Types (Combining Types with `&`)
```typescript
type Masala = { tealeaves: number };
type Basechai = { masala: number };

type masalaChai = Masala & Basechai;  // must have BOTH

const cup: masalaChai = {
  tealeaves: 1,
  masala: 2,
};
```

---

## 4. **Optional Properties and Readonly**

### Optional Properties (with `?`)
```typescript
type User = {
  name: string;
  bio?: string;  // this property is optional
};

const u1: User = { name: "shyam" };                    // valid
const u2: User = { name: "Ram", bio: "boy!" };       // also valid
```

### Readonly Properties
```typescript
type Config = {
  readonly appName: string;   // cannot be re-assigned
  version: number;
};

const cfg: Config = { appName: "myapp", version: 1.0 };
cfg.appName = "newapp";  // ❌ ERROR - readonly
```

---

## 5. **Type Assertion (Type Casting)**

### Using `as` keyword
```typescript
let response: any = "22222";
let numericLength: number = (response as string).length;
```

### Asserting JSON Parse Results
```typescript
const stringifiedData: string = '{"name":"shyam is a backend developer"}';

type user = {
  name: string;
};

const responseJson = JSON.parse(stringifiedData) as user;
console.log(responseJson.name);
```

---

## 6. **`any` vs `unknown`**

| Feature | `any` | `unknown` |
|---------|-------|----------|
| Accepts any value | ✅ Yes | ✅ Yes |
| Can use methods directly | ✅ Yes | ❌ No - safe |
| Requires type check | ❌ No | ✅ Yes - must guard |
| Type Safety | ⚠️ Low | ✅ High |

```typescript
let value: any;
value = "abc";
value.toUpperCase();  // ✅ works - but dangerous

let newValue: unknown;
newValue = "abc";
// newValue.toUpperCase();  // ❌ error - must check type first
```

**Best Practice:** Use `unknown` instead of `any` for safer code.

---

## 7. **Type Narrowing**

### Type Guards with `typeof`
```typescript
function getChai(king: string | number) {
  if (typeof king === "string") {
    return "Making hello message";
  }
  return 3000 + king;  // here king is definitely number
}
```

### Optional Parameters
```typescript
function getMessage(msg?: string): string {
  if (msg) {
    return "Making hello message";
  }
  return "didn't get any message!!";
}
```

### `instanceof` for Classes
```typescript
class Dominos {
  serve() {
    return "serving burger";
  }
}

class BurgerKing {
  serve() {
    return "serving burger";
  }
}

function order(orderType: Dominos | BurgerKing) {
  if (orderType instanceof Dominos) {
    return orderType.serve();  // now we know it's Dominos
  }
}
```

---

## 8. **Type Predicates (Custom Type Guards)**

### Creating Predicates with `is`
```typescript
type burger = {
  type: string;
  veg: boolean;
  nonVeg: string;
  numberOfPatty: number;
};

function receiveBurgerOrder(obj: any): obj is burger {
  return (
    typeof obj === "object" &&
    obj != null &&
    typeof obj.type === "string" &&
    typeof obj.veg === "boolean" &&
    typeof obj.nonVeg === "string" &&
    typeof obj.numberOfPatty === "number"
  );
}

function orderBurger(order: burger | string) {
  if (receiveBurgerOrder(order)) {
    return `Serving ${order.type} and ${order.numberOfPatty}`;  // order is burger
  }
  return `custom burger made of ${order}`;  // order is string
}
```

---

## 9. **Discriminated Unions (Union with Switch)**

### Using Type Property to Discriminate
```typescript
type bus = { type: "Vajra Sleeper"; amount: 3000 };
type airplane = { type: "Vistara Premium"; amount: 10000 };
type ship = { type: "titanic"; amount: 2000000; numberofpeople: 20 };

type transportation = bus | airplane | ship;

function booking(mode: transportation) {
  switch (mode.type) {
    case "Vajra Sleeper":
      return "x";
    case "Vistara Premium":
      return "y";
    case "titanic":
      return "z";
    default:
      return "not found";
  }
}
```

---

## 10. **Using `in` Operator for Type Narrowing**

### Check if Property Exists
```typescript
function bookingDotCom(mode: transportation) {
  if ("numberofpeople" in mode) {
    return "titanic is premium";  // only ship has numberofpeople
  }
}
```

---

## 11. **Function Return Types**

### Explicit Return Types
```typescript
function greetings(username: string): number | string {
  return `hello ${username}, learn typescript`;
}
```

**Benefits:**
- Documentation
- Catch errors early
- IDE suggestions

---

## 🎯 Quick Reference

### Key Concepts
| Concept | Purpose | Example |
|---------|---------|---------|
| Union `\|` | Multiple types allowed | `string \| number` |
| Intersection `&` | Combine types | `Masala & Basechai` |
| Optional `?` | Property may not exist | `bio?: string` |
| Readonly | Can't re-assign | `readonly appName` |
| Type Assertion `as` | Force a type | `value as string` |
| Type Predicate `is` | Custom type guard | `(obj): obj is Type` |
| `typeof` | Check primitive types | `typeof x === "string"` |
| `instanceof` | Check class instances | `x instanceof Class` |
| `in` | Check property exists | `"prop" in object` |

---

## 💡 Best Practices

1. **Prefer `unknown` over `any`** - More type-safe
2. **Always use explicit return types** - Better documentation
3. **Use type guards** - Don't skip type checking
4. **Use discriminated unions** - Better than nested if-else
5. **Make readonly what shouldn't change** - Prevent bugs
6. **Use type predicates** - For complex type checking logic

---

## 📝 Examples Summary

```typescript
// Basic types
const count: number = 5;

// Union types
let value: string | number = "hello";

// Type aliases
type Person = { name: string; age: number };

// Optional & readonly
type Settings = { readonly theme?: "dark" | "light" };

// Type guards
if (typeof value === "string") {
  value.toUpperCase();
}

// Type predicates
function isPerson(obj: any): obj is Person {
  return typeof obj.name === "string" && typeof obj.age === "number";
}
```

---

**Happy TypeScripting! 🚀**

function getChai(king: string | number) {
  if (typeof king === "string") {
    return "Making hellow message";
  }
  return 3000 + king;
}

// optional params
function getMessage(msg?: string): string {
  if (msg) {
    return "Making hellow message";
  }
  return "didnt get any message!!";
}

// ------------------------------ Gaurd Checking --------------------------------------
// some classes might be different but methods might be same named
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

// they might be calling this order function and send the class
//  it can be of type Dominos | BurgerKing to order and then
// inside that if instance is of Dominos that dominos class is sent then execute orderType.serve
function order(orderType: Dominos | BurgerKing) {
  if (orderType instanceof Dominos) {
    return orderType.serve();
  }
}

//  =======================================================================================
//  create custom types -- production ready

type burger = {
  type: string;
  veg: boolean;
  nonVeg: string;
  numberOfPatty: number;
};

// return type must be object with keys - type or veg or nonVeg or numberOfPatty
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
    return `Serving ${order.type} and ${order.numberOfPatty}`;
  }

  return `custom burger made of ${order}`;
}

//  =======================================================================================

type bus = { type: "Vajra Sleeper"; amount: 3000 };
type airplane = { type: "Vistara Premium"; amount: 10000 };
type ship = { type: "titanic"; amount: 2000000; numberofpeople: 20 };

type transportation = bus | airplane | ship;

function booking(mode: transportation) {
  switch (mode.type) {
    case "Vajra Sleeper":
      return "x";
      break;
    case "Vistara Premium":
      return "y";
      break;
    case "titanic":
      return "z";
      break;
    default:
      return "not found";
  }
}

function bookingDotCom(mode: transportation) {
  if ("numberofpeople" in mode) {
    return "titanic is premium max ticket is given to 2 people";
  }
}

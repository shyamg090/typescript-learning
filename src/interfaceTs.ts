type order = {
  type: string;
  sugar: number;
  strong: boolean;
};

function makeTea(order: order) {
  return `Serving ${order.type} tea with sugar level ${order.sugar} and strong is ${order.strong}`;
}

// class resto implements order {
//   type = "car";
//   strong = true;
// }

type teatype = "masala" | "ginger" | "lemon"; //----->value should be any one of this = union

// // ---------------------------------------------------------------

type Masala = { tealeaves: number };
type Basechai = { masala: number };

type masalaChai = Masala & Basechai;

const cup: masalaChai = {
  tealeaves: 1,
  masala: 2,
};

// // -----------------------------------
type User = {
  name: string;
  bio?: string;
};

const u1: User = { name: "shyam" };
const u2: User = { name: "Ram", bio: "boy!" };

type Config = {
    readonly appName : string // if try to re - assign
    version : number
}


const cfg : Config = {
    appName :  "myapp", // if you try to re - assign it will throw error 
    version : 1.0
}
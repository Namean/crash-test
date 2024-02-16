import { FSWrapper as wrapper } from "../../data-models/src/components/FSWrapper";

const reader = wrapper.reader("exmaple.txt");

const myName: string = "Desmond";

try {
  console.log(`${myName}, you did it!`);
} catch (err) {
  throw new Error("Something went wrong!!");
}

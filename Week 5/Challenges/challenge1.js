// Challenge Lesson 37

let st = "Elzero Web School";

if ((st.length * 2).toString() === "34") {
    console.log("Good");
}

if (st.slice(st.indexOf("W"), st.indexOf("W") + 1) === "W") {
    console.log("Good");
}

if (st.length !== "string") {
    console.log("Good");
}

if (typeof st.length === "number") {
    console.log("Good");
}

if (st.slice(0, 6).repeat(2) === "ElzeroElzero") {
    console.log("Good");
}
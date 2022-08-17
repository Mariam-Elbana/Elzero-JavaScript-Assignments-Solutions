// Challenge Lesson 17

let theTitle = "Elzero",
    theDesc  = "Elzero WEb School",
    theDate  =  "25/10";

let myMarkUp = `
    <div class = "card">
        <h3> Hello ${theTitle}<h3/>
        <p>${theDesc}<p/>
        <span>${theDate}<span/>
    </div>`;

document.write(myMarkUp.repeat(4));
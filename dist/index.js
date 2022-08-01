"use strict";
function pp(x) {
    console.log(x);
}
function Header(params) {
    params = params.toUpperCase();
    console.log(`--------------- ${params} `);
}
Header("type");
let TypeUnion1 = "TypeUnion";
pp(TypeUnion1);
let TypeUnion2 = 1000;
pp(TypeUnion2);
let TypeUnionExact1 = "is-num";
pp(TypeUnionExact1);
let input;
Header("type extend");
let employee01;
employee01 = {
    access: ["server", "password"],
    name: "YL",
};
pp(employee01);
Header("enum");
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READONLY"] = 1] = "READONLY";
})(Role || (Role = {}));
pp(Role.ADMIN);
pp(Role.READONLY);
Header("function implement");
function fi1(k) {
    pp(k);
}
let fi2 = (k) => pp(k);
let fi3;
let fiadd = (k, v) => {
    return k + v;
};
fi3 = fiadd;
fi3(3, 5);
fi1(10);
fi2(100);
pp(fi3(3, 5));
Header("function callback");
function handler(k, v, callback) {
    pp(v);
    return callback(k);
}
let fcb_sq = (k) => pp(k * k);
let fcb_sqrt = (k) => pp(Math.sqrt(k));
handler(4, `square root of 4`, fcb_sqrt);
handler(3, `square of 3`, fcb_sq);
Header("function rest");
function fRest(...props) {
    let value = props.reduce((prev, cur) => {
        return prev + cur;
    });
    return value;
}
let fRestres = fRest(11, 21, 31);
pp(fRestres);
Header("function generic");
function fg01(arr) {
    pp(arr);
}
fg01(["a", "b", "c"]);
Header("function from interface");
Header("interface");
let user01 = { name: "yl", age: 11 };
let user02 = { name: "leon", age: 12 };
let fri01 = (user) => pp(`${user.name} is ${user.age}`);
fri01(user01);
fri01(user02);
let I_num_array = { arr: ["abc", "def"] };
pp(I_num_array);
let IfuncPrint = {
    age: 10,
    print: (name, weight) => pp(`${name} is of age ${weight !== null && weight !== void 0 ? weight : 60}`)
};
IfuncPrint.print("yl", 100);
IfuncPrint.print("yl");
pp(IfuncPrint.age);
let I_func_generic01 = {
    log: (name, id) => pp(`id: ${id} \nname: ${name}`)
};
I_func_generic01.log("jam", 1001);
let I_extends01 = {
    age: 10,
    print: (name) => { pp(`I_extends ${name}`); },
    log: (name, id) => pp(`I_extends id: ${id} \nname: ${name}`)
};
I_extends01.log("yl", 10);
I_extends01.print("leon");
let I_extends_C01 = {
    weight: 100,
    name: "yl",
    disp: (weight, name) => { pp(`I_extends_C01 ${weight} ${name}`); }
};
I_extends_C01.disp(120, "yl");
Header("class");
class Person {
    constructor(age, name) {
        this.age = age;
        this.name = name;
    }
    disp() { return ` ${this.name} of age ${this.age}`; }
}
let ClassWithConstructor01 = new Person(13, 'yl');
pp(`ClassWithConstructor: ${ClassWithConstructor01.disp()}`);
class Engineer extends Person {
    constructor(age, name, role) {
        super(age, name);
        this.role = role;
    }
}
let engineer = new Engineer(10, "yl", "engineer");
engineer.disp();
class CL_ID {
    constructor(id) {
        this.id = id;
        this.my_id = { id: 0 };
    }
    disp() { pp(`CLASS IMPLEMENT INTERFACE: id is ${this.id} my_id is ${this.my_id.id}`); }
}
let CL_ID01 = new CL_ID(101);
CL_ID01.disp();
class CL_ID_Generic {
    constructor(id) {
        this.id = id;
        this.my_id = { id: 1 };
    }
    disp() { pp(`CLASS IMPLEMENT INTERFACE: id is ${this.id} my_id is ${this.my_id.id}`); }
}
let CL_ID_Generic01 = new CL_ID_Generic(90);
CL_ID_Generic01.disp();

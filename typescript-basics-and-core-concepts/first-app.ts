 let userName = "Max";
//  const API_KEY = "abc";

// userName = 24;
userName = "Hello";

let userAge = 32;

let isValid = true;

// string , number , boolean 


type StringOrNum = string | number;
 let theUserID : StringOrNum = "123" ;

  //  Union Type 
  let userID : string | number = "abc1";
  userID = 123; 
  
  // userID = true;
  
  
// Eorking With object 

// let user:object;
 
    type User = 
        { 
            name: string;
            age:number;
            isAdmin: boolean;
            id: string | number;
    };

    let user: User;

// user = "Max";
    user = {
        name: "",
        age : 36, 
        isAdmin : true,
        id: "bac" // 123
    }


  // user = {};
  
  // Working Woth Array Tupes
  //  let hobbies : Array<string>;
  let hobbies : string[]; // number [] , boolean []

  // {name : string ; age : number}[]

  hobbies = ["Sports" , "Cooking" , "Reading"];
  // hoppies [1, 2, 3];


  function add(a:number , b: number): number {
    const result = a + b;
    return result;
  }   
   
//   Custom Type Alises
  type AddFn = (a:number , b: number) =>  number;
  
  
  // calculate
    function calculate(
        a : number ,
        b: number , 
        calcFn : AddFn
        ) {
        calcFn(a , b);
    }

    calculate(2 , 5 , add);


// Interface
// Diclaration Mirging
    interface Credentials  { 
        password: string;
        email : string; 
    }

//   interface Credentials {
//     mode: string;
//   }


    let creds : Credentials;

    creds = {
        password: "abc",
        email: "test@example.com"
    };


    // Interfaces Vs. Custom types
    class AuthCredentials implements Credentials {
        email: string;
        password: string;
        userName: string;
    }

// Literal Types


//  type Admin = {
//     permissions: string[]
//  };

//  type AppUser = {
//     userName : string;
//  }
   
//  type AppAdmin = Admin & AppUser;


//  let admin: AppAdmin;

//  admin = {
//     permissions: ["login"],
//     userName : "Max"
//  }



interface Admin {
    permissions: string[]
 };

 interface AppUser {
    userName : string;
 }

 interface AppAdmin extends Admin, AppUser {};

 
 let admin: AppAdmin;

 admin = {
    permissions: ["login"],
    userName : "Max"
 }

// literal types
type Role = "admin" | "user" | "editor" 
   let role: "admin" | "user" | "editor" ; // "admin" , "user" , "editor"
   
    role = "admin";
    role = "user";
    role = "editor";
  


    function performAction(action : string | number, role:Role) {
        if (role === "admin" && typeof action === "string") {
        //  ...
        }
    }
// Generic Type
let roles :Array<Role>;
roles =["admin" , "editor"];


    type DataStorage<T> = {
        storage: T[];
        add: (data: T) => void;
    }

const textStrage: DataStorage<string> = {
    storage: [],
    add(data) {
        this.storage.push(data);
    }
}


const userStorage: DataStorage<User> = {
    storage: [],
    add(user) {}
} 

// Genraic Function
function merge<T ,U>(a:T , b:U) {
   return {
       ...a,
       ...b
   }
} 


const newUser = merge(
    { name : "Max"} , {age : 32});


newUser.name;
newUser.age
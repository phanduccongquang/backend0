// // // class School{
// // //     constructor(id,name ,birthYear){
// // //         this.id=id;
// // //         this.name=name;
// // //         this.birthYear=birthYear;
// // //     }
// // //     calcAge(curent){
// // //         return curent-this.birthYear;
// // //     }
// // // }
// // // class Student extends School{
// // //     constructor(id,name,birthYear,hometow){
// // //         super(id,name,birthYear)
// // //             this.hometow=hometow;
        
// // //     }
// // //     town(){
// // //         console.log(`${this.name} que o ${this.hometow}`);
// // //     }

// // // }
// // // const p1 = new School(20,"quang",2000);
// // // //truy cập phương thức và thuộc tính
// // // console.log(p1.id);
// // // console.log(p1.birthYear);
// // // console.log(p1.name);
// // // console.log(p1.calcAge(2024));
// // // //Tạo đối tượng của sub class student
// // // const s1 = new Student(21,"hung",2001,"ha noi");
// // // console.log(s1);
// // // console.log(s1.calcAge(2025));
// // // console.log(s1.town());
// // // s1.town();
// // // p1.town();
// // class shape{
// //     constructor(name){
// //         this.name=name;
// //     }
// //     dienTich(){
// //         return 0;
// //     }
// // }
// // class Square extends shape{
// //     constructor (name,side){
// //         super(name);
// //         this.side=side;
        
// //     }
// //   dienTich(){
// //     return this.side*this.side;
// //   }  
// // }
// // class Rectangle extends shape{
// //     constructor(name, dai,rong){
// //         super(name);
// //         this.dai=dai;
// //         this.rong=rong;
// //     }
// //     dienTich(){
// //         return this.dai*this.rong;
// //     }
// // }
// // const s1 = new Square("hinh vuong",5);
// // const s2 = new Rectangle("hinh chu nhat",4,6);
// // console.log(s1.dienTich());
// // console.log(s2.dienTich());
// class School{
//     constructor(ID,name,birthYear,score){
//         this.ID=ID;
//         this.name=name;
//         this.birthYear=birthYear;
//         this._score=score;
//         //Thêm dấu gạch dưới vào dưới thuộc tính để thể hiện nó ở trạng thái protected
//         // và không nên truy cập , sữa đổi trực tiếp từ bên ngoài
        

//     }
//     calcAge(current){
//         return current-this.birthYear;
//     }
//     //getter cho thuộc tính score
//     get score(){
//         return this._score;
//     }
//     // tiết lập ,sữa
//     set score(value){

//         //thêm các biểu thức logic
//         if(value>=0 && value<=100){
//             this._score = value;
//         }else{
//             console.log("diem so ko hop le");
//         }
//     }
// }
// const q1 = new School(12,"quang",2001,95);
// console.log(q1.ID);
// console.log(q1.name);
// console.log(q1.birthYear);
// console.log(q1._score);
// console.log(q1.calcAge(2024));
// console.log(q1.score);
// q1.score = 30;
// console.log(q1.score);
class Wallet{
    #pin;
    #balane;
    #isPinEntered=false;
    constructor(bankName,pin){
        this.bankName=bankName;
        this.#pin=pin;
        this.#balane=0;
    }
    //nhap ma pin
    #Checkpin(pin){
        return this.#pin===pin;
    }
    EnterPin(pin){
        if(this.#Checkpin(pin)){
            this.#isPinEntered=true;
        }else{
            console.log("pin invalid");
        }
    }
    //gửi tiền
    deposit(value){
        if(!this.#isPinEntered){
            console.log("ma pin sai");
            return;
        }
        this.#balane+=value;
    }
    //rút tiền
    withdraw(value){
        if(!this.#isPinEntered){
            console.log("ma pin sai");
            return;
        }
        if(value>this.#balane){
            console.log("so tien trog tai khoan ko du");
        }else{
            this.#balane-=value;
            console.log("rut tien thanh cong");
        }
    }
    
    get balane(){
        if(!this.#isPinEntered){
            console.log("ma pin sai");
            return;
        }
        return this.#balane;
    }
}

const w1= new Wallet("MB","1234");
w1.EnterPin("1234");
 //console.log(w1.balane);
w1.deposit(1000);
w1.withdraw(500);
// console.log(w1.balane);
// w1.withdraw(500);
 console.log(w1.balane);


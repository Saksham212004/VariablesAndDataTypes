const obj={
    age:19,
    name:'saksham mago',
    studentNumber:200551810,
    courseName:'Computer Programming',
    isPass:true

};

console.log(obj.name);
console.log(obj["age"]);
obj.age=obj.age+1
obj.name="Rohan Das"
console.log(obj.name);
console.log(obj.age);

// Practice question-1    Storing the data shown in the image of amazon product.
  
const product={
    title:"Parker Jotter Standard CT Ball Pen (Black)",
    rating:4,
    price:270,
    offer:5
};
console.log(product);

// Practice question-2   Storing the data shown in the image of Insta-profile.

const profile={
    userName:"shradhaKhapra",
    name:"Shradha Khapra",
    noOfPost:195,
    followers:569000,
    following:4,
    isFollow:true,
    bio:"Apna College | Ex-Microsoft, DRDO to educate someone is highest privilege "
}

console.log(profile);
console.log(typeof(profile));
console.log(typeof(profile.userName ));

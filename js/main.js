import {getRandomInt,getRandomPositiveFloat,getRandomArrayElement,getRandomArray} from './until.js'
const getLocation = () => ({ 
    lat:getRandomPositiveFloat(35.65000,35.70000,5),
    lng:getRandomPositiveFloat (139.70000,139.80000,5)
})

const types =[`palace`, `flat`, `house`, `bungalow`,`hotel`];
const checkins =[`12:00`, `13:00`,`14:00`];
const checkouts =[`12:00`, `13:00`,`14:00`];
const descriptions = ['с видом на море', `с видом на сад`, `уютная, с кухней` ];
const photo =[`https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg`,
`https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg`,
`https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg`
];
const feature = [`wifi`, `dishwasher`, `parking`, `washer`, `elevator`, `conditioner`];

const  getOffer =() => ({
    title:"Аренда",
    address:`${getLocation().lat}, ${getLocation().lng}`,
    price:getRandomInt(1000,100000),
    type:getRandomArrayElement(types),
    rooms:getRandomInt(1,3),
    guests:getRandomInt(1,6),
    checkin:getRandomArrayElement(checkins),
    checkout:getRandomArrayElement(checkouts),
    features:getRandomArray (feature),
    description:getRandomArrayElement (descriptions),
    photos:getRandomArray(photo)
  });

const address = getLocation()
const getObject = (i) =>({
author:{avatar: `img/avatars/user-${i.toString().padStart(2, '0')}.png`},   
offer: getOffer(address),
location:address
})

const getObjects = (count) =>{
  const object = []
for (let i = 1; i <= count; i++){
  object.push(getObject(i));
  }
return object
}
 //не совпадают адрес и локаци
 
  
 


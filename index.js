/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

/* WRITE YOUR ANSWER HERE */
console.log('\n =============================EXERCISE 1 ===================================');
const numbers = [1, 2, 3, 4, 5]
console.log(numbers);
console.log('================================================================');

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/

/* WRITE YOUR ANSWER HERE */
console.log('\n =============================EXERCISE 2 ===================================');
const employee = {
    name: 'Kajal',
    surname: 'lathiya',
    email_id: 'kajalbodarya77@gmail.com',
    age: 26
}
console.log('employee details:', employee);
console.log('================================================================');

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/

/* WRITE YOUR ANSWER HERE */
console.log('\n =============================EXERCISE 3 ===================================');
employee.HasDrivingLicense = employee.age >= 18 ? true : false;
console.log("Add driving license property in employee object ", employee);
console.log('================================================================');

/* EXERCISE 4
 Remove from the previously created object the age property.
*/

/* WRITE YOUR ANSWER HERE */
console.log('\n =============================EXERCISE 4 ===================================');
delete employee.age;
console.log("delete age property in employee:", employee);
console.log('================================================================');


/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

/* WRITE YOUR ANSWER HERE */
console.log('\n =============================EXERCISE 5 ===================================');
const student = {
    fristName: 'john',
    surname: 'khan',
    email_id: 'kajallathiya@gmail.com',
}
if (employee.email_id === student.email_id) {
    console.log(`A student email address different from an employee email address`);
} else {
    console.log('student and employee both are a same email address');
}
console.log('================================================================');

/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

/* WRITE YOUR ANSWER HERE */
console.log('\n =============================EXERCISE 6 ===================================');
let customer = [
    {
        custName: 'morgan',
        totalItemCost: 30,
        shippingCosts: 0,
        totalShoppingCart: 0,
    },
    {
        custName: 'gorgan',
        totalItemCost: 45,
        shippingCosts: 0,
        totalShoppingCart: 0,
    },
    {
        custName: 'john',
        totalItemCost: 70,
        shippingCosts: 0,
        totalShoppingCart: 0,
    }
]
let shippingCosts = 10;
customer.map((obj, i) => {
    obj.totalShoppingCart = obj.totalItemCost > 50 ? obj.totalItemCost : obj.totalItemCost + 10;
    obj.shippingCosts = obj.totalItemCost > 50 ? 0 : 10;
})
console.log('customer :', customer);
console.log('==============================================================================');

/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

/* WRITE YOUR ANSWER HERE */
console.log('\n =============================EXERCISE 7 ===================================');
let discount = 20 / 100;
customer.map((obj, i) => {
    obj.totalItemCost = obj.totalItemCost - (obj.totalItemCost * discount);
    obj.totalShoppingCart = obj.totalItemCost > 50 ? obj.totalItemCost : obj.totalItemCost + 10;
    obj.shippingCosts = obj.totalItemCost > 50 ? 0 : 10;

})
console.log('Custmer get 20% discount:', customer);
console.log('==============================================================================');

/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

/* WRITE YOUR ANSWER HERE */
console.log('\n =============================EXERCISE 8 ===================================');
const car = {
    brand: 'BMW',
    model: 'M4',
    licensePlate: 'NU24 REG'
}
console.log('CAR :', car);

const newCar1 = Object.assign({}, car);
newCar1.licensePlate = 'BM34 HTG';
console.log('newCar1:', newCar1);

const newCar2 = Object.assign({}, car);
newCar2.licensePlate = 'BV54 NJG';
console.log('newCar 2:', newCar2);

const newCar3 = Object.assign({}, car);
newCar3.licensePlate = 'BM34 HTG';
console.log('newCar 3:', newCar3);

const newCar4 = Object.assign({}, car);
newCar4.licensePlate = 'HM54 HFT';
console.log('newCar 4:', newCar4);

const newCar5 = Object.assign({}, car);
newCar5.licensePlate = 'GE32 KJL';
console.log('newCar 5:', newCar5);
console.log('==============================================================================');

/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

/* WRITE YOUR ANSWER HERE */
console.log('\n =============================EXERCISE 9 ===================================');
const carsForRent = []
carsForRent.push(car, newCar1, newCar2, newCar3, newCar4, newCar5)
console.log('carsForRent:', carsForRent);
console.log('==============================================================================');

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

/* WRITE YOUR ANSWER HERE */
console.log('\n =============================EXERCISE 10 ===================================');
carsForRent.pop();
carsForRent.shift();
console.log('new carsForRent:', carsForRent);
console.log('==============================================================================');

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

/* WRITE YOUR ANSWER HERE */

console.log('\n =============================EXERCISE 11 ===================================');
console.log('type of car', typeof car);
console.log('type of car', typeof car.licensePlate);
console.log('type of car', typeof car.brand);
console.log('==============================================================================');

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/

/* WRITE YOUR ANSWER HERE */

console.log('\n =============================EXERCISE 12 ===================================');
const carsForSale = [];
carsForSale.push(newCar1, newCar2, newCar3)
console.log('carsForSale:', carsForSale);
const totalCars = carsForSale.length + carsForRent.length;
console.log(`total ${carsForSale.length} items in carsForSale array`);
console.log(`total ${carsForRent.length} items in carsForRent array`);
console.log(`total ${totalCars} items in totalCars array`);
console.log('==============================================================================');

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

/* WRITE YOUR ANSWER HERE */
console.log('\n =============================EXERCISE 13 ===================================');
for (let i = 0; i < carsForSale.length; i++) {
    console.log('Data of carsForSale:', carsForSale[i]);
}
console.log('==============================================================================');
import { title } from "process";

// Type Alias declaration
type EmployeeName = string;
type EmployeeId = number;
type EmployeePosition = string;

type Result = string | number | null;

let data: Result;

data = "Test";
data = 200;
data = null;
//data = true; // Error: Type 'boolean' is not assignable to type 'Result'

let responseData: Result = 20;

let printSum: Result = 50;


//type alias with string literals

type PaymentMethod = "cash" | "card" | "crypto";
function paymentDetails(amount: number, method: PaymentMethod) {
    console.log(`Payment ${amount} $ by ${method}`)
};
paymentDetails(100, "cash");
paymentDetails(250, "card");


//type alias in interface
type ID = string | number;
type Status = "Open" | "In Progress" | "Done";

interface Ticket {
    id: ID;
    title: string;
    status: Status;
};

const ticket: Ticket = {
    id: 1,
    title: "Send email",
    status: `Done`
};


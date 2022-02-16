export interface client{
    account?: account
    activation_Date: String
    activeLoans: Number
    activeSavings: Number
    address: String
    age: Number
    createdDate: Date
    gender: String
    id: Number
    isStaff: Boolean
    lastLoanAmount: Number
    lastModifiedDate: Date
    name: String
    noOfLoans: Number
    status: String
}

export interface account{
    accountNo:Number
    activation_Date: Date
    address: String
    age: Number
    createdDate: Date
    gender: String
    id: Number
    isStaff: Boolean
    lastLoanAmount: Number
    lastModifiedDate: Date
    name: String
    noOfLoans: Number
    status: Boolean
    originalLoan:Number
    loanBalance:Number
    amountPaid:Number

}
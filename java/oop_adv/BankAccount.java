import jdk.management.resource.internal.TotalResourceContext;
import java.util.Random;


// ● Create a BankAccount class.
// ● The class should have the following attributes: (string) account number, (double) checking balance, (double) savings balance.
// ● Create a class member (static) that has the number of accounts created thus far.
// ● Create a class member (static) that tracks the total amount of money stored in every account created.
// ● Users should not be able to set any of the attributes from the class.

class BankAccount {
    private static int numberOfAccounts = 0;
    private static int totalAssets = 0;
    private String accountNumber = "0";//random thing;
    private Double checkingBalance = 0.00;
    private Double savingsBalance = 0.00;
    private Double userTotalBalance = 0.00;


// ● In the constructor, call the private method from above so that each user has a random ten digit account.
// ● In the constructor, be sure to increment the account count.

    public BankAccount () { 
        numberOfAccounts++;
        setAccountNumber();
    }

    // GET STUFF _____________________________________________//

// ● Create a getter method for the user's checking account balance.
// ● Create a getter method for the user's saving account balance.

    public Double getCheckingBalance() {
        return checkingBalance;
    }    
    public Double getSavingsBalance() {
        return savingsBalance;
    }

    public String getAccountNumber(){
        System.out.println(accountNumber);
        return accountNumber;
    }

    public static int getnumberOfAccounts() {
        return numberOfAccounts;
    }    
    public static int getTotalAssets() {
        return totalAssets;
    }    
    // ● Create a method to see the total money from the checking and saving.
    public Double totalBalance() {
        Double userTotalBalance = checkingBalance + savingsBalance;
        System.out.println(userTotalBalance);
        return userTotalBalance;
    }    
    // ● Create a method to see the total money from the checking and saving.
    
    // SET STUFF _____________________________________________//


    private String setAccountNumber(){
        // ● Create a private method that returns a random ten digit account number.
        accountNumber = "accountnumberhere";
        // Random accountNumber.toString() = new Random(13);
        // System.out.println(accountNumber);
        return accountNumber;
    }    
    
    void setCheckingBalance(Double bal) {
        checkingBalance += bal;
        totalAssets += bal;
    }
    void setSavingsBalance(Double bal) {
        savingsBalance += bal;
        totalAssets += bal;
    }

    void setBalance (Double bal, String account) {
        if(account == "Savings") {
            savingsBalance += bal;
            totalAssets += bal;
        }    
        else if(account == "Checking") {
            checkingBalance += bal;
            totalAssets += bal;
        }    
    }        

// ● Create a method that will allow a user to deposit money into either the checking or saving, be sure to add to total amount stored.
// ● Create a method to withdraw money from one balance. Do not allow them to withdraw money if there are insufficient funds.
    public void withdrawChecking(Double bal) {
        if(checkingBalance<= 0) {
            System.out.println("You Broke Homie");
        }    
        else {
            checkingBalance -= bal;
            totalAssets -= bal;
        }    
    }    
}    


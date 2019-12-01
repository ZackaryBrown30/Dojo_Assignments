class BankAccount:
    def __init__(self, int_rate = .02, balance = 0):
        self.interest_rate = int_rate
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
        return self
    def withdrawl(self, amount):
        self.balance -= amount
        return self
    def display_account_info(self):
        print(self.balance)
        return self
    def yield_interest(self):
        self.balance += self.interest_rate * .02
         return self
# business_account = BankAccount(.03,35000)
# personal_account = BankAccount(.015,1200)
# business_account.yield_interest().withdrawl(400).display_account_info()
# personal_account.yield_interest().withdrawl(200).display_account_info()

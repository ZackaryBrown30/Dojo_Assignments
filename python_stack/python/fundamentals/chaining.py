# print("Hello World")
# name = "Zack"
# print(f"{name} Hello World")
class User:		# declare a class and give it name User
    def __init__(self, username, email, balance):
        self.name = username
        self.email = email
        self.account_balance = balance
    def make_deposit(self,amount):
        self.account_balance += amount
        return self
    def display_user_balance(self):
        print(self.account_balance)
        return self
    def make_withdrawl(self,amount):
        self.account_balance -= amount
        return self
Zackary = User('zack', 'i@y.com', 40)
Efren = User('efren','g@y.com',42)
Andre = User('andre','t@y.com', 45)
Andre.display_user_balance()
Zackary.make_withdrawl(2).make_withdrawl(2).make_withdrawl(2).make_withdrawl(2).display_user_balance()
Andre.make_deposit(2).make_withdrawl(2).display_user_balance()

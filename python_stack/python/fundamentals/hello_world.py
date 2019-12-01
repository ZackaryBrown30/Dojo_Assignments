# print("Hello World")
# name = "Zack"
# print(f"{name} Hello World")
class User:		# declare a class and give it name User
    def __init__(self, username, email, balance):
        self.name = username
        self.email = email
        self.account_balance = balance

user1= User('Zack', 'i@y.com', 40)
print(user1.email)
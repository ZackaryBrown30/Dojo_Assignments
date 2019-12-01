class Animals:
    def __init__(self, animal_type, happiness = 'bored', health = 100, name="", age = 2):
        self.animal_type = animal_type
        self.happiness = happiness
        self.health = health
        self.name = name
        self.age = age
    def feed(self):
        self.health += 10
        self.happiness += 10
        return self
    def display_info(self):
        print(f"I am a {self.animal_type} feeling {self.happiness} realatively healthy i'd even say {self.health} if on a scale of 50, I AM {self.name} and I am {self.age} years old.")
        return self
    
    # TBD Lions, tigers, bears, homies
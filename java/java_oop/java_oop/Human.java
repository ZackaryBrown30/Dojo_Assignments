class Human {

    public Human() {}

    public int strength = 3;
    public int intelligence = 3;
    public int stealth = 3;
    public int health = 100;

    public int getHealth() {
        System.out.println(this.health);
        return health;

    }

    public Human attack(Human attack) {
        attack.health -= this.strength;
        return this;
    }

}
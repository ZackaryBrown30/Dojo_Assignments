public class Bat extends Mammal {
    public int energyLevel = 300;

    public void fly() {
        System.out.println("You Hear a Giant Whooshing of bat wings");
        setEnergyLevel(-50);
    }
    public void eatHumans() {
        System.out.println("You Hear the Crunching of Bones with the squelching of melons being crushed or sliced apart and the agonized brief scream of a man");
        setEnergyLevel(25);
    }
    public void attackTown() {
        System.out.println("The town is Being Razed, you hear eerie broken sirens and the whooshing of roaring flames");
        setEnergyLevel(-100);
    }
}
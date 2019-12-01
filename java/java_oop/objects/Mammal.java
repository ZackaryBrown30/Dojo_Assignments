
public class Mammal {
    public int energyLevel = 100;
    // Attempted to make this private but was seeing errors when called upon in functions
    // CHIRS should this be kept private or public?

    public Mammal() {
        // see public Gorilla()
    }
    public int getEnergylevel() {
        return energyLevel;
    }
    public int setEnergyLevel(int energy) {
        if(energy > 0) {
        energyLevel = energyLevel + energy;
        }
        else {
        energyLevel = energyLevel - energy;
    }
    return energyLevel;
    // I have a sneaking suspicion that this is overkill but i am unsure of how else to go about altering the energyLevel variable.
    }

    public int displayEnergyLevel() {
        System.out.println("Energy level is" + energyLevel);
        return energyLevel;
        }
}
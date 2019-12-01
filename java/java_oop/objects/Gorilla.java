public class Gorilla extends Mammal {
    public Gorilla() {
        // What is going on in this funcion? Does this always have to exist? why is it used? \
        // it looks to me like its a container saying that this is an object instead of an action
    }
    public Integer throwSomething(String thing) {
        // if(this.energyLevel < 65) {
            System.out.println("Gorilla threw a "+ thing + " @ You!");
            this.setEnergyLevel(-5);
            return energyLevel;

            // utility function, identified as void, returns nothing but performs 2 actions one of which has the power to alter a variable.
            
            // }
            // else
            //     System.out.println("Gorilla Snorted loudly in contempt");
        }
        public void eatBananas() {
            System.out.println("Gorilla ate a banana in a super tough way.");
            this.setEnergyLevel(10);
        }
        public void climb() {
            System.out.println("Gorilla climbed a tree");
            this.setEnergyLevel(-10);
        }
    }
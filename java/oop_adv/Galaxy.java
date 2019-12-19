public class Galaxy extends Phone implements Ringable {
    public Galaxy(String versionNumber, int batteryPercentage, String carrier, String ringTone) {
        super(versionNumber, batteryPercentage, carrier, ringTone);

    }
    @Override
    public String ring() {
        return "ringTone";
    }

    @Override
    public String unlock() {
        return "Unlocks via Finger Print";
    }

    @Override
    public void displayInfo() {
    }
}

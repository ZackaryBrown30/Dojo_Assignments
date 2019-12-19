public class IPhone extends Phone implements Ringable {
    public IPhone(String versionNumber, int batteryPercentage, String carrier, String ringTone) {
        super(versionNumber, batteryPercentage, carrier, ringTone);
    }
    @Override
    public String ring() {
        return ("iPhne" + this.getVersionNumber() + "BrRrRrRrRrRrRringg");
    }
    @Override
    public String unlock() {
        return ("Unlocks via Face Recognition");
    }
    @Override
    public void displayInfo() {
        System.out.println("Version Number: " +this.getVersionNumber()+ ",Battery Percentage:" + this.getBatteryPercentage()+ ", Carrier: " +this.getCarrier()+ ", Ring Tone: " + this.getRingTone());
    }
	@Override
	public void ring(String ring) {
		// TODO Auto-generated method stub
		
	}
	@Override
	public void unlock(String unlock) {
		// TODO Auto-generated method stub
		
	}
}

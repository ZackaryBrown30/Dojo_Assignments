public abstract class Phone {
    private String versionNumber;
    private int batteryPercentage;
    private String carrier;
    private String ringTone;
    public Phone(String versionNumber, int batteryPercentage, String carrier, String ringTone){
        this.versionNumber = versionNumber;
        this.batteryPercentage = batteryPercentage;
        this.carrier = carrier;
        this.ringTone = ringTone;
    }

    public abstract void displayInfo();

    // Getters // -------------***--------------//
    void setVersionNumber(String version) {
        this.versionNumber = version;
    }
    void setBatteryPercentage(int battery) {
        this.batteryPercentage = battery;
    }
    void setCarrier(String isp) {
        this.carrier = isp;
    }
    void setRingTone(String tone) {
        this.ringTone = tone;
    }
    //Getters // ----------------------------//

    //SETTERS // ------------***-----------------//

    public String getVersionNumber() {
        return versionNumber;
    }
    public Integer getBatteryPercentage() {
        return batteryPercentage;
    }
    public String getCarrier() { 
        return carrier;
    }
    public String getRingTone() {
        return ringTone;
    }

	public String ring() {
		// TODO Auto-generated method stub
		return null;
	}

	public String unlock() {
		// TODO Auto-generated method stub
		return null;
	}

    //SETTERS // --------------------------//
}
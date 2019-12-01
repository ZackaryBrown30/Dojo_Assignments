public class StringManipulationTest {
    public static void main(String[] args) {
        StringManipulation iD = new StringManipulation();
        String trimAndConcat = iD.trimAndConcat("   hello", "   Earl");
        System.out.println(trimAndConcat);
    }
}
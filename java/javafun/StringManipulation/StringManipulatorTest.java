public class StringManipulatorTest {
    public static void main (String[]args) {
        StringManipulator iD = new StringManipulator();
        String trimAndConcat = iD.trimAndConcat( "   Hello ", "Earl   ");
        System.out.println(trimAndConcat);
    }
}

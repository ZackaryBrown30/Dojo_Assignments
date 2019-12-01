import java.util.ArrayList;
import java.util.Set;

public class BugCatcher {
    public static void main(String[] args) {
        ArrayList <Object> myList = new ArrayList < Object > ();
        myList.add(13);
        myList.add("hello World");
        myList.add(42);
        myList.add("Stuff");
        for (int i = 0; i < myList.size(); i++) {
            try {
                Integer castedValue = (Integer) myList.get(1);
            } 
            catch (Exception e) {
                System.out.println("At index " + i + "the object" + myList.get(i) + "threw an exception.");
                System.out.println(e);
            }
        }
    }
}

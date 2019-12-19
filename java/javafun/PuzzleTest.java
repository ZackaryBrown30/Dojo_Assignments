import java.util.ArrayList;
import java.util.Collections;
import java.util.Random;
public class PuzzleTest {
    public static void main(String[] args) {

        PuzzleJava p = new PuzzleJava();
        ArrayList<Integer> numbers = new ArrayList<Integer>();
        numbers.add(5);
        numbers.add(4);
        numbers.add(3);
        numbers.add(2);
        numbers.add(1);

        int[] myArray = {3,5,1,2,7,9,8,13,25,32};
        String[] nameArray = {'Nancy', 'Jinichi', 'Fujibayashi', 'Momochi', 'Ishikawa'};
        p.printSum(myArray);
        System.out.println("Next fn");
        p.iterateArray(myArray);

        // Collections.shuffle(numbers);
        // System.out.println(numbers);
        // Collections.sort(numbers);
        // System.out.println(numbes);

        // Radnom r = new Random();
        // System.out.println(r.nextInt());
        // System.out.println(r.nextInt(5));
    }
}
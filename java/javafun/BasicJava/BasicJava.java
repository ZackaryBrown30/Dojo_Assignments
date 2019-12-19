import java.util.ArrayList;
import java.util.Arrays;
// ArrayList<Integer> myArray = new ArrayList<Integer>();

public class BasicJava {



    public void printOneTo255(){
        for (int i = 1; i < 256;i++) {
            System.out.println(i);
        }
    }

    public void oddsTo255() {
        for (int i = 0; i < 256;i++) {
            if(i % 2 != 0)
                System.out.println(i);
        }
    }

    public void printSum() {
        int sum = (int) 0;
        for (int i = 0; i < 25;i++) {
            sum += i;
            System.out.println("New Number " + i + " Sum: " + sum);
        }
        System.out.println(sum);
    }
    public void iterateArray(int[] myArray ) {
        for(int i = 0; i < myArray.length; i++) {
            System.out.println(myArray[i]);
        }
    }
    public void findMax(int[] myArray) {
        int max = myArray[0];
        for(int i = 0; i < myArray.length; i++) {
            if(myArray[i] > max) {
                max = myArray[i];
            }
        }
        System.out.println(max);
    }
    public void getAverage(int[] myArray) {
        int average = 0;
        for(int i = 0; i < myArray.length; i++) {
            average += myArray[i];
        }
        System.out.println(average/myArray.length);
    }
    public void arrayOdd(int[] myArray) {
        new arr = [];
        for (int i = 1; i < 256; i++) {
            if (i % 2 == 1 ) {
                arr.push(i);
            }
        }
        System.out.println(arr)
    }

    
}
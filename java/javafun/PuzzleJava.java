import java.util.ArrayList;
import java.util.Collections;
import java.util.Random;

class PuzzleJava {

    public void iterateArray(int[] myArray){
        for(int i = 0; i < myArray.length; i++) {
            if(myArray[i]>10)
            System.out.println(myArray[i]);
        }
    }
    public void printSum(int[] myArray) {
        int sum = (int) 0;
        for (int i = 0; i < myArray.length;i++) {
            sum += myArray[i];
        }
        System.out.println(sum);
    }

}
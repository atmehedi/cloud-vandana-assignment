package java;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class ShuffleArray {
    public static void main(String[] args) {
    Integer[] numbers = {1, 2, 3, 4, 5, 6, 7};
      List<Integer> list = Arrays.asList(numbers);
        Collections.shuffle(list);
        numbers = list.toArray(new Integer[0]);
        for (Integer num : numbers) {
            System.out.print(num + " ");
        }  
    }
}

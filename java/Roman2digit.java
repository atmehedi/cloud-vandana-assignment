package java;
import java.util.HashMap;
import java.util.Scanner;

public class Roman2digit {
    public static void main(String[] args) {
        HashMap<Character, Integer> map = new HashMap<>();
        map.put('I', 1);
        map.put('V', 5);
        map.put('X', 10);
        map.put('L', 50);
        map.put('C', 100);
        map.put('D', 500);
        map.put('M', 1000);

        int result = 0;
        int prevValue = 0;
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a Roman numeral: ");
        String roman = scanner.nextLine().trim();
        scanner.close();
        for (int i = roman.length() - 1; i >= 0; i--) {
            int temp = map.get(roman.charAt(i));
            if (temp < prevValue) {
                result -= temp;
            } else {
                result += temp;
            }
            prevValue = temp;
        }
        System.out.println(result);
    }
}

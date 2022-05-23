import java.util.*;

public class main {
    public static void main(String[] args){
        // int[] integers = {1, 2, 3, 4, 5};
        // integers[0] = 10;
        // for(int numbers: integers){
        //     System.out.println(numbers);
        // }
        String[] shoppingArr = {"pizza", "vegetables", "eggplant"};

        ArrayList<String> shoppingList = new ArrayList<String>(Arrays.asList(shoppingArr));
        shoppingList.add("carrots");

        // for(int i=0; i<shoppingList.size(); i++){
        //     System.out.println(shoppingList.get(i));
        // }
        for(String veggie: shoppingList){
            System.out.println(veggie);
        }

        Person bob = new Person("Bob", "Smith", 16, 5, "math");
        Person gregory = new Person("Gregory", "Churchill", 20, 20, "Quantum Mechanics");   
        

        System.out.println(bob.age);
        System.out.println(bob.firstName);
        System.out.println(bob.lastName);
        System.out.println(bob.grade);
        System.out.println(bob.favoriteSubject);
    }
}
import java.util.Arrays;

public class test {
    public static void main(String[] args) {
        String[][] battleshipField = new String[10][10];

        for (int r=0; r<battleshipField.length; r++){
            for(int c = 0; c<battleshipField[0].length; c++){
                battleshipField[r][c] = "(" + r + "," + c + ")";
            }
        }
        // for (int r=0; r<battleshipField.length; r++){
        //     for(int c = 0; c<battleshipField[0].length; c++){
        //         System.out.print(battleshipField[r][c]);
        //     }
        //     System.out.println(" ");
        // }
        // for (String[] row: battleshipField){
        //     for(String coordinate: row){
        //         System.out.println(row);
        //     }
        // }
    }
}

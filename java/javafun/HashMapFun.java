import java.util.HashMap;
import java.util.Set;


public class HashMapFun {
    public HashMap<String,String> tracklist (){ 
        HashMap<String, String> songs = new HashMap<String, String>();
        songs.put("Song1","I was gonna clean my room");
        songs.put("Song2","But then I got hungry");
        songs.put("Song3","then I had to clean the dishes with the broom");
        songs.put("Song4","because I was messy");
        Set<String> keys = songs.keySet();
        for(String key : keys) {
            System.out.println(key);
            System.out.println(songs.get(key));
        }
                return songs;
            }

public main static void(String[] args){
    HashMapFun bsVariable = new HashMapFun();
    HashMap songs = bsVar.tracklist();
    System.out.println(songs.get("Song2"));

}









// public class HashMapFun {
//     public HashMap<String,String> tracklist (){ 

//         HashMap<String, String> songs = new HashMap<String, String>();
//         songs.put("Song1","I was gonna clean my room");
//         songs.put("Song2","But then I got hungry");
//         songs.put("Song3","then I had to clean the dishes with the broom");
//         songs.put("Song4","because I was messy");

// Set<String> keys = songs.keySet();
// for(String key : keys) {
//     System.out.println(key);
//     System.out.println(songs.get(key));
// }
//         return songs;
//     }

//     public static void main(String[] args) {
//         HashMapFun othervariable = new HashMapFun();
//         HashMap songs = othervariable.tracklist();
//         System.out.println(songs.get("Song1"));
//     }
// }

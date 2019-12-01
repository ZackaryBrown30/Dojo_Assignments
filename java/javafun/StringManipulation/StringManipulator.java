import java.lang.* ;
public class StringManipulator {
    public String trimAndConcat(String Str1, String Str2) {
        String bs1 = Str1.trim();
        String bs2 = Str2.trim();
        return bs1 + bs2;
    }
    public Integer getIndexOrNull(String Str3, char ch) {
        int find = Str3.indexOf(ch);
        if(find == -1) {
            return null;
        }
        return find;
    }
    public String concatSubstring(String str, int startidx, int endidx, String str4) {
        String name = str.substring(startidx, endidx);
        String newname = name.concat(str4);
        return newname;
}
}


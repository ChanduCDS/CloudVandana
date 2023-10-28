public class PangramCheck {
    public static void main(String[] args) {
        String sentence = "The quick brown fox jumps over the lazy dog";
        boolean isPangram = isPangram(sentence);
        if (isPangram) {
            System.out.println("The sentence is a pangram.");
        } else {
            System.out.println("The sentence is not a pangram.");
        }
    }

    public static boolean isPangram(String sentence) {
        boolean[] isPresent = new boolean[26];
        for (char c : sentence.toLowerCase().toCharArray()) {
            if ('a' <= c && c <= 'z') {
                isPresent[c - 'a'] = true;
            }
        }
        for (boolean b : isPresent) {
            if (!b) {
                return false;
            }
        }
        return true;
    }
}

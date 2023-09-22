# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

reposts1 = 7
# Expected output: '7 is odd'
reposts2 = 42
# Expected output: '42 is even'
reposts3 = 221
# Expected output: '221 is odd'

# Pseudo code:
# name: oddOrEven
# input: number
# output: string with string interpolation
# process: create a method with a conditional statement where if the number has a remainder of 0 after being divided by 2, (using modulo operator) it returns a string with string interpolation saying that the number is even, and elsif the number is NOT divisible by 2 with a remainder of 0, then return a string interpolated saying that the number is odd. Also create a catchall incase the input is not a number.

def oddOrEven number
    if number % 2 == 0 && number.is_a?(Integer) == true
        "#{number} is even"
    elsif number % 2 != 0 && number.is_a?(Integer) == true
        "#{number} is odd"
    else 
        'Please enter a number'
    end 
end 

# p oddOrEven(reposts1)
# p oddOrEven(reposts2)
# p oddOrEven(reposts3)
# p oddOrEven("poop")


# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# Pseudo code:
# name: deleteVowels
# input: string 
# output: string without vowels
# process: create a method where we use the built in method .delete to delete 'aeiou' and 'AEIOU'. Use it by creating a parameter string and returning that parameter with .delete. 

def deleteVowels string
    string.delete("aeiou,AEIOU")
end 

# p deleteVowels(beatles_album1)
# p deleteVowels(beatles_album2)
# p deleteVowels(beatles_album3)

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_test_case1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_test_case2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_test_case3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

# Pseudo code:
# name: isItAPalindrome
# input: string
# output: string with string interpolation
# process: use downcase and delete to make the string lowercase and delete spaces. Then assign that to a new variable called clean_string, then using conditionals check if the cleaned string is equal to it reversed, and if it is then return the string with string interpolation saying if its a palindrome or not 

def isItAPalindrome string
    clean_string = string.downcase.delete(' ')
    if clean_string == clean_string.reverse
        "#{string} is a palindrome."
    else
        "#{string} is not a palindrome."
    end 
end 

# p isItAPalindrome(palindrome_test_case1)
# p isItAPalindrome(palindrome_test_case2)
# p isItAPalindrome(palindrome_test_case3)


# WAHOOOOOO 
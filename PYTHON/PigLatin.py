# challenge link : https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/python

"""
Move the first letter of each word to the end of it, 
then add "ay" to the end of the word. Leave punctuation marks untouched.
"""

import string

def pig_it(text):
    words = text.split(" ")
    word_to_add = "ay"
    return " ".join([word[1:] + word[0] + word_to_add if word not in string.punctuation else word for word in words])



print(pig_it("Hello world !"))
print(string.punctuation)
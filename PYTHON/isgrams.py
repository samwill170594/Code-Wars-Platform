# https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/python

"""
An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
Implement a function that determines whether a string that contains only letters is an isogram. 
Assume the empty string is an isogram. Ignore letter case.
"""

def is_isogram(string):
    lower_string = string.lower()
    if lower_string == "":
        return True
    else:
        duplicate_chars =   2 in [ lower_string.count(char) for char in lower_string]
        adjacent_chars = True
        for index in range(len(lower_string)):
            if index == len(lower_string) -1:
                adjacent_chars = False
                break
            if lower_string[index] == lower_string[index+1]:
                adjacent_chars = True
                break
        return not duplicate_chars and not adjacent_chars
    




print(is_isogram("moOse"))


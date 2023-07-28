# challenge link : https://www.codewars.com/kata/602db3215c22df000e8544f0

def two_are_positive(a, b, c):
    result = [True if x > 0 else False for x in [a,b,c]]
    return result.count(True) == 2
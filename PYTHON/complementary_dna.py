# https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/python

"""
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" 
for the development and functioning of living organisms.
If you want to know more: http://en.wikipedia.org/wiki/DN
In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". 
Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. 
DNA strand is never empty or there is no DNA at all (again, except for Haskell).
"""

def DNA_strand(dna):
    characters_dna = ['A','T','C','G']
    equivalent_dna = ['T','A','G','C']
    result = ""
    for character in dna:
        if character in characters_dna:
            result += equivalent_dna[characters_dna.index(character)]
    
    return result
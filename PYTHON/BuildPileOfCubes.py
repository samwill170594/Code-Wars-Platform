def find_nb(m):
    start = 1
    result = 0
    number_cubes = 0
    while start < m:
        if result > m:
            break
        result += (start + 1) ** 3
        number_cubes += 1
        start += 1

   
    if result  + 1  - (start ** 3)== m:
        return number_cubes
    else:
        return -1

print(find_nb(91716553919377))
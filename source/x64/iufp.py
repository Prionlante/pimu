import math

def iufp(kid, quantiles):
    summ = 0
    j = 0
    for key in list(quantiles.keys()):
        for i in range(len(quantiles[key])):
            if i == 0:
                if kid[j] <= quantiles[key][i]:
                    summ = summ + math.log(i+1, 8)
            else:
                if i == len(quantiles[key])-1:    
                    if kid[j] > quantiles[key][i]:
                        summ = summ + math.log(i+1, 8)
                else:
                    if kid[j] <= quantiles[key][i] and kid[j] > quantiles[key][i-1]:
                        summ = summ + math.log(i+1, 8)
        j = j+1

    return summ/len(quantiles.keys())
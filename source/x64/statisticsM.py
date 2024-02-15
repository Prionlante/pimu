import pandas as pd
#убрать lmo lmom из центилей и среднего
def quantiles(arr):
    df = pd.DataFrame(arr)
    df.set_axis(['dta', 'mta', 'ik2', 'ogka', 'st', 'gela', 'gi', 'sada', 'dada', 
                    'pd', 'hss', 'dp', 'udobse', 'mok', 'ifi', 'vik', 'via', 'ir', 'hdd', 'do', 'mdo', 'soma', 'kdp', 'kdl', 'si'], axis='columns', inplace=True)
    needed_quantile = [.10, .15, .20, .25, .50, .75, .90, .95]
    quantiles = { 
                'dta'    :[], 
                'mta'    :[], 
                'ik2'    :[], 
                'ogka'   :[], 
                'st'     :[], 
                'gela'   :[], 
                'gi'     :[], 
                'sada'   :[], 
                'dada'   :[], 
                'pd'     :[], 
                'hss'    :[], 
                'dp'     :[], 
                'udobse' :[], 
                'mok'    :[], 
                'ifi'    :[], 
                'vik'    :[], 
                'via'    :[], 
                'ir'     :[], 
                'hdd'    :[], 
                'do'     :[], 
                'mdo'    :[], 
                'soma'   :[], 
                'kdp'    :[], 
                'kdl'    :[], 
                'si':     []
                }
    for quantile in needed_quantile:
        res = df.quantile(quantile, "index").to_dict()
        try:
            keys = list(quantiles.keys())
            for key in keys:
                quantiles[key].append(res[key])
        except Exception as e:
            print(e)
    return quantiles

def correlation(arr, method):
    df = pd.DataFrame(arr)
    return df.corr(method).to_dict()

def mean(arr):
    df = pd.DataFrame(arr)
    return df.mean().to_dict()

def minStat(arr):
    df = pd.DataFrame(arr).drop([i for i in range(6)], axis=1)
    df.set_axis(['dta', 'mta', 'ik2', 'ogka', 'st', 'gela', 'gi', 'sada', 'dada', 
                    'pd', 'hss', 'dp', 'udobse', 'mok', 'ifi', 'vik', 'via', 'ir', 'hdd', 'do', 'mdo', 'soma', 'kdp', 'kdl', 'si', 'iufp'], axis='columns', inplace=True)
    print(df.describe())
    return df.describe().to_dict()




    
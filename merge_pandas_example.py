import pandas as pd

# Criação de dois DataFrames de exemplo
df1 = pd.DataFrame({
    'id': [1, 2, 3, 4],
    'nome': ['Ana', 'Bruno', 'Carlos', 'Diana']
})

df2 = pd.DataFrame({
    'id': [3, 4, 5, 6],
    'idade': [23, 34, 45, 56]
})

# Exibindo os DataFrames originais
print("DataFrame 1:")
print(df1)
print("\nDataFrame 2:")
print(df2)

# Realizando a mesclagem (merge) dos DataFrames com base na coluna 'id'
merged_df = pd.merge(df1, df2, on='id', how='inner')

# Exibindo o DataFrame resultante da mesclagem
print("\nDataFrame Mesclado (Inner Join):")
print(merged_df)

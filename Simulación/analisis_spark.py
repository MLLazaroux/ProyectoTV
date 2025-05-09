from pyspark.sql import SparkSession
from pyspark.sql.functions import col, when, round

# Crear la sesión de Spark
spark = SparkSession.builder \
    .appName("DesempenoAcademico") \
    .getOrCreate()

# Cargar el archivo CSV
df = spark.read.csv("desempeno_estudiantil.csv", header=True, inferSchema=True)

# Vista previa
df.show(5)

# Eliminar nulos
df_clean = df.dropna()

# Calcular el Índice de Rendimiento Académico
df_transformed = df_clean.withColumn(
    "IRA", round(col("promedio") * col("asistencia") / 100, 2)
)

# Clasificación de riesgo
df_final = df_transformed.withColumn(
    "riesgo_academico",
    when(col("IRA") < 10, "Alto")
    .when((col("IRA") >= 10) & (col("IRA") < 13), "Medio")
    .otherwise("Bajo")
)

df_final.select("id_estudiante", "IRA", "riesgo_academico").show(5)


# ANÁLISIS EXPLORATORIO

from pyspark.sql.functions import avg, count

print(" PROMEDIO DE IRA POR CARRERA:")
df_final.groupBy("carrera").agg(avg("IRA").alias("promedio_IRA")).show()

print("\n CANTIDAD DE ESTUDIANTES POR CLASIFICACIÓN DE RIESGO:")
df_final.groupBy("riesgo_academico").agg(count("*").alias("cantidad")).show()

print("\n PROMEDIO DE PROMEDIO FINAL POR NIVEL SOCIOECONÓMICO:")
df_final.groupBy("socioeconomico").agg(avg("promedio").alias("promedio_general")).show()

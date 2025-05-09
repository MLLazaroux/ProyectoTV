import pandas as pd
import numpy as np

np.random.seed(42)

n = 10000
data = {
    'id_estudiante': np.arange(1, n + 1),
    'carrera': np.random.choice(['Ingeniería', 'Administración', 'Educación', 'Contabilidad'], n),
    'semestre': np.random.randint(1, 11, n),
    'promedio': np.round(np.random.normal(12, 2.5, n), 2),
    'asistencia': np.round(np.random.uniform(50, 100, n), 2),
    'participacion': np.random.choice(['alta', 'media', 'baja'], n),
    'asignaturas_desaprobadas': np.random.randint(0, 6, n),
    'acceso_virtual': np.random.randint(0, 8, n),
    'socioeconomico': np.random.choice(['alto', 'medio', 'bajo'], n)
}

df = pd.DataFrame(data)
df.to_csv('desempeno_estudiantil.csv', index=False)
print("CSV generado correctamente.")

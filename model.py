import pandas as pd
import pickle
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

# ---------------- LOAD DATA ----------------
df = pd.read_csv("performance_new.csv")
df = df.dropna()

# ---------------- SCORE CALCULATION ----------------
df['rating'] = (
    df['attendance_rate'] * 0.3 +
    df['tasks_completed'] * 0.2 +
    df['quality_score'] * 0.3 +
    df['teamwork_score'] * 0.2
)

# ---------------- LABELS ----------------
def get_level(score):
    if score >= 85:
        return "high"
    elif score >= 60:
        return "medium"
    else:
        return "low"

df['performance_level'] = df['rating'].apply(get_level)

# ---------------- FEATURES ----------------
X = df[['attendance_rate', 'tasks_completed', 'quality_score', 'teamwork_score']]
y = df['performance_level']

# ---------------- SPLIT ----------------
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# ---------------- MODEL ----------------
model = RandomForestClassifier(n_estimators=150, random_state=42)
model.fit(X_train, y_train)

# ---------------- ACCURACY ----------------
preds = model.predict(X_test)
acc = accuracy_score(y_test, preds)

print("✅ Accuracy:", round(acc * 100, 2), "%")

# ---------------- SAVE MODEL ----------------
with open("model.pkl", "wb") as f:
    pickle.dump(model, f)

print("✅ model.pkl saved successfully")
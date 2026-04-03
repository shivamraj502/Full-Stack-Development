import numpy as np
from sklearn.datasets import fetch_olivetti_faces
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import GaussianNB
from sklearn.metrics import accuracy_score

# Load dataset
data = fetch_olivetti_faces(shuffle=True, random_state=42)
X = data.data
y = data.target

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.3, random_state=42
)

# Train model
nb_classifier = GaussianNB()
nb_classifier.fit(X_train, y_train)

# Predictions
y_pred = nb_classifier.predict(X_test)

# Accuracy
accuracy = accuracy_score(y_test, y_pred)
print(f'Accuracy of the Naive Bayes classifier: {accuracy * 100:.2f}%')

# Predict a new sample
sample_index = 0
new_sample = X_test[sample_index].reshape(1, -1)
new_prediction = nb_classifier.predict(new_sample)

print(f'Predicted person ID for the new sample: {new_prediction[0]}')
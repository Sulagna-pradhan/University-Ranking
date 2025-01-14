from flask import Flask, jsonify
from flask_cors import CORS  # Import CORS from flask_cors
import pandas as pd

app = Flask(__name__)

# Enable CORS for all routes (for all origins)
CORS(app)

# Load the dataset
dataset_path = "top universities.csv"  # Update with your file path
data = pd.read_csv(dataset_path)

@app.route('/api/rankings', methods=['GET'])
def get_rankings():
    rankings = data.to_dict(orient='records')  # Convert all rows to JSON
    return jsonify(rankings)

if __name__ == "__main__":
    app.run(debug=True)

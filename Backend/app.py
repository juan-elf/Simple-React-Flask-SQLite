from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
import os

app = Flask(__name__)
CORS(app)

#Database Config

BASE_DIR = os.path.abspath(os.path.dirname(__file__))
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///" + os.path.join(BASE_DIR,"app.db")
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] =False

db = SQLAlchemy(app)

#Database Model

class User (db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)

# Routes / API

@app.route("/api/hello", methods=["GET"])
def hello():
    return jsonify({"message":"Hello from Flask backend"})

@app.route("/api/users", methods=["GET"])
def get_users():
    users = User.query.all()
    return jsonify([{"id":u.id, "name": u.name} for u in users])

@app.route("/api/users", methods=["POST"])
def add_user():
    data = request.get_json()
    name = data.get("name")

    if not name :
        return jsonify({"error": "name is required"}), 400
    
    new_user = User(name=name)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "User added !", "user":{"id": new_user.id, "name":new_user.name}}), 201

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True)

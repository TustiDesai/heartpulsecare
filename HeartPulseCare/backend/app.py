from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)

# Database connection
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="tusti2005",   # use your MySQL password
    database="heartpulsecare"
)

cursor = db.cursor(dictionary=True)

@app.route("/")
def home():
    return "HeartPulseCare Backend Running"


# ---------------- REGISTER ---------------- #

from flask import request, redirect

@app.route("/register", methods=["POST"])
def register():

    name = request.form.get("full_name")
    email = request.form.get("email")
    password = request.form.get("password")
    confirm_password = request.form.get("confirm_password")

    if password != confirm_password:
        return "Passwords do not match"

    query = """
    INSERT INTO users (full_name, email, password)
    VALUES (%s, %s, %s)
    """

    cursor.execute(query,(name,email,password))
    db.commit()

    return redirect("http://127.0.0.1:5500/UI%20Frontend-User/login_register.html")


# ---------------- LOGIN ---------------- #

from flask import request, redirect

@app.route("/login", methods=["POST"])
def login():

    email = request.form.get("email")
    password = request.form.get("password")

    query = "SELECT * FROM users WHERE email=%s AND password=%s"
    cursor.execute(query,(email,password))

    user = cursor.fetchone()

    if user:
        return redirect("http://127.0.0.1:5500/UI%20Frontend-User/home.html")
    else:
        return "Invalid email or password"

# ---------------- APPOINTMENT BOOKING ---------------- # 
@app.route("/book_appointment", methods=["POST"])
def book_appointment():

    patient_name = request.form.get("patient_name")
    age = request.form.get("age")
    address = request.form.get("address")
    hospital = request.form.get("hospital")
    doctor = request.form.get("doctor")
    appointment_date = request.form.get("date")
    appointment_time = request.form.get("appointment_time")

    query = """
    INSERT INTO appointments 
    (patient_name, age, address, hospitals, doctor, appointment_date, appointment_time)
    VALUES (%s,%s,%s,%s,%s,%s,%s)
    """

    cursor.execute(query,(patient_name,age,address,hospital,doctor,appointment_date,appointment_time))
    db.commit()

    return "Appointment Booked Successfully"
@app.route("/appointments", methods=["GET"])
def get_appointments():

    query = """
    SELECT patient_name, age, address, hospitals, doctor, appointment_date, appointment_time
    FROM appointments
    ORDER BY appointment_date DESC
    """

    cursor.execute(query)
    appointments = cursor.fetchall()

    return jsonify(data)

    # ---------------- HOSPITALS ---------------- # 
@app.route("/hospitals")
def get_hospitals():
    cursor = db.cursor()

    cursor.execute("SELECT hospital_name, location, facilities, contact FROM hospitals")
    data = cursor.fetchall()

    hospitals = []
    for h in data:
        hospitals.append({
            "hospital_name": h[0],
            "location": h[1],
            "facilities": h[2],
            "contact": h[3]
        })

    cursor.close()
    return jsonify(hospitals)

# ---------------- QUIZ RESULTS ---------------- #
@app.route("/submit_quiz", methods=["POST"])
def submit_quiz():

    data = request.get_json()
    print("RECEIVED DATA:", data)

    user_id = data.get("user_id")
    score = data.get("score")
    risk_level = data.get("risk_level")

    cursor = mysql.connection.cursor()

    cursor.execute( """
    INSERT INTO quiz_results (user_id, score, risk_level)
    VALUES (%s, %s, %s)
        """, (user_id, score, risk_level))
     
    mysql.connection.commit()

    cursor.close()

    return jsonify({"message": "Quiz results saved"})

# ---------------- SUBMIT FEEDBACK ---------------- #
@app.route("/submit_feedback", methods=["POST"])
def submit_feedback():

    data = request.get_json

    user_name = data.get("user_name")
    email = data.get("email")
    message = data.get("message")

    cursor = mysql.connection.cursor()

    query = """
INSERT INTO feedback (user_name, email, message)
VALUES (%s, %s, %s)
    """

    cursor.execute(query,(user_name,email,message))
    mysql.connection.commit()

    cursor.close()

    return jsonify({"message": "Feedback submitted successfully"})

if __name__ == "__main__":
    app.run(debug=True)


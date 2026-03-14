import mysql.connector

db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="tusti2005",
    database="heartpulsecare"
)

cursor = db.cursor(dictionary=True)
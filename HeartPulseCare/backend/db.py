import mysql.connector

try:
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="tusti2005",
    database="heartpulsecare"
)

cursor = db.cursor(dictionary=True)

except:
db = None
cursor = None
print("Database not connected (running without local MySQL)") 

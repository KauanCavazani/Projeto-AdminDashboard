import pymysql

db = pymysql.connect(host="localhost", user="root", passwd="Kauancb0311", db="safecommerce");

cursor = db.cursor()

instruction = "SELECT * FROM Servidor;"
cursor.execute(instruction)
result = cursor.fetchall()
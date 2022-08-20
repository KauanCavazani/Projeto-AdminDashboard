import pymysql

db = pymysql.connect(host="localhost", user="root", passwd="senhaAqui", db="safecommerce");

cursor = db.cursor()

instruction = "SELECT * FROM Servidor;"
cursor.execute(instruction)
result = cursor.fetchall()
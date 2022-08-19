import pymysql

db = pymysql.connect(host="localhost", user="aluno", passwd="sptech", db="safecommerce");

cursor = db.cursor()

instruction = "SELECT * FROM Servidor;"
cursor.execute(instruction)
result = cursor.fetchall()
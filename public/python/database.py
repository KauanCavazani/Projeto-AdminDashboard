from sqlite3 import connect
import pymysql

db = pymysql.connect(host="localhost", user="aluno", passwd="sptech", db="safecommerce");

cursor = db.cursor()

instruction = "SELECT * FROM servidor;"
cursor.execute(instruction)
result = cursor.fetchall()
print(result)
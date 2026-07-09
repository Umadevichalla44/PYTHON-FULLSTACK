import mysql.connector

conn = mysql.connector.connect(
    host="localhost",
    user="root",
    password="root",
    database="abc"
)
cmd = conn.cursor()

cmd.execute("CREATE TABLE IF NOT EXIST demo(id int,name varchar(10));")
print("Table created go to check")
conn.commit()
conn.close()
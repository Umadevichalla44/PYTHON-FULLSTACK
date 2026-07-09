import pymysql
conn = mysql.connector.connect(
    host ="localhost",
    user ="root",
    password ="root",
    database ="xyz")
cmd = conn.cursor()

id = int(input("Enter student id: "))
name = input("Enter student name: ")
branch = input("Enter student branch: ")

sql = "INSERT INTO  STUDENT VALUES(%s,%s,%s)"
values = (id,name,branch)
cmd.execute(sql, values)
conn.commit()
print("data inserted ")
cmd.close()
conn.close()
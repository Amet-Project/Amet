import csv
rows = []
with open('ratings.csv', mode='r') as csv_file:
    csv_reader = csv.DictReader(csv_file)
    for row in csv_reader:
        rows.append(row)
line_count = 0
for row in rows:
    line_count2 = 0
    for i in rows:
        if(row['ï»¿usuarioId'] == i['ï»¿usuarioId'] and row['casinoId'] == i['casinoId'] and line_count != line_count2):
            print(line_count, line_count2, row, i)
        line_count2 +=1
    line_count += 1
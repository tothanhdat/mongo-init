# CREATE
```
use [database] // tự tạo mới nếu chưa tồn tại

db.[name_collection].insertOne({}) // hàm tạo mới 1 docs[record]
db.[name_collection].insertMany([{}, {}]) // tạo mới nhiều docs
```
# UPDATE
```
db.[name_collection].updateOne(<filter>, { $set: <update> }, <options>)
db.[name_collection].update(<filter>, <update>, <option>)
db.[name_colleciton].updateMany(<filter>, { $set: <update> }, <options>)
```
# DELETE
```
db.[name_collection].deleteOne(<filter>, <options>);
db.[name_collection].deleteMany(<filter>, <options>);
```
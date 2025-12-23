user_info = {
    "name": "Ali",
    "family": "Alavi",
    "age": 25
}


required_keys = ["income", "friends", "father_name", "mother_name"]

for key in required_keys:
    if key not in user_info:
        print(f"فیلد '{key}' در دیکشنری تعریف نشده است")


# ------------------------------------------------------------------------------------------------

if user_info.get("income") is None:
    print("میزان درآمد تعریف نشده است")

if user_info.get("friends") is None:
    print("اسم دوستان تعریف نشده است")
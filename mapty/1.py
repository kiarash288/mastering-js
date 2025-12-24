# دیکشنری اصلی که مقادیر آن خودشان دیکشنری هستند
garage = {
    "car1": {"brand": "BMW", "year": 2022, "color": "Black"},
    "car2": {"brand": "Tesla", "year": 2023, "color": "White"},
    "car3": {"brand": "Toyota", "year": 2021, "color": "Blue"}
}


for key in garage.keys()





    inner_dict = garage[key]
    
    print(f"--- Information for {key} ---")
    print(f"Full Value: {inner_dict}") 
    
    print(f"Brand: {inner_dict['brand']}")
from pymongo import MongoClient

client = MongoClient("mongodb+srv://test_user:test123@defhacks2020.snfxf.mongodb.net/<dbname>?retryWrites=true&w=majority")
db = client["Data"]
collection = db["API"]

#Given an address, we can return the list contained within the address key 
def getQueueETA(address):
    lookUp = client["Data"]["API"]
    a = lookUp.find_one({"address": address})
    if not a:
        return -1
    else:
        return a[address]

'''
Looks through the query and makes an entry based of of the data, if the address of the query already exists in the database
we update the corresponding entry. If not, we inject a new entry with the data provided in the query into our database. 
'''
def updateDatabase(query:dict):
    address = query["address"]
    queue = query[address][0]
    ETA = query[address][1]
    stats = [queue, ETA]

    col = client["Data"]["API"]
    a = col.find_one({"address": address})
    if not a:
        entry = {
            "address": address,
            address  : stats
        }
        col.insert_one(entry)
    else:
        col.update_one(
            {"address": address},
            { '$set': {address: stats}, }
        )
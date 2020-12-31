[1, 2, 4]   ,     [1, 2, 3]


let array1 = [1, 2, 4];
let array2 = [1, 2, 3];

let output;
for (let i=0; i < array1.length; i++) {
  if (array1[i] > array2[i]) {
    output = true;
  }
  return output;
}



public static List<Parcel> parcelList = new List<Parcel>

public string Name { get; set; }
public int Id { get; set; }

public Parcels() {
parcelList.Add(this);
Name = "given name";
Id = BoxNum();
}

parcelList { parcel1: Id = 1, parcel3: Id = 3, parcel4: Id = 2, parcel5: Id = 4, parcel6: Id = ?}


public int BoxNum()
    {
      int uniqueNum = 0;
      for (int i=1; i <= parcelList.Count; i++])
      {
        if(parcelList.Exists(x => x.Id == i))
        {
        }
        else
        {
          return uniqueNum += i;
        }
      }
      return uniqueNum;
    }
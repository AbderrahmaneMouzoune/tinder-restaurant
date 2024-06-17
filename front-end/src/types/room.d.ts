type RoomId = string

type Room = {
  id: RoomId
  host: Profile
  restaurants: Restaurant[]
  participants: Profile[]
}

type Profile = {
  username: string
}

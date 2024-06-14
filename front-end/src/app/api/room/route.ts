// import { NextRequest, NextResponse } from 'next/server'
// import { nanoid } from 'nanoid'

// let rooms: Room[] = [
//   {
//     id: 'happyHippo',
//     host: { username: 'skulbraz' },
//     restaurants: [],
//     participants: [],
//   },
// ]

// export async function POST(request: NextRequest) {
//   const { hostName } = await request.json()
//   const roomId = nanoid(10)
//   const newRoom: Room = {
//     id: roomId,
//     host: {
//       username: 'new-user',
//     },
//     restaurants: [],
//     participants: [],
//   }
//   rooms.push(newRoom)

//   return NextResponse.json(newRoom)
// }

// export async function GET() {
//   return NextResponse.json(rooms)
// }

// export async function PUT(request: NextRequest) {
//   const { id, name } = await request.json()
//   const room = rooms.find((room) => room.id === id)
//   if (room) {
//     room.hostName = name
//     return NextResponse.json(room)
//   } else {
//     return NextResponse.json({ message: 'Room not found' }, { status: 404 })
//   }
// }

// export async function DELETE(request: NextRequest) {
//   const { id } = await request.json()
//   rooms = rooms.filter((room) => room.id !== id)
//   return NextResponse.json({ message: 'Room deleted' })
// }

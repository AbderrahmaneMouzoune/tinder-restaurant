import { NextRequest, NextResponse } from 'next/server'
import { v4 as uuidv4 } from 'uuid'

let rooms: Room[] = [{ id: 'happyHippo', hostName: 'skulbraz' }]

export async function POST(request: NextRequest) {
  const { name } = await request.json()
  const roomId = uuidv4()
  const newRoom: Room = { id: roomId, hostName: name }
  rooms.push(newRoom)
  return NextResponse.json(newRoom)
}

export async function GET() {
  return NextResponse.json(rooms)
}

export async function PUT(request: NextRequest) {
  const { id, name } = await request.json()
  const room = rooms.find((room) => room.id === id)
  if (room) {
    room.hostName = name
    return NextResponse.json(room)
  } else {
    return NextResponse.json({ message: 'Room not found' }, { status: 404 })
  }
}

export async function DELETE(request: NextRequest) {
  const { id } = await request.json()
  rooms = rooms.filter((room) => room.id !== id)
  return NextResponse.json({ message: 'Room deleted' })
}

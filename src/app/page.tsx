import RestaurantCard from '@/app/shared/restaurant/card'

export default function Home() {
  return (
    <main className="max-h-screen min-h-screen">
      <section className="grid grid-cols-1 gap-5 p-4 md:p-6">
        {Array.from({ length: 2 }).map((_, i) => (
          <RestaurantCard key={i} title={`Restaurant ${i + 1}`} />
        ))}
      </section>
    </main>
  )
}

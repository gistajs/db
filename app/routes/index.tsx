export default function Page() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center gap-8 px-6 py-16">
      <header className="space-y-3">
        <p className="badge badge-outline">Gista.js DB Starter</p>
        <h1 className="text-4xl font-bold text-balance">
          Your app is running.
        </h1>
        <p className="text-base-content/70">
          This database starter is prewired for SSR with Drizzle and Atlas so
          you can build real features immediately.
        </p>
      </header>

      <section className="rounded-box border border-base-300 bg-base-100 p-6">
        <h2 className="text-lg font-semibold">Next steps</h2>
        <ol className="mt-3 list-inside list-decimal space-y-2 text-base-content/80">
          <li>Define your first tables in `app/.server/db/schema.ts`</li>
          <li>Apply changes with `atlas schema apply --env dev`</li>
          <li>Start building routes with server loaders and actions</li>
        </ol>
      </section>
    </main>
  )
}

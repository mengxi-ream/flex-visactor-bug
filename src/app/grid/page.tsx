import Chart from "@/components/chart";

export default function Home() {
  return (
    <main>
      <div className="grid gap-x-16 p-8 lg:grid-cols-2 grid-cols-1 mx-auto max-w-5xl border rounded-lg border-red-500">
        <div className="text-lg shrink-0">
          This is some text, It&apos;s a long long text
        </div>
        <div className="flex-grow w-full h-96 rounded-lg border">
          <Chart />
        </div>
      </div>
    </main>
  );
}

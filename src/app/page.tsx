import { Graph } from "@/components/graph";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-t from-slate-800 to-slate-950">
      <Graph />
    </main>
  );
}

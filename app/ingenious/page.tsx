import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CodeXtreme Ingenious | Discover. Inspire. Nurture. Activate. Accelerate.",
  description: "1-Year program designed to discover, inspire, nurture, activate and accelerate early tech talent and founders to build the next generation of world-class tech companies that will drive impact on the African continent.",
};

export default function Ingenious() {
  return (
    <main className="flex h-[100dvh] w-full flex-col items-center justify-center bg-white text-black">
      <div className="space-y-5 w-full px-[5%] md:w-[60%] mx-auto text-center"><h1 className="text-3xl font-semibold">Discover. Inspire. Nurture. Activate. Accelerate.</h1>
      <p>
        Ingenious is a 1-Year program we are designing to discover, inspire, nurture, activate and accelerate early tech talent and founders to build the next generation of world-class tech companies that will drive impact on the African continent.
      </p>
      <p>
        As we raise funds and build the team to run it, we'd appreciate you contacting us
        at <Link className="underline" href="mailto:team@codextreme.io">team@codextreme.io</Link> if
        you think you'd be a great help in any way.
      </p>
      </div>
    </main>
  );
}

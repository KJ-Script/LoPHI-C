import Chat from "@/components/Chat";
import Terminal from "@/components/Terminal";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-mono)] text-green-400 w-full  min-h-screen py-12 space-y-2">
      {/* Terminal Logs  */}
      <div className="w-full max-w-2xl mx-auto border">
        <Terminal />
      </div>

      {/* Chat section */}
      <div className="w-full max-w-2xl mx-auto border">
        <Chat />
      </div>
    </div>
  );
}

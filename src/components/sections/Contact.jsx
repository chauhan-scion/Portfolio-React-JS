import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6 bg-white/5 border border-white/10 rounded-lg backdrop-blur-md shadow-lg space-y-6">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Contact Information
          </h2>

          <div className="space-y-4 text-white text-lg">
            <p className="flex items-center gap-2 break-words bg-white/5 border border-white/10 rounded px-4 py-3 transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
              <span className="text-blue-400">👤</span> Pankaj Chauhan
            </p>
            <p className="flex items-center gap-2 break-words bg-white/5 border border-white/10 rounded px-4 py-3 transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
              <span className="text-blue-400">📧</span> chauhanscion@gmail.com
            </p>
            <p className="flex items-center gap-2 break-words bg-white/5 border border-white/10 rounded px-4 py-3 transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
              <span className="text-blue-400">📞</span> 9919966279
            </p>
          </div>

          <p className="text-center text-sm text-white/60 pt-4">
            Feel free to reach out anytime!
          </p>
        </div>
      </RevealOnScroll>
    </section>
  );
};

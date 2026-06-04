import { Apple, Play, QrCode } from "lucide-react";

export function DownloadComponent() {
  return (
    <section id="download" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-cta p-10 sm:p-16 shadow-glow">
          <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-lavender/40 blur-3xl" />

          <div className="relative grid lg:grid-cols-2 gap-10 items-center text-primary-foreground">
            <div>
              <h2 className="text-4xl sm:text-5xl text-primary-foreground">
                Your body, beautifully understood.
              </h2>
              <p className="mt-4 text-primary-foreground/85 text-lg max-w-md">
                Download LOVA and meet a smarter, softer way to care for
                yourself — every day of your cycle.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a className="inline-flex items-center gap-3 rounded-2xl bg-foreground text-background px-5 py-3 hover:opacity-90 transition">
                  <Apple className="h-6 w-6" />
                  <span className="text-left leading-tight">
                    <span className="block text-[10px] uppercase tracking-wider opacity-70">
                      Download on
                    </span>
                    <span className="block font-semibold">App Store</span>
                  </span>
                </a>
                <a className="inline-flex items-center gap-3 rounded-2xl bg-foreground text-background px-5 py-3 hover:opacity-90 transition">
                  <Play className="h-6 w-6" />
                  <span className="text-left leading-tight">
                    <span className="block text-[10px] uppercase tracking-wider opacity-70">
                      Get it on
                    </span>
                    <span className="block font-semibold">Google Play</span>
                  </span>
                </a>
              </div>
            </div>

            <div className="flex lg:justify-end">
              <div className="glass rounded-3xl p-6 flex items-center gap-5 text-foreground max-w-sm">
                <div className="h-28 w-28 rounded-2xl bg-white grid place-items-center shadow-soft">
                  <QrCode className="h-20 w-20" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    Scan to download
                  </p>
                  <p className="font-display text-xl mt-1">Open camera, scan, glow.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

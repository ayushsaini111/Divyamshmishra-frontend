import Image from "next/image";
import React from "react";
import DailyInsights from "../../Components/DailyInsight";
import LetsConnect from "../../Components/LetsConnect";
import Footer from "../../Components/Footer";
import FooterMobile from "../../Components/Footer";

import JsonLd from "../../Components/JsonLd";
import { canonicalize } from "../../utils/canonical";
import { getWebPageSchema, getBreadcrumbSchema } from "../../utils/schema";

/* ================= SEO ================= */

export const metadata = {
  title: "About Divyansh Mishra – Investor & Trading Philosophy",
  description:
    "Learn about Divyansh Mishra, an investor and trader based in Kanpur, India, and explore his disciplined trading philosophy and strategic market approach.",
  alternates: {
    canonical: canonicalize("/about"),
  },
};

function Page() {
  const url = canonicalize("/about");

  return (
    <>
      {/* Structured Data */}
      <JsonLd
        data={getWebPageSchema({
          title: "About Divyansh Mishra – Investor & Trading Philosophy",
          description:
            "Learn about Divyansh Mishra, an investor and trader based in Kanpur, India.",
          url: url,
        })}
      />

      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", url: canonicalize("") },
          { name: "About", url: url },
        ])}
      />

      {/* ===== ORIGINAL CODE BELOW (UNCHANGED) ===== */}

      <section>
        <div className="flex flex-col items-center justify-center py-[150px] md:pt-s160 md:pb-[200px] space-y-s64 px-s16">
          <div className="heading-h2">About me</div>

          <div className="space-y-s64 w-full">
            <div className="flex flex-col md:flex-row justify-around items-center max-w-7xl w-full mx-auto gap-s32">
              <p className="max-w-[200px] text-justify body-default">
                I’m not here to “predict” the market.
I’m here to understand it.
Hi, I’m Divyansh Mishra — and I believe wealth is not luck.
It’s discipline, patience, and a deep respect for market cycles.
              </p>

              <Image
                src="/Images/about.jpg"
                alt="About me image"
                width={500}
                height={300}
                className="w-[250px] h-[400px]  lg:w-[400px] lg:h-[600px] rounded-r32 object-cover"
              />

              <p className="max-w-[200px] text-justify body-default">
         Over the past 5 years, I’ve built a philosophy rooted in value, sustainability, and long-term growth.
For me, investing isn’t gambling.
It’s studying human behavior… with numbers.

              </p>
            </div>

            <div className="max-w-xl mx-auto heading-h6 text-center px-s16">
           Markets reward the patient, punish the emotional, and teach the disciplined.
            </div>
          </div>
        </div>

        <section className="space-y-[80px] md:space-y-[150px] lg:space-y-[200px] px-s24 md:px-0 pb-[100px] md:pb-s160">
          {/* ROW 1 */}
          <div className=" mx-auto flex flex-col md:flex-row items-center justify-between gap-s24 md:gap-16">
            <div className="w-full md:w-1/2 max-w-md lg:max-w-xl px-s16  md:pl-s32 lg:pl-s160 ">
             Charts don’t scare me.
They tell stories.
Every pattern is psychology.
Every crash is emotion.
Every rally is belief.
I study cycles, not noise.
Because noise fades — cycles repeat.
            </div>

            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <Image
                src="/Images/about2.png"
                alt="About me image"
                width={700}
                height={400}
                className="
                  w-full max-w-[420px]
                  md:max-w-[600px]
                  lg:max-w-[700px]
                  h-[200px] md:h-[320px] lg:h-[400px]
                  rounded-full md:rounded-r-none md:rounded-l-full
                  object-cover
                "
              />
            </div>
          </div>

          {/* ROW 2 */}
          <div className=" mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-16">
            <div className="w-full md:w-1/2 flex justify-center md:justify-start order-2 md:order-1">
              <Image
                src="/Images/about3.png"
                alt="About me image"
                width={700}
                height={400}
                className="
                  w-full max-w-[420px]
                  md:max-w-[600px]
                  lg:max-w-[700px]
                  h-[200px] md:h-[320px] lg:h-[400px]
                  rounded-full md:rounded-l-none md:rounded-r-full
                  object-cover
                "
              />
            </div>

            <div className="w-full md:w-1/2 max-w-md lg:max-w-xl px-s16  md:pr-s32 lg:pr-s160 order-1 md:order-2">
              Wealth is not built in one trade.
It’s built brick by brick.
Like Lego blocks, every investment adds structure.
Strong foundations first.
Then expansion.
Break it. Learn. Rebuild better.
            </div>
          </div>

          {/* ROW 3 */}
          <div className=" mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-16">
            <div className="w-full md:w-1/2 max-w-md lg:max-w-xl px-s16  md:pl-s32 lg:pl-s160 ">
              I don’t just invest in what exists.
I study what’s coming.
Technology. Innovation. Behavioral shifts.
The future rewards those who prepare for it —
not those who react late to it.
            </div>

            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <Image
                src="/Images/about4.png"
                alt="About me image"
                width={700}
                height={400}
                className="
                  w-full max-w-[420px]
                  md:max-w-[600px]
                  lg:max-w-[700px]
                  h-[200px] md:h-[320px] lg:h-[400px]
                  rounded-full md:rounded-r-none md:rounded-l-full
                  object-cover
                "
              />
            </div>
          </div>
           {/* ROW 2 */}
          <div className=" mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-16">
            <div className="w-full md:w-1/2 flex justify-center md:justify-start order-2 md:order-1">
              <Image
                src="/Images/about1.png"
                alt="About me image"
                width={700}
                height={400}
                className="
                  w-full max-w-[420px]
                  md:max-w-[600px]
                  lg:max-w-[700px]
                  h-[200px] md:h-[320px] lg:h-[400px]
                  rounded-full md:rounded-l-none md:rounded-r-full
                  object-cover
                "
              />
            </div>

            <div className="w-full md:w-1/2 max-w-md lg:max-w-xl px-s16 md:pr-s32 lg:pr-s160 order-1 md:order-2">
          Investing is chess, not checkers.
Every move has a consequence.
Every decision needs positioning.
Every risk must be calculated.
The goal isn’t to win one move.
It’s to stay in the game long enough to win the board.
            </div>
          </div>
          
        </section>

        <DailyInsights />
    <div data-nav="white" className="bg-black">

                <LetsConnect />
        </div>
      
      </section>
    </>
  );
}

export default Page;

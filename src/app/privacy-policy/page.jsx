import { privacyPolicy } from "../../Data/privacyPolicy";

export default function PrivacyPolicy() {
  return (
    <main className="bg-background text-main w-full px-s24 md:px-s32 py-s104 md:py-s160">
      
      <div className="max-w-7xl mx-auto space-y-s64 md:space-y-s80">

        {/* Title */}
        <div className="space-y-s16">
          <h1 className="heading-h2">{privacyPolicy.title}</h1>

         <div className="space-y-s8">
           <p className="body-default ">
            Effective Date: {privacyPolicy.effectiveDate}
          </p>

          <p className="body-default ">
            Last Updated: {privacyPolicy.lastUpdated}
          </p>
         </div>
        </div>


        {/* Sections */}
        <div className="space-y-s56 md:space-y-s64">
          {privacyPolicy.sections.map((section, index) => (
            <section key={index} className="space-y-s16">

              <h2 className="heading-h3">
                {section.title}
              </h2>

              <div className="space-y-s6">
              <ul className="space-y-s6 list-disc pl-s24">
  {section.content.map((para, i) => (
    <li key={i} className="body-large text-secondary ">
      {para}
    </li>
  ))}
</ul>
              </div>

            </section>
          ))}
        </div>

      </div>
    </main>
  );
}
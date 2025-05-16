"use client";

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "More experience",
      description: "We offer a range of health services to meet your needs.",
      highlight: true,
    },
    {
      title: "Seamless care",
      description: "We offer a range of health services to meet your needs.",
    },
    {
      title: "The right answers",
      description: "We offer a range of health services to meet your needs.",
    },
    {
      title: "Unparalleled expertise",
      description: "We offer a range of health services to meet your needs.",
    },
  ];

  return (
    <section className="bg-[#eef7fd] py-20 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
              ● Why choose us
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-10 leading-snug">
            Why Pick Us for{" "}
            <span className="text-cyan-500">Your Health Care</span>
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, idx) => (
              <div
                key={idx}
                className="group rounded-xl p-5 min-h-[120px] transition duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-[#00174f] bg-white text-gray-800"
              >
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs">
                    ★
                  </div>
                  <h4 className="font-semibold text-base text-gray-800 group-hover:text-white transition">
                    {reason.title}
                  </h4>
                </div>
                <p className="text-sm text-gray-600 group-hover:text-white transition">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative flex justify-center items-center">
          <div className="absolute left-0 top-6 bg-[#00174f] text-white text-xl font-bold rounded-full w-24 h-24 flex flex-col items-center justify-center z-10 shadow-lg">
            25+
            <span className="text-sm font-normal">Years</span>
          </div>
          <div className="rounded-2xl overflow-hidden w-full max-w-full shadow-lg">
            <img
              src="https://img.freepik.com/premium-photo/medical-staff-doctors-concept-young-smiling-female-doctor-healthcare-worker-white-coat-stethoscope-looking-confident-waiting-patients-blue-background_1258-87665.jpg"
              alt="Doctor"
              width={500}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

const services = [
  {
    icon: "https://www.shutterstock.com/image-vector/balloon-angioplasty-icon-line-vector-600nw-2463376545.jpg",
    title: "Angioplasty",
    description:
      "Angioplasty is a safe and effective procedure used to treat blocked or narrowed blood vessels.",
    doctors: "36+ Doctors",
  },
  {
    icon: "https://www.shutterstock.com/image-vector/heart-icon-flat-style-vector-600nw-2471170029.jpg",
    title: "Cardiology",
    description:
      "Our Cardiology services offer angioplasty to treat blocked or narrowed blood vessels in the heart.",
    doctors: "24+ Doctors",
  },
  {
    icon: "https://cdn4.iconfinder.com/data/icons/medical-services-specialties-set-5/256/3-01-512.png",
    title: "Endocrinology",
    description:
      "We offer specialized angioplasty services to support patients with blood flow issues caused by conditions.",
    doctors: "30+ Doctors",
  },
  {
    icon: "https://t3.ftcdn.net/jpg/01/19/75/26/360_F_119752602_gm4OfWfuBRw8rOKaXqMgSSjNPjgyhNPE.jpg",
    title: "Eye care",
    description:
      "Our Eye Care services include angioplasty to improve blood flow in the eye's blood vessels.",
    doctors: "45+ Doctors",
  },
   {
    icon: "https://www.shutterstock.com/image-vector/laser-dermatology-icon-outline-collection-600nw-2492053287.jpg",
    title: "dermitology",
    description:
      "Dermitology services include angioplasty to improve blood flow in the eye's blood vessels.",
    doctors: "45+ Doctors",
  },
   {
    icon: "https://cdn-icons-png.freepik.com/512/9445/9445780.png",
    title: "neurology",
    description:
      "Our nuro services include angioplasty to improve blood flow in the eye's blood vessels.",
    doctors: "45+ Doctors",
  },
];

export default function WellnessServices() {
  return (
    <section className="bg-[#f3f8fe] py-20 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-4">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
            ● Our service
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-10 leading-snug">
          Begin your journey to{" "}
          <span className="text-cyan-500">better health</span> with our
          wellness services.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-5 space-y-3 hover:shadow-lg transition"
            >
              <div className="w-12 h-12">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h4 className="text-xl font-semibold text-gray-800">
                {service.title}
              </h4>
              <h4 className="text-xs font-semibold text-gray-800">
                {service.description}
              </h4>
           
              <hr />
              <div className="text-sm font-medium text-blue-600 flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full inline-block"></span>
                {service.doctors}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

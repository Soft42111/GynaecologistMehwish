
import { Card, CardContent } from "@/components/ui/card";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "United Kingdom",
      text: "Dr. Mehwish provided excellent care during my pregnancy. The telemedicine consultations were convenient and professional.",
      rating: 5
    },
    {
      name: "Maria Rodriguez",
      location: "Spain",
      text: "Outstanding service! Dr. Atta's expertise and caring approach made me feel comfortable discussing sensitive health issues.",
      rating: 5
    },
    {
      name: "Aisha Khan",
      location: "United States",
      text: "The online consultation was seamless. Dr. Mehwish took time to answer all my questions and provided excellent guidance.",
      rating: 5
    },
    {
      name: "Emma Thompson",
      location: "Australia",
      text: "Professional, knowledgeable, and compassionate. I highly recommend Dr. Atta for any women's health concerns.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            What Our Patients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real experiences from women around the world who have received care from Dr. Mehwish Atta
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};


import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Services = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      title: "Menstrual Health",
      description: "Comprehensive care for menstrual disorders, irregularities, and related health concerns with personalized treatment plans.",
      image: "/lovable-uploads/aa32e4a1-3636-425e-937b-1c1d8542bf46.png"
    },
    {
      title: "Fertility Consultation", 
      description: "Expert guidance on fertility planning, conception support, and reproductive health optimization for your family planning journey.",
      image: "/lovable-uploads/ea10dcac-c682-4536-a243-24dae10b5d86.png"
    },
    {
      title: "Menopause Support",
      description: "Specialized care and support through menopause transition with symptom management and hormonal health guidance.",
      image: "/lovable-uploads/bea61bc4-94bc-4eae-bb50-493a141a4dce.png"
    },
    {
      title: "Pregnancy & Prenatal Care",
      description: "Comprehensive prenatal care and guidance throughout your pregnancy journey for both mother and baby's health.",
      image: "/lovable-uploads/2b273fb2-8090-4475-b2b8-0b4ce8ccd4e0.png"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 font-inter">
            Our Specialized Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            Comprehensive gynecological care tailored to your unique health needs at every stage of life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 font-inter">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-inter">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

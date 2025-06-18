
import { Button } from "@/components/ui/button";
import { Calendar, Video, Clock } from "lucide-react";

export const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Expert Gynaecological Care
                <span className="text-primary block">Worldwide</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Dr. Mehwish Atta provides professional telemedicine consultations for women's health concerns from the comfort of your home.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8" onClick={scrollToContact}>
                <Calendar className="w-5 h-5 mr-2" />
                Book Consultation
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" onClick={scrollToContact}>
                <Video className="w-5 h-5 mr-2" />
                Learn More
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-gray-600">Available</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-primary">100+</div>
                <div className="text-gray-600">Countries Served</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-primary">10,000+</div>
                <div className="text-gray-600">Happy Patients</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 lg:p-12">
              <img
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80"
                alt="Professional medical consultation"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-primary" />
                  <div>
                    <div className="font-semibold">Quick Response</div>
                    <div className="text-sm text-gray-600">Within 24 hours</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

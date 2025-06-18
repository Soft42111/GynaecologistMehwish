import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, Video, Phone } from "lucide-react";

export const Consultation = () => {
  const consultationTypes = [
    {
      icon: Video,
      title: "Video Consultation",
      duration: "15-20 minutes",
      price: "$35",
      description: "Face-to-face consultation via secure video call",
      popular: true
    },
    {
      icon: Phone,
      title: "Voice Call",
      duration: "10-15 minutes", 
      price: "$25",
      description: "Professional consultation via phone call",
      popular: false
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Book Appointment",
      description: "Choose your preferred consultation type and time slot"
    },
    {
      number: "2",
      title: "Secure Payment",
      description: "Complete payment through our secure payment gateway"
    },
    {
      number: "3",
      title: "Receive Confirmation",
      description: "Get consultation details and access link via email"
    },
    {
      number: "4",
      title: "Attend Consultation",
      description: "Join the secure video call at your scheduled time"
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="consultation" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Book Your Consultation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our flexible consultation options designed to meet your needs
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {consultationTypes.map((type, index) => (
            <Card key={index} className={`relative hover:shadow-lg transition-shadow ${type.popular ? 'ring-2 ring-primary' : ''}`}>
              {type.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center">
                <type.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl font-semibold">{type.title}</CardTitle>
                <CardDescription>{type.description}</CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">{type.price}</div>
                  <div className="flex items-center justify-center text-gray-600">
                    <Clock className="w-4 h-4 mr-1" />
                    {type.duration}
                  </div>
                </div>
                <Button onClick={scrollToContact} className="w-full bg-primary hover:bg-primary/90">
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
          
          <Card className="relative hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-xl font-semibold">Custom Package</CardTitle>
              <CardDescription>Tailored consultation package for your specific needs</CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">Custom</div>
                <div className="flex items-center justify-center text-gray-600">
                  <Clock className="w-4 h-4 mr-1" />
                  Flexible Duration
                </div>
              </div>
              <Button onClick={scrollToContact} className="w-full bg-primary hover:bg-primary/90">
                Book a Custom Package!
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-center mb-12">How It Works</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

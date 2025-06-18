
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Clock, Calendar, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    concern: '',
    selectedPackage: '',
    customPrice: '',
    deliverables: ''
  });

  const [showCustomFields, setShowCustomFields] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handlePackageChange = (value: string) => {
    setFormData(prev => ({ ...prev, selectedPackage: value }));
    setShowCustomFields(value === "custom");
  };

  const isValidCustomPrice = () => {
    if (!showCustomFields) return true;
    const price = parseFloat(formData.customPrice);
    return price > 35;
  };

  const getPackageDetails = (packageType: string) => {
    switch (packageType) {
      case "video":
        return "Video Call (15-20 minutes) - $35";
      case "voice":
        return "Voice Call (10-15 minutes) - $25";
      case "custom":
        return `Custom Package - $${formData.customPrice || 'TBD'}`;
      default:
        return "";
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (showCustomFields && !isValidCustomPrice()) {
      toast({
        title: "Invalid Price",
        description: "Custom package price must be higher than $35.",
        variant: "destructive"
      });
      return;
    }
    
    let packageInfo = "";
    if (formData.selectedPackage) {
      packageInfo = `\nSelected Package: ${getPackageDetails(formData.selectedPackage)}`;
      if (showCustomFields && formData.deliverables) {
        packageInfo += `\nDeliverables: ${formData.deliverables}`;
      }
    }
    
    const subject = `Consultation Request from ${formData.firstName} ${formData.lastName}`;
    const body = `
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}${packageInfo}
Health Concern: ${formData.concern}
    `;
    
    const mailtoLink = `mailto:mehvishatta@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    
    toast({
      title: "Message Prepared",
      description: "Your email client should open with the message ready to send.",
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 font-inter">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            Have questions about our services? Contact us for more information or to schedule your consultation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center font-inter">
                  <Phone className="w-5 h-5 mr-2 text-primary" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-sm font-medium text-gray-700 font-inter">Phone Numbers</Label>
                  <p className="text-lg font-semibold text-primary font-inter">+923310428890</p>
                  <p className="text-lg font-semibold text-primary font-inter">+3530894792331</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-700 flex items-center font-inter">
                    <Mail className="w-4 h-4 mr-1" />
                    Email
                  </Label>
                  <p className="text-lg font-inter">mehvishatta@gmail.com</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-700 flex items-center font-inter">
                    <MessageCircle className="w-4 h-4 mr-1" />
                    Telegram
                  </Label>
                  <a href="https://t.me/werthem" target="_blank" rel="noopener noreferrer" className="text-lg text-primary hover:underline font-inter">
                    t.me/werthem
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center font-inter">
                  <Clock className="w-5 h-5 mr-2 text-primary" />
                  Consultation Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-inter">Monday - Friday</span>
                  <span className="font-medium font-inter">8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-inter">Saturday</span>
                  <span className="font-medium font-inter">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-inter">Sunday</span>
                  <span className="font-medium font-inter">10:00 AM - 4:00 PM</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center font-inter">
                <Calendar className="w-5 h-5 mr-2 text-primary" />
                Quick Contact Form
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="font-inter">First Name</Label>
                    <Input 
                      id="firstName" 
                      placeholder="Enter your first name" 
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="font-inter"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="font-inter">Last Name</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Enter your last name" 
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="font-inter"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email" className="font-inter">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Enter your email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="font-inter"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="font-inter">Phone Number</Label>
                  <Input 
                    id="phone" 
                    placeholder="Enter your phone number" 
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="font-inter"
                  />
                </div>
                <div>
                  <Label htmlFor="package" className="text-lg font-semibold text-gray-800 font-inter">Select Your Package</Label>
                  <Select value={formData.selectedPackage} onValueChange={handlePackageChange}>
                    <SelectTrigger className="w-full h-12 text-base font-inter">
                      <SelectValue placeholder="Choose a consultation package" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="video" className="text-base py-3">
                        <div className="flex flex-col">
                          <span className="font-semibold font-inter">Video Call Consultation</span>
                          <span className="text-sm text-gray-600 font-inter">15-20 minutes - $35</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="voice" className="text-base py-3">
                        <div className="flex flex-col">
                          <span className="font-semibold font-inter">Voice Call Consultation</span>
                          <span className="text-sm text-gray-600 font-inter">10-15 minutes - $25</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="custom" className="text-base py-3">
                        <div className="flex flex-col">
                          <span className="font-semibold font-inter">Custom Package</span>
                          <span className="text-sm text-gray-600 font-inter">Tailored consultation</span>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {showCustomFields && (
                  <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
                    <div className="space-y-3">
                      <Label htmlFor="customPrice" className="text-base font-semibold text-gray-800 font-inter">
                        Set Your Price (must be higher than $35)
                      </Label>
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold font-inter">$</span>
                        <Input
                          id="customPrice"
                          type="number"
                          min="36"
                          placeholder="Enter amount"
                          value={formData.customPrice}
                          onChange={handleInputChange}
                          className="text-base h-10 font-inter"
                        />
                      </div>
                      {formData.customPrice && !isValidCustomPrice() && (
                        <p className="text-red-600 text-sm font-medium font-inter">
                          Price must be higher than $35
                        </p>
                      )}
                    </div>
                    
                    <div className="space-y-3">
                      <Label htmlFor="deliverables" className="text-base font-semibold text-gray-800 font-inter">
                        What deliverables do you want?
                      </Label>
                      <Textarea 
                        id="deliverables" 
                        placeholder="Describe what specific deliverables or outcomes you expect from this consultation"
                        value={formData.deliverables}
                        onChange={handleInputChange}
                        className="font-inter"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <Label htmlFor="concern" className="font-inter">Health Concern</Label>
                  <Textarea 
                    id="concern" 
                    placeholder="Brief description of your concern" 
                    value={formData.concern}
                    onChange={handleInputChange}
                    required
                    className="font-inter"
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={showCustomFields && !isValidCustomPrice()}
                  className="w-full bg-primary hover:bg-primary/90 font-inter"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

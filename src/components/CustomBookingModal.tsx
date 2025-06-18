
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface CustomBookingModalProps {
  children: React.ReactNode;
}

export const CustomBookingModal = ({ children }: CustomBookingModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("");
  const [customPrice, setCustomPrice] = useState("");
  const [showCustomPrice, setShowCustomPrice] = useState(false);

  const handlePackageSelect = (value: string) => {
    setSelectedPackage(value);
    setShowCustomPrice(value === "custom");
  };

  const handleBookPackage = () => {
    setIsOpen(false);
    // Scroll to contact form
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isValidCustomPrice = () => {
    if (!showCustomPrice) return true;
    const price = parseFloat(customPrice);
    return price > 35;
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-lg font-inter">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">
            Select Your Consultation Package
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div className="space-y-4">
            <Label htmlFor="package" className="text-lg font-semibold text-gray-800">
              Choose Your Package
            </Label>
            <Select value={selectedPackage} onValueChange={handlePackageSelect}>
              <SelectTrigger className="w-full h-12 text-base">
                <SelectValue placeholder="Select a consultation package" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="video" className="text-base py-3">
                  <div className="flex flex-col">
                    <span className="font-semibold">Video Call Consultation</span>
                    <span className="text-sm text-gray-600">15-20 minutes - $35</span>
                  </div>
                </SelectItem>
                <SelectItem value="voice" className="text-base py-3">
                  <div className="flex flex-col">
                    <span className="font-semibold">Voice Call Consultation</span>
                    <span className="text-sm text-gray-600">10-15 minutes - $25</span>
                  </div>
                </SelectItem>
                <SelectItem value="custom" className="text-base py-3">
                  <div className="flex flex-col">
                    <span className="font-semibold">Custom Package</span>
                    <span className="text-sm text-gray-600">Tailored consultation</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {showCustomPrice && (
            <div className="space-y-3 p-4 bg-gray-50 rounded-lg">
              <Label htmlFor="customPrice" className="text-base font-semibold text-gray-800">
                Set Your Price (must be higher than $35)
              </Label>
              <div className="flex items-center space-x-2">
                <span className="text-lg font-bold">$</span>
                <Input
                  id="customPrice"
                  type="number"
                  min="36"
                  placeholder="Enter amount"
                  value={customPrice}
                  onChange={(e) => setCustomPrice(e.target.value)}
                  className="text-base h-10"
                />
              </div>
              {customPrice && !isValidCustomPrice() && (
                <p className="text-red-600 text-sm font-medium">
                  Price must be higher than $35
                </p>
              )}
            </div>
          )}

          <Button 
            onClick={handleBookPackage} 
            disabled={!selectedPackage || (showCustomPrice && !isValidCustomPrice())}
            className="w-full h-12 bg-primary hover:bg-primary/90 text-base font-semibold"
          >
            Proceed to Contact Form
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

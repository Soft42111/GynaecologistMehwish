
export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Dr. Mehwish Atta</h3>
            <p className="text-gray-300">
              Professional gynaecological care through secure telemedicine consultations worldwide.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>General Consultation</li>
              <li>Pregnancy Care</li>
              <li>Fertility Support</li>
              <li>Menopause Care</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#consultation" className="hover:text-primary transition-colors">Book Consultation</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Dr. Mehwish Atta Telemedicine. All rights reserved.
          </p>
          <p className="text-sm text-gray-400 mt-2">
            This website provides telemedicine services and is not a substitute for emergency medical care.
          </p>
        </div>
      </div>
    </footer>
  );
};

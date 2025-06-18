
import { Award, Users, Globe, Heart } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                About Dr. Mehwish Atta
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Dr. Mehwish Atta is a highly qualified and compassionate gynaecologist dedicated to providing exceptional women's healthcare through innovative telemedicine services. With extensive expertise in women's health, she brings personalized care directly to patients worldwide, breaking down geographical barriers to quality healthcare.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Her comprehensive approach encompasses preventive care, reproductive health, pregnancy support, and specialized treatments for various gynaecological conditions. Dr. Atta believes in empowering women through education and accessible healthcare, ensuring every consultation is thorough, confidential, and culturally sensitive.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Through secure telemedicine platforms, she provides expert consultations, follow-up care, and health guidance, making quality gynaecological care available to women regardless of their location. Her commitment to excellence and patient-centered care has helped thousands of women achieve better health outcomes.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-600">Board Certified</div>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-600">10,000+ Patients</div>
              </div>
              <div className="text-center">
                <Globe className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-600">Global Reach</div>
              </div>
              <div className="text-center">
                <Heart className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-600">Compassionate Care</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8">
              <img
                src="/lovable-uploads/9293335f-c30b-4b37-8fca-7c7bdeb8b98c.png"
                alt="Dr. Mehwish Atta"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

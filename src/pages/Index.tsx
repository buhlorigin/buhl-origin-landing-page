
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Globe, 
  Shield, 
  TrendingUp, 
  Users, 
  MapPin, 
  Phone, 
  Mail,
  ArrowRight,
  Leaf,
  Link as LinkIcon,
  Smartphone,
  Coffee,
  Building2,
  Wrench,
  Heart,
  Banknote
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="min-h-screen flex items-center justify-center px-4 relative">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url("/lovable-uploads/5af224e2-ee78-4aca-9eee-4d03645f2e19.png")`
            }}
          ></div>
          <div className="absolute inset-0 bg-black/40"></div>
          
          <div className="text-center max-w-5xl mx-auto relative z-10 animate-fade-in">
            <div className="flex justify-center mb-8">
              <img 
                src="/lovable-uploads/615affde-d69d-45b9-91b3-027bae883732.png" 
                alt="Buhl Origin Logo" 
                className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mb-4"
              />
            </div>
            
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 leading-tight drop-shadow-2xl">
              Buhl Origin
            </h1>
            
            <p className="text-2xl md:text-3xl lg:text-4xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
              Building solutions for a transparent, traceable and fair coffee supply chain.
            </p>
            
            <div className="flex justify-center">
              <Button 
                variant="outline" 
                size="lg"
                className="border-gray-500 text-gray-700 bg-gray-200/90 hover:bg-gray-300/90 px-10 py-4 text-xl backdrop-blur-sm"
                onClick={() => window.location.href = 'mailto:info@buhlorigin.com'}
              >
                Contact Us
                <Mail className="ml-3 w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products & Services Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-green-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-green-600 tracking-wider uppercase">Our Solutions</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-green-800 to-green-600 bg-clip-text text-transparent mb-8">
              Products & Services
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive solutions for transparency, traceability, and sustainability in the coffee supply chain.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* TierraConnect */}
            <div className="group">
              <Card className="h-full bg-white border-gray-200 hover:shadow-2xl transition-all duration-300 hover:border-green-300 hover:-translate-y-2">
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div className="mb-8">
                    <div className="w-32 h-32 mx-auto mb-6 bg-white rounded-2xl shadow-lg flex items-center justify-center border border-gray-100">
                      <img 
                        src="user-uploads://24576b98-889b-46ec-8ab1-b3689cdf4840.png" 
                        alt="TierraConnect Logo" 
                        className="w-24 h-24 object-contain"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">TierraConnect</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      A digital platform enabling traceability, compliance, and fair trade in the coffee supply chain.
                    </p>
                  </div>
                  <div className="mt-auto">
                    <Button 
                      variant="outline" 
                      className="w-full border-green-500 text-green-600 hover:bg-green-500 hover:text-white transition-all duration-300 group-hover:scale-105"
                      onClick={() => navigate('/tierra-connect')}
                    >
                      Deep Dive
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* ROS Specialty Coffee */}
            <div className="group">
              <Card className="h-full bg-white border-gray-200 hover:shadow-2xl transition-all duration-300 hover:border-green-300 hover:-translate-y-2">
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div className="mb-8">
                    <div className="w-32 h-32 mx-auto mb-6 bg-white rounded-2xl shadow-lg flex items-center justify-center border border-gray-100">
                      <img 
                        src="user-uploads://a7b4219b-febc-4c1d-85fe-9f3139b3a3eb.png" 
                        alt="ROS Specialty Coffee Logo" 
                        className="w-24 h-24 object-contain"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">ROS Specialty Coffee</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Premium green and roasted coffee beans sourced from Nicaragua, roasted in Spain, and delivered with full traceability.
                    </p>
                  </div>
                  <div className="mt-auto">
                    <Button 
                      variant="outline" 
                      className="w-full border-green-500 text-green-600 hover:bg-green-500 hover:text-white transition-all duration-300 group-hover:scale-105"
                    >
                      Deep Dive
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* And More */}
            <div className="group">
              <Card className="h-full bg-white border-gray-200 hover:shadow-2xl transition-all duration-300 hover:border-green-300 hover:-translate-y-2">
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div className="mb-8">
                    <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-lg flex items-center justify-center">
                      <div className="text-white text-4xl font-bold">+</div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">And More...</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Additional services and innovations coming soon to strengthen sustainability and transparency in coffee.
                    </p>
                  </div>
                  <div className="mt-auto">
                    <Button 
                      variant="outline" 
                      className="w-full border-gray-400 text-gray-500 hover:bg-gray-500 hover:text-white transition-all duration-300 group-hover:scale-105"
                      disabled
                    >
                      Coming Soon
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative bg-gradient-to-br from-green-600 via-green-700 to-blue-700 rounded-3xl p-12 text-white shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-100 tracking-wider uppercase">Ready to Connect?</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Want to learn more about the project?
              </h2>
              <p className="text-xl mb-10 text-green-100 max-w-2xl mx-auto">
                Join the digital agriculture revolution. Send an email to{" "}
                <a 
                  href="mailto:info@buhlorigin.com" 
                  className="underline hover:text-white transition-colors font-medium bg-white/10 px-2 py-1 rounded"
                >
                  info@buhlorigin.com
                </a>
                {" "}— we'd love to hear from you!
              </p>
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-white text-green-700 hover:bg-gray-50 px-10 py-4 text-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
                onClick={() => window.location.href = 'mailto:info@buhlorigin.com'}
              >
                <Mail className="mr-3 w-6 h-6" />
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black text-gray-100 py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">Buhl Origin SL</h3>
              <div className="space-y-3 text-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="bg-gray-700/80 p-2 rounded-full backdrop-blur-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-lg">Calle Alonso Cano 60, 28003 Madrid, Spain</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-gray-700/80 p-2 rounded-full backdrop-blur-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-lg">+34 672 324 531</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-gray-700/80 p-2 rounded-full backdrop-blur-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <a href="mailto:info@buhlorigin.com" className="hover:text-white transition-colors text-lg">
                    info@buhlorigin.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-300 text-lg mb-2">
                Operated by Buhl Origin SL
              </p>
              <p className="text-gray-400">
                © 2025 Buhl Origin. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

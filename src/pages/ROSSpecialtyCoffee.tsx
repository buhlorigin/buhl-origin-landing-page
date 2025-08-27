import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Mail, ExternalLink, ChevronLeft, ChevronRight, MapPin, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ROSSpecialtyCoffee = () => {
  const navigate = useNavigate();
  
  const [mirjamImageIndex, setMirjamImageIndex] = useState(0);
  const [piconaImageIndex, setPiconaImageIndex] = useState(0);
  
  const mirjamImages = [
    "/lovable-uploads/ef40ee80-56d3-47a3-9208-1557deedb594.png",
    "/lovable-uploads/4667eb7f-4a28-4236-9947-c4d9b1d93aad.png",
    "/lovable-uploads/cb13d26a-895b-40c6-a65c-ffc34eee4bb5.png"
  ];
  
  const piconaImages = [
    "/lovable-uploads/1d882da3-3a27-42b7-999d-271b8c4d0c39.png",
    "/lovable-uploads/64f8dfe7-1e9d-49db-99e4-76522d3decad.png",
    "/lovable-uploads/2d38b3a5-da43-4425-a9ea-cb160f4e9168.png"
  ];

  const nextMirjamImage = () => {
    setMirjamImageIndex((prev) => (prev + 1) % mirjamImages.length);
  };

  const prevMirjamImage = () => {
    setMirjamImageIndex((prev) => (prev - 1 + mirjamImages.length) % mirjamImages.length);
  };

  const nextPiconaImage = () => {
    setPiconaImageIndex((prev) => (prev + 1) % piconaImages.length);
  };

  const prevPiconaImage = () => {
    setPiconaImageIndex((prev) => (prev - 1 + piconaImages.length) % piconaImages.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/')}
              className="flex items-center gap-2 hover:bg-gray-100"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
            <div className="flex items-center gap-4">
              <img 
                src="/lovable-uploads/a7b4219b-febc-4c1d-85fe-9f3139b3a3eb.png" 
                alt="ROS Specialty Coffee Logo" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">ROS Specialty Coffee</h1>
                <p className="text-gray-600">From Seed to Sip</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-green-600 tracking-wider uppercase">Our Story</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-green-800 to-green-600 bg-clip-text text-transparent mb-8">
            Four Generations of Excellence
          </h2>
        </div>
      </section>

      {/* About Us/Story Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Card className="bg-white shadow-xl border-0 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Heritage</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    Rooted in four generations of coffee growers from the highlands of Nueva Segovia, Nicaragua, we've perfected every step from farm to harvest. Now, we're proud to bring our family's specialty beans straight to you, where each cup carries the legacy, care, and bold flavors of our homeland.
                  </p>
                  <div className="bg-green-50 p-6 rounded-xl">
                    <p className="text-green-800 font-medium text-center italic">
                      "Every cup tells the story of our family's dedication to quality and tradition."
                    </p>
                  </div>
                </div>
                <div className="relative h-96 md:h-auto">
                  <img 
                    src="/lovable-uploads/f838e1cf-d6ae-47df-9f22-d2c670adf03a.png"
                    alt="Generational coffee farming tradition"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Finca Mirjam Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Card className="bg-white shadow-xl border-0 overflow-hidden mb-12">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-96 md:h-auto">
                  <img 
                    src={mirjamImages[mirjamImageIndex]}
                    alt="Finca Mirjam"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <button
                    onClick={prevMirjamImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all"
                  >
                    <ChevronLeft className="w-6 h-6 text-white" />
                  </button>
                  <button
                    onClick={nextMirjamImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all"
                  >
                    <ChevronRight className="w-6 h-6 text-white" />
                  </button>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {mirjamImages.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === mirjamImageIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <div className="p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Finca Mirjam</h3>
                  <div className="mb-6">
                    <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      1,250–1,400m elevation
                    </span>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    High in the misty highlands of Nueva Segovia, Finca Mirjam is alive with bird song at dawn, where toucans and hummingbirds flit through our rows of hand-picked cherries. Sun-dried to highlight its bright floral notes and vibrant acidity, this estate reflects our commitment to purity and nature's harmony.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Finca La Picona Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Card className="bg-white shadow-xl border-0 overflow-hidden mb-12">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Finca La Picona</h3>
                  <div className="mb-6">
                    <span className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium mr-2">
                      1,300m elevation
                    </span>
                    <span className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                      Cup of Excellence Contender
                    </span>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Nestled at 1,300 m amid shade trees and volcanic soils, Finca La Picona consistently earns top marks as a Cup of Excellence contender. Its coffees offer a silky body, layered fruit sweetness, and subtle chocolate undertones—proof of five generations' dedication to traceable, award-worthy quality.
                  </p>
                </div>
                <div className="relative h-96 md:h-auto">
                  <img 
                    src={piconaImages[piconaImageIndex]}
                    alt="Finca La Picona"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <button
                    onClick={prevPiconaImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all"
                  >
                    <ChevronLeft className="w-6 h-6 text-white" />
                  </button>
                  <button
                    onClick={nextPiconaImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all"
                  >
                    <ChevronRight className="w-6 h-6 text-white" />
                  </button>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {piconaImages.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === piconaImageIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative bg-gradient-to-br from-green-600 via-green-700 to-blue-700 rounded-3xl p-12 text-white shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-100 tracking-wider uppercase">Get in Touch</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Taste Our Legacy
              </h2>
              <p className="text-xl mb-10 text-green-100 max-w-2xl mx-auto">
                Experience four generations of coffee expertise. Visit our website or reach out to discover the perfect blend for your taste.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="bg-white text-green-700 hover:bg-gray-50 px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
                  onClick={() => window.open('https://roscoffee.es', '_blank')}
                >
                  <ExternalLink className="mr-3 w-5 h-5" />
                  Visit roscoffee.es
                </Button>
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="bg-white text-green-700 hover:bg-gray-50 px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
                  onClick={() => window.location.href = 'mailto:hello@roscoffee.es'}
                >
                  <Mail className="mr-3 w-5 h-5" />
                  hello@roscoffee.es
                </Button>
              </div>
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

export default ROSSpecialtyCoffee;
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { handleClick } from "./common";
import { EMAIL_ADDRESS } from "@/constants";

const Header = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "skills"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom > 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (section: string) => {
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-gray-950 text-white">
      <header className="fixed top-0 left-0 right-0 bg-gray-950/80 backdrop-blur-md py-2 md:py-4 z-50">
        <nav className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold font-oswald">
            Lwazi<span className="text-orange-500 font-inter">.</span>
          </h1>

          <div className="hidden md:flex space-x-4 lg:space-x-8">
            {["Home", "About", "Projects", "Skills"].map((item) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button
                  variant="link"
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={
                    activeSection === item.toLowerCase()
                      ? "text-orange-500"
                      : "text-white"
                  }
                >
                  {item}
                </Button>
              </motion.div>
            ))}
          </div>

          <Button
            onClick={() => handleClick(EMAIL_ADDRESS)}
            className="hidden md:block bg-orange-500 hover:bg-orange-600"
          >
            Hire me!
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </nav>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 px-4"
          >
            <div className="grid grid-cols-2 gap-4">
              {["Home", "About", "Projects", "Skills", "Contact"].map(
                (item) => (
                  <Button
                    key={item}
                    variant="ghost"
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`py-2 ${
                      activeSection === item.toLowerCase()
                        ? "text-orange-500"
                        : "text-white"
                    }`}
                  >
                    {item}
                  </Button>
                )
              )}
            </div>
            <Button
              onClick={() => handleClick(EMAIL_ADDRESS)}
              className="w-full mt-4 bg-orange-500 hover:bg-orange-600"
            >
              Hire me!
            </Button>
          </motion.div>
        )}
      </header>
    </div>
  );
};

export default Header;

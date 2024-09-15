import Header from "./components/header";
import { useState } from "react";
import { useTheme } from "./ThemeContext";
import Home from "./components/home";
import About from "./components/about";
import Skills from "./components/skills";
import Services from "./components/services";
import Contact from "./components/contact";
import ContactPage from "./components/contact-page";

function App() {
  const { theme } = useTheme();
  const [page, setPage] = useState("home");

  return (
    <div className={theme}>
      <div className="App flex w-full">
        <div className="w-10/12 space-y-3 flex flex-col items-center">
          {page === "home" ? (
            <>
              {/* Apply staggered delay inline for each component */}
              <Header
                setPage={() => setPage("contact")}
                // 100ms delay
              />
              <Home setPage={() => setPage("contact")} />
              <About /> {/* 300ms delay */}
              <Skills /> {/* 400ms delay */}
              <Services /> {/* 500ms delay */}
              <Contact
                setPage={() => setPage("contact")}
                className="fade-slide-up"
                style={{ animationDelay: "0.6s" }} // 600ms delay
              />
            </>
          ) : (
            <ContactPage
              setPage={() => setPage("home")}
              className="fade-slide-up"
              style={{ animationDelay: "0.1s" }} // Delay for contact page
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

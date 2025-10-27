import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom"


import "../blocks/App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ItemModal from "./ItemModal";
import { getWeather, filterWeatherData } from "../utils/weatherApi";
import { coordinates, APIkey } from "../utils/constants";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext.jsx";
import AddItemModal from "./AddItemModal.jsx"
import Profile from "./Profile.jsx";
import { getItems, postItems, deleteItems, updateProfile, addCardLike, removeCardLike } from "../utils/api.js"
import RegisterModal from "./RegisterModal";
import LoginModal from "./LoginModal";
import ProtectedRoute from "./ProtectedRoute";
import { signUp, signIn, checkValidity } from "../utils/auth";
import CurrentUserContext from "../contexts/CurrentUserContext"
import EditProfileModal from "./EditProfileModal.jsx";


function App() {
  const [weatherData, setWeatherData] = useState({
    type: "warm",
    temp: { F: 999, C: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [clothingItems, setClothingItems] = useState([]);
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("")
  const [currentUser, setCurrentUser] = useState({})

  const handleRegister = (userData) => {
    signUp(userData)
      .then(() => {
        return signIn({
          email: userData.email,
          password: userData.password,
        });
      })
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        setToken(res.token)
        setIsLoggedIn(true);
        setActiveModal("");
      })
      .catch((err) => {
        console.error("Registration error:", err);
      });
  };
  const navigate = useNavigate()

  const handleLogin = (credentials) => {
    signIn(credentials)
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        setToken(res.token)
        setIsLoggedIn(true);
        setActiveModal("")
        navigate("/profile")
      })
      .catch((err) => {
        console.error("Login error:", err);
      });
  };

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setToken("")
    setIsLoggedIn(false);
  };

  const handleEditProfile = (data) => {
    updateProfile(data, token)
      .then((updatedUser) => {
        console.log("Updated user:", updatedUser);
        setCurrentUser(updatedUser);
        closeModal();
      })
      .catch((err) => {
        console.error("Error updating profile:", err);
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      checkValidity(token)
        .then((data) => {
          setIsLoggedIn(true);
          setToken(token)
          setCurrentUser(data)
        })
        .catch((err) => {
          console.error("Invalid token:", err);
          handleLogout();
        });

    }
  }, []);

  useEffect(() => {
  if (!token) return;

  getItems()
    .then((items) => {
      setClothingItems(items);
    })
    .catch((err) => console.log("Error fetching items:", err));
}, [token]);

  const handleCardLike = ({ id, isLiked }) => {
    const token = localStorage.getItem("jwt");

    const likePromise = !isLiked
      ? addCardLike(id, token)
      : removeCardLike(id, token);

    likePromise
      .then((updatedCard) => {
        setClothingItems((cards) =>
          cards.map((item) => (item._id === id ? updatedCard : item))
        );
      })
      .catch((err) => console.log(err));
  };



  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "F") {
      setCurrentTemperatureUnit("C");
    } else {
      setCurrentTemperatureUnit("F");
    }
  };

  const toggleMobileMenu = () => {
    if (!isMobileMenuOpened) {
      setActiveModal("mobile");
      setIsMobileMenuOpened(true);
    } else {
      setActiveModal("");
      setIsMobileMenuOpened(false);
    }
  };

  const onAddItem = (data) => {
    postItems(data, token)
      .then((newItem) => {
        setClothingItems(clothingItems => [newItem, ...clothingItems])
        closeModal()
      })
      .catch(console.error)
  }

  useEffect(() => {
    if (!activeModal) return;
    const handleEscapeClose = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleEscapeClose);
    return () => {
      document.removeEventListener("keydown", handleEscapeClose);
    };
  }, [activeModal]);

  const handleCardPreview = (card) => {
    setActiveModal("card-preview");
    setSelectedCard(card);
  };

  const handleAddGarment = () => {
    setActiveModal("add-garment");
  };

  const closeModal = () => {
    setActiveModal("");
  };

  const deleteCard = () => {
    deleteItems(selectedCard._id, token)
      .then(() => {
        setClothingItems((cardItems) =>
          cardItems.filter((item) => item._id !== selectedCard._id)
        )
        closeModal()
      })
      .catch(console.error)

  }

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >

        <div className="page">
          <div className="page__content">
            <Header
              activeModal={activeModal}
              handleAddGarment={handleAddGarment}
              weatherData={weatherData}
              toggleMobileMenu={toggleMobileMenu}
              onLoginClick={() => setActiveModal("login")}
              onRegisterClick={() => setActiveModal("register")}
              handleLogout={handleLogout}
              isLoggedIn={isLoggedIn}
            />
            <Routes>
              <Route path="/" element={<Main
                weatherData={weatherData}
                handleCardPreview={handleCardPreview}
                defaultClothingItems={clothingItems}
                onCardLike={handleCardLike}
              />} />

              <Route path="/profile" element={<ProtectedRoute isLoggedIn={isLoggedIn}><Profile
                handleCardPreview={handleCardPreview}
                clothingItems={clothingItems}
                handleAddGarment={handleAddGarment}
                setActiveModal={setActiveModal}
                handleLogout={handleLogout}
              /></ProtectedRoute>} />


            </Routes>
            <Footer />
          </div>
          <AddItemModal
            closeModal={closeModal}
            isOpen={activeModal === "add-garment"}
            onAddItem={onAddItem}
          />

          <ItemModal
            activeModal={activeModal}
            selectedCard={selectedCard}
            closeModal={closeModal}
            deleteCard={deleteCard}
          />

          <RegisterModal
            isOpen={activeModal === "register"}
            onRegister={handleRegister}
            closeModal={closeModal}
          />

          <LoginModal
            isOpen={activeModal === "login"}
            onLogin={handleLogin}
            closeModal={closeModal}
          />

          <EditProfileModal
            isOpen={activeModal === "edit-profile"}
            onClose={closeModal}
            onEditProfile={handleEditProfile}
          />
        </div>

      </CurrentTemperatureUnitContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;

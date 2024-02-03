import React from "react";

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Company</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h3>Our Menu</h3>
      <Pizza />
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12,
    closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  // if (hour >= openHour && hour <= closeHour) {
  //   alert("We're currently open!");
  // } else {
  //   alert("Sorry, we're closed");
  // }

  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()} We're currently open
    </footer>
  );
  // return React.createElement("footer", null, "We are currently open!");
}

function Pizza() {
  return (
    <div>
      <img src="/pizzas/spinaci.jpg" alt="" />
      <h2>Pizza Spinaci</h2>
      <p>Tomato, Mozarella, Spinach and Ricotta Cheese</p>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Pizza />
      <Footer />
    </div>
  );
}

export default App;

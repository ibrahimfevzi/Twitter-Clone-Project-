import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-500 py-4 ">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div>
          <a href="/" className="text-white text-l font-bold">
            Twitter Klonu
          </a>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/entry-list" className="text-white hover:underline">
                Anasayfa
              </a>
            </li>
            <li>
              <a href="/entry" className="text-white hover:underline">
                Yeni Gönderi
              </a>
            </li>
            <li>
              <a href="/login" className="text-white hover:underline">
                Giriş Yap
              </a>
            </li>
            <li>
              <a href="/signup" className="text-white hover:underline">
                Kaydol
              </a>
            </li>
            <li>
              <a href="/profile" className="text-white hover:underline">
                Profil
              </a>
            </li>
            <li>
              <a href="/logout" className="text-white hover:underline">
                Çıkış Yap
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

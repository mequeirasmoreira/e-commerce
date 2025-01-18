/**
 * Header.tsx
 *
 * Componente principal de navegação do e-commerce Sou Latina.
 * Implementa uma barra de navegação moderna com pesquisa, login e carrinho,
 * seguindo padrões de UX estabelecidos no mercado de e-commerce.
 */

"use client";

import React, { useState } from "react";
import { Search, User, Heart, ShoppingBag, Menu, X } from "lucide-react";
import Link from "next/link";

export const Header: React.FC = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  const menuItems = [
    "Novidades",
    "Feminino",
    "Masculino",
    "Infantil",
    "Beleza",
    "Mindset",
    "Calçados",
    "Esportivo",
    "Jeans",
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileSearchOpen) setIsMobileSearchOpen(false);
  };

  const toggleMobileSearch = () => {
    setIsMobileSearchOpen(!isMobileSearchOpen);
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  };

  return (
    <header className="relative bg-white border-b border-neutral-200">
      {/* Barra Superior */}
      <div className="w-full bg-neutral-900 text-white py-2">
        <div className="container mx-auto px-4">
          <p className="text-center text-xs md:text-sm font-secondary">
            Frete GRÁTIS nas compras acima de R$ 299,90
          </p>
        </div>
      </div>

      {/* Conteúdo Principal do Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4 md:gap-8">
          {/* Menu Mobile */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-neutral-700 hover:text-accent-primary transition-colors"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <h1 className="font-primary text-xl md:text-2xl font-bold text-neutral-800">
              Sou Latina
            </h1>
          </Link>

          {/* Barra de Pesquisa - Desktop */}
          <div className="hidden lg:block flex-grow max-w-2xl relative">
            <div
              className={`
              relative flex items-center transition-all duration-200
              ${isSearchFocused ? "transform scale-105" : ""}
            `}
            >
              <input
                type="text"
                placeholder="Buscar por produto, categoria ou marca"
                className="w-full py-2 px-4 pr-12 bg-neutral-100 rounded-full
                         border border-transparent transition-all duration-200
                         focus:outline-none focus:border-accent-primary
                         focus:ring-2 focus:ring-accent-primary/20
                         font-secondary text-sm text-neutral-800
                         placeholder:text-neutral-500"
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
              <button className="absolute right-3 text-neutral-500 hover:text-neutral-700 transition-colors">
                <Search size={20} />
              </button>
            </div>
          </div>

          {/* Botão de Pesquisa - Mobile */}
          <button
            onClick={toggleMobileSearch}
            className="lg:hidden text-neutral-700 hover:text-accent-primary transition-colors"
            aria-label="Buscar"
          >
            <Search size={24} />
          </button>

          {/* Ações do Usuário */}
          <div className="flex items-center gap-2 md:gap-4">
            <button className="hidden md:flex flex-col items-center text-neutral-700 hover:text-accent-primary transition-colors">
              <User size={24} />
              <span className="text-xs font-secondary mt-1">Entrar</span>
            </button>

            <button className="hidden md:flex flex-col items-center text-neutral-700 hover:text-accent-primary transition-colors">
              <Heart size={24} />
              <span className="text-xs font-secondary mt-1">Favoritos</span>
            </button>

            <button className="flex flex-col items-center text-neutral-700 hover:text-accent-primary transition-colors relative">
              <ShoppingBag size={24} />
              <span className="hidden md:block text-xs font-secondary mt-1">Sacola</span>
              <span
                className="absolute -top-1 -right-1 bg-accent-primary text-white
                           text-xs rounded-full w-5 h-5 flex items-center justify-center
                           font-secondary font-medium"
              >
                0
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Barra de Pesquisa - Mobile */}
      <div
        className={`
          lg:hidden border-b border-neutral-200 overflow-hidden transition-all duration-300
          ${isMobileSearchOpen ? "max-h-20 py-4" : "max-h-0"}
        `}
      >
        <div className="container mx-auto px-4">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Buscar por produto, categoria ou marca"
              className="w-full py-2 px-4 pr-12 bg-neutral-100 rounded-full
                       border border-transparent
                       focus:outline-none focus:border-accent-primary
                       focus:ring-2 focus:ring-accent-primary/20
                       font-secondary text-sm text-neutral-800
                       placeholder:text-neutral-500"
            />
            <button className="absolute right-3 text-neutral-500 hover:text-neutral-700 transition-colors">
              <Search size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Menu de Navegação - Desktop */}
      <nav className="hidden lg:block border-t border-neutral-200">
        <div className="container mx-auto px-4">
          <ul className="flex items-center justify-center space-x-8 py-3">
            {menuItems.map((item) => (
              <li key={item}>
                <Link
                  href={`/${item.toLowerCase()}`}
                  className="font-secondary text-sm text-neutral-700 hover:text-accent-primary transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Menu Mobile */}
      <div
        className={`
          fixed inset-0 bg-white z-50 transition-transform duration-300 lg:hidden
          ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="h-full overflow-y-auto">
          <div className="container mx-auto px-4 py-6">
            <div className="flex justify-between items-center mb-8">
              <h2 className="font-primary text-xl font-bold text-neutral-800">Menu</h2>
              <button
                onClick={toggleMobileMenu}
                className="text-neutral-700 hover:text-accent-primary transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Links de Navegação Mobile */}
            <nav className="space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="block font-secondary text-lg text-neutral-700 hover:text-accent-primary transition-colors py-2"
                  onClick={toggleMobileMenu}
                >
                  {item}
                </Link>
              ))}
            </nav>

            {/* Ações do Usuário Mobile */}
            <div className="mt-8 space-y-4 border-t border-neutral-200 pt-8">
              <Link
                href="/login"
                className="flex items-center space-x-3 text-neutral-700 hover:text-accent-primary transition-colors"
                onClick={toggleMobileMenu}
              >
                <User size={24} />
                <span className="font-secondary">Entrar ou Cadastrar</span>
              </Link>
              <Link
                href="/favoritos"
                className="flex items-center space-x-3 text-neutral-700 hover:text-accent-primary transition-colors"
                onClick={toggleMobileMenu}
              >
                <Heart size={24} />
                <span className="font-secondary">Meus Favoritos</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

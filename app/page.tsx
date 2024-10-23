"use client";
import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import HeaderComponent from "./components/HeaderComponent";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Ensure that rendering happens after hydration to avoid mismatches
    setIsMounted(true);
  }, []);

  return (
    <main className="bg-d3d2d6 overflow-x-hidden">
      <Header />
      {isMounted && (
        
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="mb-20">
          <HeaderComponent/>
          </div>
          <Card />
        </div>
      )}
    </main>
  );
}

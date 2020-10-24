import React from "react";
import "./style.css";
import { useEffect, useState } from 'react';
import axios from 'axios';

// These lines import the components
import QuoteView from './components/QuoteView.js'
import AgeGuesser from './components/AgeGuesser.js'

export default function App() {

  return (
    <div>
      <h1>Hello Oasis!</h1>

      <QuoteView />

      <AgeGuesser />


    </div>
  );
}

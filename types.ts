
// Added React import to resolve React.ReactNode type reference
import React from 'react';

export interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}
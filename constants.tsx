import React from 'react';
import { 
  Heart, 
  ShieldCheck, 
  Settings, 
  Dog, 
  Cat, 
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ChevronRight,
  Star,
  TrendingUp,
  Factory,
  BadgeCheck
} from 'lucide-react';

export const LOGO_URL = 'https://i.postimg.cc/dQ5sKwyT/Whats-App-Image-2026-02-04-at-19-06-01-removebg-preview.png';

export const COLORS = {
  primary: 'blue-600',
  primaryDark: 'blue-800',
  secondary: 'yellow-400',
  secondaryDark: 'yellow-500',
  accent: 'blue-50',
  text: 'slate-800'
};

export const NAVIGATION = [
  { name: 'Início', href: '#' },
  { name: 'Seja Revendedor', href: '#revenda' },
  { name: 'Produtos Atacado', href: '#produtos' },
  { name: 'Diferenciais Técnicos', href: '#tecnico' },
  { name: 'Contato B2B', href: '#contato' },
];

export const CONTACT_INFO = {
  email: 'comercial@fsmodapet.com.br',
  phone: '(11) 3608-2640',
  whatsapp: '55 (21) 96551-7467',
  address: 'R. São Francisco Xavier, 268 - Tijuca, Rio de Janeiro - RJ',
  store: 'https://loja.lilicao.com.br/'
};

export const getWhatsAppLink = (message = "Olá, gostaria de mais informações") => {
  const number = CONTACT_INFO.whatsapp.replace(/\D/g, '');
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
};
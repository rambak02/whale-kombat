import { createContext, useState, ReactNode } from 'react';
import { Offer } from '../components/models/response/IOffers';
import OffersService from '../components/service/OffersService';

interface OffersContextProps {
  offers: Offer[];
  updateOffer: (updatedOffer: Offer) => void;
  fetchOffers: (category: string) => void;
}

export const OffersContext = createContext<OffersContextProps | null>(null);

export const OffersProvider = ({ children }: { children: ReactNode }) => {
  const [offers, setOffers] = useState<Offer[]>([]);

  const fetchOffers = async (category: string) => {
    try {
      const response = await OffersService.getOffers(category);
      setOffers(response.data.offers);
    } catch (e) {
      console.error("Ошибка в offers", e);
    }
  };

  const updateOffer = (updatedOffer: Offer) => {
    setOffers(prevOffers =>
      prevOffers.map(offer => offer.id === updatedOffer.id ? updatedOffer : offer)
    );
  };

  return (
    <OffersContext.Provider value={{ offers, updateOffer, fetchOffers }}>
      {children}
    </OffersContext.Provider>
  );
};
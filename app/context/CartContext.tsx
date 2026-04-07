'use client';

import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
  useMemo,
  useCallback,
} from 'react';
import type { Product } from '../data/products';

export type CartItem = Product & { quantity: number };

type CartState = {
  items: CartItem[];
  isOpen: boolean;
};

type CartAction =
  | { type: 'ADD_ITEM'; product: Product }
  | { type: 'REMOVE_ITEM'; id: number }
  | { type: 'UPDATE_QTY'; id: number; qty: number }
  | { type: 'CLEAR' }
  | { type: 'SET_OPEN'; open: boolean }
  | { type: 'HYDRATE'; items: CartItem[] };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find((i) => i.id === action.product.id);
      const items = existing
        ? state.items.map((i) =>
            i.id === action.product.id ? { ...i, quantity: i.quantity + 1 } : i
          )
        : [...state.items, { ...action.product, quantity: 1 }];
      return { ...state, items, isOpen: true };
    }
    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter((i) => i.id !== action.id) };
    case 'UPDATE_QTY':
      if (action.qty <= 0) {
        return { ...state, items: state.items.filter((i) => i.id !== action.id) };
      }
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.id ? { ...i, quantity: action.qty } : i
        ),
      };
    case 'CLEAR':
      return { ...state, items: [] };
    case 'SET_OPEN':
      return { ...state, isOpen: action.open };
    case 'HYDRATE':
      return { ...state, items: action.items };
    default:
      return state;
  }
}

type CartContextType = {
  items: CartItem[];
  isOpen: boolean;
  totalItems: number;
  totalPrice: number;
  addItem: (product: Product) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, qty: number) => void;
  clearCart: () => void;
  setIsOpen: (open: boolean) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export const STORAGE_KEY = 'soulfood-cart';

/** Validate localStorage data before trusting it */
function parseStoredItems(raw: string): CartItem[] {
  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (item): item is CartItem =>
        typeof item?.id === 'number' &&
        typeof item?.name === 'string' &&
        typeof item?.price === 'number' &&
        typeof item?.image === 'string' &&
        typeof item?.category === 'string' &&
        typeof item?.quantity === 'number' &&
        item.quantity > 0 &&
        item.price > 0
    );
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], isOpen: false });
  const [hydrated, setHydrated] = useState(false);

  // Rehydrate from localStorage on mount with schema validation
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const items = parseStoredItems(stored);
      if (items.length > 0) dispatch({ type: 'HYDRATE', items });
    }
    setHydrated(true);
  }, []);

  // Persist to localStorage whenever items change (after hydration)
  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
  }, [state.items, hydrated]);

  const totalItems = useMemo(
    () => state.items.reduce((sum, i) => sum + i.quantity, 0),
    [state.items]
  );

  const totalPrice = useMemo(
    () => state.items.reduce((sum, i) => sum + i.price * i.quantity, 0),
    [state.items]
  );

  const addItem = useCallback((product: Product) => dispatch({ type: 'ADD_ITEM', product }), []);
  const removeItem = useCallback((id: number) => dispatch({ type: 'REMOVE_ITEM', id }), []);
  const updateQuantity = useCallback(
    (id: number, qty: number) => dispatch({ type: 'UPDATE_QTY', id, qty }),
    []
  );
  const clearCart = useCallback(() => dispatch({ type: 'CLEAR' }), []);
  const setIsOpen = useCallback((open: boolean) => dispatch({ type: 'SET_OPEN', open }), []);

  const contextValue = useMemo(
    () => ({
      items: state.items,
      isOpen: state.isOpen,
      totalItems,
      totalPrice,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      setIsOpen,
    }),
    [state.items, state.isOpen, totalItems, totalPrice, addItem, removeItem, updateQuantity, clearCart, setIsOpen]
  );

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextType {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside <CartProvider>');
  return ctx;
}

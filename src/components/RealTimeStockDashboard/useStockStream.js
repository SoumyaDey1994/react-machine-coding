import { useEffect, useRef, useState } from "react";

const STOCK_IDS = Array.from({ length: 20 }, (_, i) =>
  String.fromCharCode(65 + i),
); // A → T

const THRESHOLD = 10;

export function useStockStream() {
  const [stocks, setStocks] = useState(
    STOCK_IDS.map((id) => ({ id, price: 100 })),
  );

  const latestPricesRef = useRef(new Map());
  const lastRenderedRef = useRef(new Map());

  // Init lastRendered
  useEffect(() => {
    stocks.forEach((s) => lastRenderedRef.current.set(s.id, s.price));
  }, []);

  // 🔹 Simulate WebSocket (1 sec updates)
  useEffect(() => {
    const interval = setInterval(() => {
      STOCK_IDS.forEach((id) => {
        // generate a value b/w 90 to 110, then make it an integer
        const newPrice = +(90 + Math.random() * 20).toFixed(2);

        const prev = lastRenderedRef.current.get(id);

        // Buffer always
        latestPricesRef.current.set(id, newPrice);

        // // 🚀 Immediate update (threshold)
        if (prev !== undefined && Math.abs(newPrice - prev) > THRESHOLD) {
          // console.log(`Updating Stock Price Immediately: ${id}`);
          updateSingleStock(id, newPrice);
          lastRenderedRef.current.set(id, newPrice);
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // 🔹 Batch update every 10 sec
  useEffect(() => {
    const interval = setInterval(() => {
      const updates = [];

      for (const [id, price] of latestPricesRef.current.entries()) {
        if (lastRenderedRef.current.get(id) !== price) {
          updates.push({ id, price });
          lastRenderedRef.current.set(id, price);
        }
      }

      if (updates.length) {
        setStocks((prev) => {
          const updated = [...prev];

          updates.forEach(({ id, price }) => {
            const idx = updated.findIndex((s) => s.id === id);
            if (idx !== -1) {
              updated[idx] = { ...updated[idx], price };
            }
          });

          return updated;
        });
      }
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  function updateSingleStock(id, price) {
    setStocks((prev) => {
      const updated = [...prev];
      const idx = updated.findIndex((s) => s.id === id);

      if (idx !== -1) {
        updated[idx] = { ...updated[idx], price };
      }

      return updated;
    });
  }

  return stocks;
}

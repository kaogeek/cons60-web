import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

export default function Section() {
  const [idFromURL, setIdFromURL] = useState(null);

  useEffect(() => {
    const hashValue = window.location.hash;
    const regex = /^#\/section\/(\d+)$/;
    const match = hashValue.match(regex);

    if (match) {
      const id = parseInt(match[1], 10);
      setIdFromURL(id);
    } else {
      setIdFromURL(null);
    }
  }, []);

  return (
    <div>
      <p>ID ที่ได้จาก URL: {idFromURL}</p>

    </div>

  );
}
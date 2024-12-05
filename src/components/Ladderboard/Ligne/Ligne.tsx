import React, { useEffect, useState } from 'react';
import { Query } from "../../Query.tsx"

interface LigneProps {
    idScore: string; // Typage pour user (ajustez selon vos besoins)
}

const Ligne() React.FC<LigneProps> = ({ idScore }) => {
    return (
    <div className="ligne">
        <h2></h2>
    </div>
  )
}

export default Ligne

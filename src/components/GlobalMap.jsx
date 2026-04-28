import React from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const markers = [
  { name: "Germany", coordinates: [10.4515, 51.1657] },
  { name: "Netherlands", coordinates: [5.2913, 52.1326] },
  { name: "France", coordinates: [2.2137, 46.2276] },
  { name: "Italy", coordinates: [12.5674, 41.8719] },
  { name: "UAE", coordinates: [53.8478, 23.4241] },
  { name: "Singapore", coordinates: [103.8198, 1.3521] },
  { name: "Malaysia", coordinates: [101.9758, 4.2105] },
  { name: "Sri Lanka", coordinates: [80.7718, 7.8731] }
];

const GlobalMap = () => {
  return (
    <div style={{ width: '100%', height: '100%', minHeight: '400px', backgroundColor: 'var(--color-offwhite)', borderRadius: '24px', overflow: 'hidden', border: '1px solid var(--color-lightgray)' }}>
      <ComposableMap projectionConfig={{ scale: 220 }} style={{ width: "100%", height: "100%" }}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="var(--color-mint)"
                stroke="var(--color-white)"
                strokeWidth={0.5}
                style={{
                  default: { outline: "none" },
                  hover: { fill: "var(--color-emerald)", outline: "none" },
                  pressed: { outline: "none" },
                }}
              />
            ))
          }
        </Geographies>
        {markers.map(({ name, coordinates }) => (
          <Marker key={name} coordinates={coordinates}>
            <circle r={4} fill="var(--color-emerald-dark)" stroke="var(--color-white)" strokeWidth={1.5} />
            <text
              textAnchor="middle"
              y={-10}
              style={{ fontFamily: 'Inter, sans-serif', fill: "var(--color-charcoal)", fontSize: "10px", fontWeight: "bold" }}
            >
              {name}
            </text>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
};

export default GlobalMap;

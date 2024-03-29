import React, { useState, useEffect } from "react";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";

const SimilarReportHints = ({ onSelectHint }) => {
  // State to store suggestions
  const [resolvedHints, setResolvedHints] = useState([]);
  const [selectedHints, setSelectedHints] = useState([]);

  useEffect(() => {
    // Fetch resolved hints
    // Replace this with your actual logic or API call
    // For now, I'll just use dummy data.
    const dummyResolvedHints = [
      "Hardware device was restarted.",
      "Software updates were applied.",
      "Network issues were resolved by IT support.",
    ];

    // Simulate typing effect
    const typeHintsWithDelay = async () => {
      for (let i = 0; i < dummyResolvedHints.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Adjust the timeout duration as needed
        setResolvedHints((prevHints) => [...prevHints, dummyResolvedHints[i]]);
      }
    };

    typeHintsWithDelay();
  }, []); // Run this effect only once on component mount

  const handleCheckboxChange = (hint) => {
    // Toggle the checkbox
    const newSelectedHints = selectedHints.includes(hint)
      ? selectedHints.filter((selectedHint) => selectedHint !== hint)
      : [...selectedHints, hint];

    // Update the state



    setSelectedHints(newSelectedHints);

    // Pass the selected hints to the parent component
    onSelectHint(newSelectedHints);
  };

  return (
    <>
      <div className="card">
        <div className="card-header">
          <Typography variant="p" fontWeight="lg">
            Have you tried these?
          </Typography>
        </div>
        <div className="card-body">
          {resolvedHints.length > 0 ? (
            <ul>
              {resolvedHints.map((hint, index) => (
                <li key={index}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedHints.includes(hint)}
                        onChange={() => handleCheckboxChange(hint)}
                      />
                    }
                    label={hint}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <Typography variant="p" fontWeight="lg">
              No hints available.
            </Typography>
          )}
        </div>
      </div>
    </>
  );
};

export default SimilarReportHints;

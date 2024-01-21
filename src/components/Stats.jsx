// Stats.jsx
import React, { useState } from 'react';

const Stats = () => {
  const [formData, setFormData] = useState({
    PlasticBottles: 0,
    GlassBottles: 0,
    CigaretteButts: 0,
    PlasticBags: 0
  });
  const [imageSrc, setImageSrc] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/api/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setImageSrc(`data:image/png;base64,${data.image}`);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: parseInt(event.target.value, 10) });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="number" name="PlasticBottles" value={formData.PlasticBottles} onChange={handleChange} />
        <input type="number" name="GlassBottles" value={formData.GlassBottles} onChange={handleChange} />
        <input type="number" name="CigaretteButts" value={formData.CigaretteButts} onChange={handleChange} />
        <input type="number" name="PlasticBags" value={formData.PlasticBags} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      {imageSrc && <img src={imageSrc} alt="Beach Trash Statistics" />}
    </div>
  );
};

export default Stats;
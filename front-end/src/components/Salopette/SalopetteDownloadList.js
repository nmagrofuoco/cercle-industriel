import React, { useEffect, useState } from 'react';

import axios from 'axios';

export default function SalopetteDownloadList({ updateScroller }) {
  const [salopettes, setSalopettes] = useState(null);
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedNumber, setSelectedNumber] = useState('');
  const [selectedSalopetteURL, setSelectedSalopetteURL] = useState(null);
  const [jsxYearOptions, setYearOptions] = useState(null);
  const [jsxNumberOptions, setNumberOptions] = useState(null);

  useEffect(() => {
    axios.get('/api/salopettes').then(res => {
      setSalopettes(res.data);
    });
  }, []);

  // load available years and auto-select first year
  useEffect(() => {
    if (salopettes) {
      setYearOptions(
        salopettes.map(salopette => {
          return <option key={salopette.year}>{salopette.year}</option>;
        })
      );
      setSelectedYear(salopettes[0].year);
    }
  }, [salopettes]);

  // load salopettes from selected year and auto-select first salopette
  useEffect(() => {
    if (selectedYear.length > 0) {
      setNumberOptions(
        salopettes.map(salopette => {
          return (
            salopette.year === selectedYear &&
            salopette.papers.map(paper => (
              <option key={paper.name}>{paper.name}</option>
            ))
          );
        })
      );
      setSelectedNumber(
        salopettes.map(salopette => {
          return salopette.year === selectedYear && salopette.papers[0].name;
        })
      );
      setSelectedSalopetteURL(
        'downloads/salopette' +
          salopettes.find(salopette => salopette.year === selectedYear)
            .papers[0].url
      );
      updateScroller(); // update the scroller to accomodate to new space
    }
  }, [salopettes, selectedYear, updateScroller]);

  const selectSalopetteURL = name => {
    setSelectedNumber(name);
    setSelectedSalopetteURL(
      'downloads/salopette' +
        salopettes
          .find(salopette => salopette.year === selectedYear)
          .papers.find(paper => paper.name === name).url
    );
  };

  const handleSubmit = e => {
    e.preventDefault();
    window.open('https://cercle-industriel.be/' + selectedSalopetteURL);
  };

  if (!salopettes) return null;
  return (
    <div>
      <h2>Archives en ligne</h2>
      <p>
        <span>
          Un homme averti en vaut deux : la Salop' est r??serv??e ?? un public
          averti. Des photos ??rotiques et des articles d??cal??s y sont pr??sent??s.
          L'humour et le sexe y occupent une place importante. Elle est ?? lire
          au second, voir au troisi??me degr??. Son contenu doit ??tre pris avec
          l??g??ret?? et sans s??rieux.
        </span>
      </p>
      <form onSubmit={e => handleSubmit(e)}>
        <label htmlFor="years">Choisissez une ann??e d'??dition :</label>
        <select
          id="years"
          name="years"
          value={selectedYear}
          onChange={e => setSelectedYear(e.target.value)}
        >
          {jsxYearOptions}
        </select>
        <label htmlFor="numbers">et le num??ro d??sir?? :</label>
        <select
          id="numbers"
          name="numbers"
          value={selectedNumber}
          onChange={e => selectSalopetteURL(e.target.value)}
        >
          {jsxNumberOptions}
        </select>
        <input type="submit" value="Parcourir" />
      </form>
    </div>
  );
}

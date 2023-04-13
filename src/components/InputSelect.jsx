import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import axios from 'axios';

const InputSelect = () => {
  const [filter, setFilter] = useState();
  const [filterSelected, setFilterSelected] = useState();
  const navigate = useNavigate();

  const clickOption = () => {
    if (filterSelected) {
      navigate(`/categories/${filterSelected}`);
    }
  };

  const removeFilter = () => navigate('/products');

  useEffect(() => {
    const URL = 'https://e-commerce-api-v2.academlo.tech/api/v1/categories';
    axios
      .get(URL)
      .then((res) => setFilter(res.data?.data.categories))
      .catch((error) => console.log(error));
  }, []);

  const category = [];

  for (let i = 0; i < filter?.length; i++) {
    category.push({
      label: filter[i].name,
      value: filter[i].categoryId,
    });
  }

  const handleSelectChange = (selectedOption) => {
    setFilterSelected(selectedOption.value);
  };

  return (
    <div className="filter__categories">
      <Select
        options={category}
        onChange={handleSelectChange}
        className="filter__categories__selector"
      />
      <button onClick={clickOption}>
        <ion-icon name="filter-outline"></ion-icon> Filter
      </button>
      <button onClick={removeFilter}> Regroup</button>
    </div>
  );
};

export default InputSelect;

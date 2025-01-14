import React, { useEffect, useState } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import fetchColorService from "../services/fetchColorService";
import { axiosWithAuth } from "../helpers/axiosWithAuth";

const BubblePage = () => {
  const [colors, setColors] = useState([]);
  const [editing, setEditing] = useState(false);
  const [updating, setUpdating] = useState();

  useEffect(() => {
    fetchColorService()
      .then((response) => {
        setColors(response.data);
      })
      .catch((err) => console.log(err));
  }, [updating]);

  const toggleEdit = (value) => {
    setEditing(value);
  };

  const saveEdit = (editColor) => {
    setUpdating(true);
    axiosWithAuth()
      .put(`/colors/${editColor.id}`, editColor)
      .then((response) => {
        setUpdating(false);
      })
      .catch((err) => console.log("put error: ", err));
  };

  const deleteColor = (colorToDelete) => {
    setUpdating(true);
    axiosWithAuth()
      .delete(`/colors/${colorToDelete.id}`, colorToDelete)
      .then((response) => {
        setUpdating(false);
      })
      .catch((err) => console.log("put error: ", err));
  };

  return (
    <div className="container">
      <ColorList
        colors={colors}
        editing={editing}
        toggleEdit={toggleEdit}
        saveEdit={saveEdit}
        deleteColor={deleteColor}
      />
      <Bubbles colors={colors} />
    </div>
  );
};

export default BubblePage;

//Task List:
//1. When the component mounts, make an axios call to retrieve all color data and push to state.
//2. Complete toggleEdit, saveEdit, deleteColor and functions

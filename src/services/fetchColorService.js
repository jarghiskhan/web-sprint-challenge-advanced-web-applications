import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../helpers/axiosWithAuth";

const fetchColorService = () => {
  return axiosWithAuth()
    .get("/colors")
    .then((response) => response)
    .catch((err) => err);
};

export default fetchColorService;

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Pablo Fiallos
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"


function enterClicked() {
  // input
  const base = parseInt(document.getElementById("base").value)
  const height = parseInt(document.getElementById("height").value)

  // output
  document.getElementById("user-info").innerHTML =
    "Area = " + (base * height / 2) + " units squared"
}
